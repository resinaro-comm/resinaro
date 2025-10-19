"use client";

import { useState } from "react";

type Props = {
  path: string; // relative path to copy (will be resolved to absolute on click)
  label?: string; // aria-label
  className?: string;
  children?: React.ReactNode; // button content
};

export default function CopyLinkButton({ path, label = "Copy link", className = "", children }: Props) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    try {
      const origin = window.location.origin;
      const full = new URL(path, origin).toString();
      await navigator.clipboard.writeText(full);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={className}
    >
      {copied ? "Copied!" : children ?? "Share"}
    </button>
  );
}
