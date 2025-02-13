import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import RandomBookLink from "@/components/random-book-link";

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>
        A Very <s>Short</s> Random Introduction
      </h1>
      <Link className={buttonVariants({ variant: "link" })} href="/books">
        All the books &rarr;
      </Link>
      <RandomBookLink />
    </div>
  );
}
