import { NextRequest, NextResponse } from "next/server";
import { sendSubmissionEmail, escapeHtml } from "@/utils/email";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;
const recent: Map<string, number[]> = new Map();

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = recent.get(ip) || [];
  const filtered = arr.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  filtered.push(now);
  recent.set(ip, filtered);
  return filtered.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) return new NextResponse("Too many requests", { status: 429 });

    const body = await req.json().catch(() => ({}));
    const {
      company = "",
      website = "",
      sector = "",
      contact = "",
      email = "",
      phone = "",
      goals = "",
      tier = "",
      budget = "",
      regions = [],
      message = "",
      consent = false,
      hp_field = "",
    } = body || {};

    if (hp_field) return new NextResponse("ok", { status: 200 }); // honeypot
    if (!company || !contact || !email || !consent) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const bookingId = crypto.randomUUID();

    const list = [
      ["Company", company],
      ["Website", website],
      ["Sector", sector],
      ["Contact", contact],
      ["Email", email],
      ["Phone", phone],
      ["Goals", goals],
      ["Tier", tier],
      ["Budget", budget],
      ["Regions", Array.isArray(regions) ? regions.join(", ") : String(regions)],
      ["Message", message],
      ["Consent", consent ? "yes" : "no"],
      ["IP", ip],
      ["Ref", bookingId],
    ];

    const html = `<div><p>New advertiser application</p><ul>${list
      .map(([k, v]) => `<li><strong>${escapeHtml(String(k))}:</strong> ${escapeHtml(String(v || ""))}</li>`)
      .join("")}</ul></div>`;

    await sendSubmissionEmail({ subject: `[Ads] New advertiser application (${bookingId})`, html, text: list.map(([k, v]) => `${k}: ${v}`).join("\n") });

    return NextResponse.json({ ok: true, ref: bookingId });
  } catch (e: unknown) {
    console.error(e);
    return new NextResponse("Server error", { status: 500 });
  }
}
