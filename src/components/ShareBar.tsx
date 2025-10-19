"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShareBar({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("https://resinaro.co.uk/community/moka-coffee-kit");

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(window.location.href);
  }, []);

  const share = async () => {
    const title = "The No-Machine Italian Coffee Kit (UK Edition) — Resinaro";
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch {
      /* no-op */
    }
  };

  const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    "Moka coffee, UK kitchen—no machine needed ☕"
  )}&url=${encodeURIComponent(url)}`;

  return (
    <div className={`flex flex-wrap items-center gap-2 text-sm ${className}`}>
      <button
        onClick={share}
        className="inline-flex h-9 items-center rounded-xl border bg-white/70 px-3 font-medium hover:bg-white"
      >
        {copied ? "Link copied ✓" : "Share / Copy link"}
      </button>
      <Link
        className="inline-flex h-9 items-center rounded-xl border bg-white/70 px-3 font-medium hover:bg-white"
        target="_blank"
        rel="noopener noreferrer"
        href={xIntent}
      >
        Post to X
      </Link>
    </div>
  );
}
