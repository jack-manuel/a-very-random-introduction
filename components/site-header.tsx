"use client";

import { SearchForm } from "@/components/search-form";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-16 w-full items-center justify-between gap-2 px-4">
        <Link href="/" className="hidden md:block">
          A Very Random Introduction
        </Link>
        <SearchForm className="w-full" />
      </div>
    </header>
  );
}
