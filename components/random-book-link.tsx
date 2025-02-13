"use client";

import { Button } from "@/components/ui/button";

import books from "@/data/books.json";
import { useRouter } from "next/navigation";

export default function RandomBookLink() {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        router.push(
          `/books/${books[Math.floor(Math.random() * books.length)].isbn}`,
        )
      }
      variant="link"
    >
      Random book &rarr;
    </Button>
  );
}
