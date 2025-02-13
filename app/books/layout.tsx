import { SiteHeader } from "@/components/site-header";
import { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
