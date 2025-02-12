import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePubDate(pubDate: string) {
  const [day, month, year] = pubDate.split("/").map(Number);
  return new Date(year, month - 1, day);
}
