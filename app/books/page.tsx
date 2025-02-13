import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { sortedBooks } from "@/lib/book-functions";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sortDir = (await searchParams).sortDir;

  const books =
    sortDir === "asc" || sortDir === "desc"
      ? sortedBooks(sortDir)
      : sortedBooks();

  return (
    <div className="p-4">
      <div className="my-2 flex items-center gap-x-2 px-4">
        <Link
          href={`/books?sortDir=${sortDir === "asc" ? "desc" : "asc"}`}
          className={buttonVariants({ variant: "outline" })}
        >
          {sortDir === "asc" ? "oldest > newest" : "newest > oldest"}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {books.map((book) => {
          return (
            <Card
              key={book.isbn}
              className="col-span-1 flex aspect-[2/3] flex-col justify-between shadow"
            >
              <div>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/books/${book.isbn}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {book.title}
                      </Link>
                      {book.edition !== 1 && (
                        <Badge variant="outline" className="truncate">
                          {`${book.edition}${
                            book.edition === 2
                              ? "nd"
                              : book.edition === 3
                                ? "rd"
                                : "th"
                          } edition`}
                        </Badge>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{book.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="lineline-clamp-6 italic">
                    {book.points?.split("~")[0]}
                  </blockquote>
                </CardContent>
              </div>
              <CardFooter>
                <div className="flex w-full items-center justify-between">
                  <time
                    dateTime={book.pubDate.split("/")[2]}
                    className="text-sm text-muted-foreground"
                  >
                    {book.pubDate.split("/")[2]}
                  </time>

                  <Link
                    href={`/books/${book.isbn}`}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
