"use client";

import { SearchForm } from "@/components/search-form";
import Link from "next/link";
import RandomBookLink from "@/components/random-book-link";
import { buttonVariants } from "@/components/ui/button";
import { useSelectedLayoutSegments } from "next/navigation";

export function SiteHeader() {
  const segments = useSelectedLayoutSegments();
  return (
    <header className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-16 w-full items-center justify-between gap-2 px-4">
        <Link href="/" className="hidden md:block">
          A Very Random Introduction
        </Link>
        {segments.length === 0 && <SearchForm className="w-full" />}
        {segments.length > 0 && (
          <Link className={buttonVariants({ variant: "link" })} href="/books">
            &larr; All the books
          </Link>
        )}
        <RandomBookLink />
      </div>
    </header>
  );
}
