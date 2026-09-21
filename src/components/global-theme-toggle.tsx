import { ThemeToggle } from "@/components/theme-toggle";

export function GlobalThemeToggle() {
  return (
    <div className="fixed right-5 top-5 z-50 lg:right-8 lg:top-8">
      <ThemeToggle />
    </div>
  );
}
