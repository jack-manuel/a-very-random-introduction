import books from "@/data/books.json";
import { compareAsc, compareDesc, parse } from "date-fns";

export type Book = {
  isbn: string;
  title: string;
  edition: number;
  authors: string;
  pubDate: string;
  pages: number;
  blurb?: string;
  points?: string;
  contents?: string;
  catalogueUrl?: string;
  coverUrl?: string;
};

// Sort books by publication date with reduced repetition
export function sortedBooks(dir: "asc" | "desc" = "asc"): Book[] {
  return [...books].sort((a, b) => {
    const dateA = parse(a.pubDate, "dd/MM/yyyy", new Date());
    const dateB = parse(b.pubDate, "dd/MM/yyyy", new Date());

    return dir === "asc" ? compareAsc(dateA, dateB) : compareDesc(dateA, dateB);
  });
}

// Retrieve a book by ISBN
export function getBookByIsbn(isbn: string): Book | undefined {
  return books.find((b) => b.isbn === isbn);
}
