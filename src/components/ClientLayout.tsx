"use client";
import PageWrapper from "./PageWrapper";
import { ReactNode } from "react";
import type { Locale } from "@/i18n";

export default function ClientLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return <PageWrapper locale={locale}>{children}</PageWrapper>;
}
