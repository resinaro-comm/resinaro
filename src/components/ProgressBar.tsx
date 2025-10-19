"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const height = el.scrollHeight - el.clientHeight;
      const scrolled = height > 0 ? (el.scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-40 h-1 bg-emerald-600 transition-[width]"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
