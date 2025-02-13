import { ThemeToggleButton } from "@/components/theme-toggle-button";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          <ThemeToggleButton />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground md:order-1 md:mt-0">
          Unofficial, not affiliated, no rights reserved, no guarantees.
        </p>
      </div>
    </footer>
  );
}
