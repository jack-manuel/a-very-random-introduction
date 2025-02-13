import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { processAuthors } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { getBookByIsbn } from "@/lib/book-functions";

export default async function Page({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const isbn = (await params).isbn;

  const book = getBookByIsbn(isbn);

  if (!book) {
    return notFound();
  }

  return (
    <div className="p-2 md:p-4">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {book.title}
            </h1>
          </div>

          <section aria-labelledby="info" className="mt-4">
            <h2
              id="info"
              className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
            >
              by {processAuthors(book.authors).join(" ,")}
            </h2>

            <div className="grid grid-cols-3 place-items-center">
              <Badge variant="outline" className="truncate">
                {`${book.edition}${
                  book.edition === 1
                    ? "st"
                    : book.edition === 2
                      ? "nd"
                      : book.edition === 3
                        ? "rd"
                        : "th"
                } edition`}
              </Badge>

              <div className="flex flex-col text-sm md:flex-row md:gap-x-1">
                <span className="">Published:</span>
                <time dateTime={book.pubDate} className="text-muted-foreground">
                  {book.pubDate}
                </time>
              </div>

              <Button variant="link" asChild>
                <a
                  href={book.catalogueUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Catalogue
                  <ArrowUpRight />
                </a>
              </Button>
            </div>

            <div className="mt-4 space-y-6">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {book.blurb}
              </p>
            </div>

            {book.points && (
              <div className="mt-4 space-y-6">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {book.points.split("~").map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Table of contents</CardTitle>
              </CardHeader>
              <CardContent>
                {book.contents ? (
                  <Table>
                    <TableCaption>{book.pages} pages</TableCaption>
                    <TableBody>
                      {book.contents.split("; ").map((content, index) => (
                        <TableRow key={index}>
                          <TableCell>{content}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div>Table of contents not available</div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>

        {book.coverUrl ? (
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <Image
              alt="cover image"
              src={book.coverUrl}
              width={350}
              height={550}
              className="aspect-[2/3] w-full rounded-lg object-cover shadow"
              priority
            />
          </div>
        ) : (
          <Card className="mt-10 aspect-[2/3] lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <CardContent className="flex h-full flex-col items-center justify-center font-mono">
              Cover not available
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
