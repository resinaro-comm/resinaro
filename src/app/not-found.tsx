// src/app/not-found.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DEFAULT_LOCALE = "en";

/**
 * Root-level 404 (outside /[locale]).
 * Immediately redirect to the localized 404 so the styled layout is used.
 */
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${DEFAULT_LOCALE}/404`);
  }, [router]);

  return null;
}
