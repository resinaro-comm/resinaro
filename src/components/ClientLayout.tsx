"use client";
import PageWrapper from "./PageWrapper";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
