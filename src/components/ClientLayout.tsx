"use client";
import PageWrapper from "./PageWrapper";
import { ReactNode, Suspense } from "react";
import type { Locale } from "@/i18n";
import NewsletterModal from "./NewsletterModal";

export default function ClientLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <>
      <PageWrapper locale={locale}>{children}</PageWrapper>
      <Suspense fallback={null}>
        <NewsletterModal />
      </Suspense>
    </>
  );
}
