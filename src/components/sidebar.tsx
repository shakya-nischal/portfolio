"use client";

import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// External "store" for the active section — read from outside React, observed via useSyncExternalStore.
function useActiveSection(sectionIds: string[]): string {
  // store the current active id outside React's render cycle
  const stateRef = React.useRef<string>(sectionIds[0]);
  const listenersRef = React.useRef<Set<() => void>>(new Set());

  const subscribe = React.useCallback((callback: () => void) => {
    listenersRef.current.add(callback);

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the topmost section currently intersecting, in document order
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const newActive = visible[0].target.id;
          if (newActive !== stateRef.current) {
            stateRef.current = newActive;
            listenersRef.current.forEach((cb) => cb());
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      listenersRef.current.delete(callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSnapshot = React.useCallback(() => stateRef.current, []);
  const getServerSnapshot = React.useCallback(
    () => sectionIds[0],
    [sectionIds],
  );

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Sidebar() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[420px] lg:py-24 lg:pl-16 lg:pr-12 lg:flex lg:flex-col lg:justify-between px-6 pt-12 pb-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Nischal Shakya
        </h1>
        <h2 className="mt-3 text-lg text-foreground">Software Engineer</h2>
        <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
          I build scalable web and eCommerce platforms, and I&apos;m moving into
          data engineering.
        </p>

        {/* Anchor nav — desktop only */}
        <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="space-y-3 text-sm font-mono uppercase tracking-widest">
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social + theme toggle */}
      <div className="mt-12 lg:mt-0 flex items-center gap-5">
        <Link
          href="https://github.com/shakya-nischal"
          target="_blank"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nischal-shakya-79860a178/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="mailto:shakyanischal2913@gmail.com"
          aria-label="Email"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-5 w-5" />
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
