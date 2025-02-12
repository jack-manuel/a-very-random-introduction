import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePubDate(pubDate: string) {
  const [day, month, year] = pubDate.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export function processAuthors(authors: string) {
  const authorsArray = authors.split(";");
  const firstNamesFirst = [];
  for (const author of authorsArray) {
    const names = author.split(",");
    firstNamesFirst.push(`${names[1]} ${names[0]}`);
  }
  return firstNamesFirst;
}
