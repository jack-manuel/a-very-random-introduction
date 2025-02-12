import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>
        A Very <s>Short</s> Random Introduction
      </h1>
      <Link className={buttonVariants({ variant: "link" })} href="/books">
        All the books &rarr;
      </Link>
    </div>
  );
}
