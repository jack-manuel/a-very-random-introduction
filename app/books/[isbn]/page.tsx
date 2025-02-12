import { books } from "@/lib/databank/books";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const isbn = (await params).isbn;
  const book = books.find((b) => b.isbn === isbn);
  if (!book) return notFound();

  return (
    <div>
      <h1>{book.title}</h1>
    </div>
  );
}
