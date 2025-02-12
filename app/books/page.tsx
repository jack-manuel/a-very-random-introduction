"use client";

import { books } from "@/lib/databank/books";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { parsePubDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {books
        .filter((book) => book.coverUrl)
        .map((book) => {
          const pubDate = parsePubDate(book.pubDate);
          return (
            <Card
              key={book.isbn}
              className="col-span-1 flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>{book.title}</CardTitle>
                  <CardDescription>{book.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic">
                    {book.points?.split("~")[0]}
                  </blockquote>
                </CardContent>
              </div>
              <CardFooter>
                <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
                  <time
                    dateTime={pubDate.toDateString()}
                    className="text-right"
                  >
                    {pubDate.toLocaleDateString()}
                  </time>
                  <Link
                    href={`/books/${book.isbn}`}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
}
