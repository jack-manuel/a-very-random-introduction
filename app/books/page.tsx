"use client";

import { books } from "@/lib/databank/books";

import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid auto-rows-[1fr] grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
      {books
        .filter((book) => book.coverUrl)
        .map((book) => (
          <Card
            key={book.isbn}
            className="flex aspect-[2/3] w-full items-center justify-center"
          >
            <CardContent>{book.title}</CardContent>
          </Card>
        ))}
    </div>
  );
}
