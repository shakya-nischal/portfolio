"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// useSyncExternalStore-based "isMounted" hook — no setState in effect, no warning
function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {}, // subscribe: nothing to subscribe to
    () => true, // getSnapshot on client: always true
    () => false, // getServerSnapshot: false during SSR
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return <div className="w-9 h-9" />; // prevent layout shift on first load
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
