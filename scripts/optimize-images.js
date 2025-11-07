#!/usr/bin/env node
/**
 * Optimize images to modern formats using sharp.
 *
 * Usage:
 *   node scripts/optimize-images.js <inputDir> [outputDir] [--formats=webp,avif,jpeg] [--quality=82] [--avif=50] [--jpeg=82] [--concurrency=4] [--overwrite]
 *
 * Examples:
 *   node scripts/optimize-images.js public/images                     # write .webp/.avif next to originals
 *   node scripts/optimize-images.js public/images public/images-opt   # mirror tree into a new folder
 *   node scripts/optimize-images.js public --formats=webp --quality=80
 */

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('\n[optimize-images] Missing dependency: sharp');
  console.error('Install it first: npm i -D sharp');
  process.exit(1);
}

const exts = new Set(['.png', '.jpg', '.jpeg']);

function parseArgs(argv) {
  const args = { formats: ['webp', 'avif'], quality: 82, avif: 50, jpeg: 82, concurrency: 4, overwrite: false };
  const pos = [];
  for (const a of argv.slice(2)) {
    if (a.startsWith('--formats=')) args.formats = a.split('=')[1].split(',').map(s => s.trim()).filter(Boolean);
    else if (a.startsWith('--quality=')) args.quality = parseInt(a.split('=')[1], 10) || 82;
    else if (a.startsWith('--avif=')) args.avif = parseInt(a.split('=')[1], 10) || 50;
    else if (a.startsWith('--jpeg=')) args.jpeg = parseInt(a.split('=')[1], 10) || 82;
    else if (a.startsWith('--concurrency=')) args.concurrency = Math.max(1, parseInt(a.split('=')[1], 10) || 4);
    else if (a === '--overwrite') args.overwrite = true;
    else pos.push(a);
  }
  if (!pos[0]) {
    console.error('Usage: node scripts/optimize-images.js <inputDir> [outputDir] [--formats=webp,avif,jpeg] [--quality=82] [--avif=50] [--jpeg=82] [--concurrency=4] [--overwrite]');
    process.exit(1);
  }
  args.input = path.resolve(process.cwd(), pos[0]);
  args.output = path.resolve(process.cwd(), pos[1] || pos[0]);
  return args;
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile() && exts.has(path.extname(e.name).toLowerCase())) yield full;
  }
}

async function ensureDir(p) {
  await fsp.mkdir(p, { recursive: true });
}

async function convertOne(file, rel, args) {
  const baseName = path.basename(file, path.extname(file));
  const destDir = path.join(args.output, path.dirname(rel));
  await ensureDir(destDir);

  const image = sharp(file, { failOn: 'none' });
  const out = [];

  if (args.formats.includes('webp')) {
    const outPath = path.join(destDir, `${baseName}.webp`);
    if (args.overwrite || !fs.existsSync(outPath)) {
      await image.clone().webp({ quality: args.quality }).toFile(outPath);
      out.push(outPath);
    }
  }
  if (args.formats.includes('avif')) {
    const outPath = path.join(destDir, `${baseName}.avif`);
    if (args.overwrite || !fs.existsSync(outPath)) {
      await image.clone().avif({ quality: args.avif }).toFile(outPath);
      out.push(outPath);
    }
  }
  if (args.formats.includes('jpeg')) {
    const outPath = path.join(destDir, `${baseName}.jpg`);
    if (args.overwrite || !fs.existsSync(outPath)) {
      await image.clone().jpeg({ quality: args.jpeg, mozjpeg: true }).toFile(outPath);
      out.push(outPath);
    }
  }
  return out;
}

async function run() {
  const args = parseArgs(process.argv);
  const t0 = Date.now();
  let total = 0, files = 0;

  // collect list
  const list = [];
  for await (const f of walk(args.input)) {
    const rel = path.relative(args.input, f);
    list.push({ f, rel });
  }
  if (!list.length) {
    console.log(`[optimize-images] No PNG/JPG found in ${args.input}`);
    return;
  }
  console.log(`[optimize-images] Converting ${list.length} images from ${args.input} -> ${args.output}`);

  // simple pool
  let i = 0; const pool = new Array(args.concurrency).fill(0).map(async () => {
    while (i < list.length) {
      const idx = i++;
      const { f, rel } = list[idx];
      try {
        const outs = await convertOne(f, rel, args);
        total += outs.length;
        files += 1;
        if (idx % 10 === 0) console.log(`  [${idx + 1}/${list.length}] ${rel}`);
      } catch (e) {
        console.warn(`[warn] ${rel}: ${e.message || e}`);
      }
    }
  });
  await Promise.all(pool);

  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[optimize-images] Done. Source files: ${files}, outputs written: ${total} in ${secs}s.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
