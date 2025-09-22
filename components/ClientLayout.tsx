"use client";
import { usePathname } from "next/navigation";
import PageWrapper from "./PageWrapper";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Convert null to undefined explicitly for safety
  const safePathname: string | undefined = pathname || undefined;

  return (
    <PageWrapper routeKey={safePathname}>
      <div className="pt-20 container mx-auto px-4">
        {children}
      </div>
    </PageWrapper>
  );
}
