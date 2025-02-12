import { books } from "@/lib/databank/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn, processAuthors } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default async function Page({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const isbn = (await params).isbn;
  const book = books.find((b) => b.isbn === isbn);
  if (!book) return notFound();

  return (
    <div className="p-2 md:p-4">
      <div className="flex items-center justify-between border-b py-2">
        <Link href="/books" className={buttonVariants({ variant: "link" })}>
          &larr; Back to all books
        </Link>
        <Link href="/books" className={buttonVariants({ variant: "link" })}>
          Random book &rarr;
        </Link>
      </div>
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
            <div className="flex items-center">
              <p className="text-lg sm:text-xl">book price or something</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          aria-hidden="true"
                          className={cn("size-5 shrink-0")}
                        />
                      ))}
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm">5 reviews</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base">description</p>
            </div>
            <div className="mt-6 flex items-center">
              <Check
                aria-hidden="true"
                className="size-5 shrink-0 text-green-500"
              />
              <p className="ml-2 text-sm">In stock and ready to ship</p>
            </div>

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
              className="aspect-[2/3] w-full rounded-lg object-cover"
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
