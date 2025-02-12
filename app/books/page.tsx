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

import Link from "next/link";
import { Ellipsis } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { parsePubDate } from "@/lib/utils";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {books
        .filter((book) => book.coverUrl)
        .sort(
          (a, b) =>
            parsePubDate(a.pubDate).getTime() -
            parsePubDate(b.pubDate).getTime(),
        )
        .map((book) => {
          return (
            <Card
              key={book.isbn}
              className="col-span-1 flex aspect-[2/3] flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      {book.title}
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
                    <Ellipsis />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
}
