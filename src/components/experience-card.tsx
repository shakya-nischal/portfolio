import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ExperienceEntry } from "@/lib/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const primaryRole = entry.roles[0];
  const olderRoles = entry.roles.slice(1);

  return (
    <li className="glow-card group rounded-lg p-6 -mx-6 hover:bg-card/50 transition-colors">
      <div className="grid sm:grid-cols-[140px_1fr] gap-1 sm:gap-6">
        {/* Date column */}
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground pt-1">
          {entry.period}
        </p>

        {/* Content column */}
        <div>
          <h3 className="text-base font-semibold leading-snug">
            {entry.companyUrl ? (
              <Link
                href={entry.companyUrl}
                target="_blank"
                className="inline-flex items-baseline gap-1 hover:text-primary transition-colors"
              >
                <span>
                  {primaryRole.title}
                  <span className="text-muted-foreground"> · </span>
                  {entry.company}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <span>
                {primaryRole.title}
                <span className="text-muted-foreground"> · </span>
                {entry.company}
              </span>
            )}
          </h3>

          {/* Older role progressions, if any */}
          {olderRoles.length > 0 && (
            <ul className="mt-1 text-sm text-muted-foreground">
              {olderRoles.map((r) => (
                <li key={r.title}>
                  {r.title}
                  <span className="ml-2 text-xs">{r.dates}</span>
                </li>
              ))}
            </ul>
          )}

          {entry.location && (
            <p className="mt-1 text-xs text-muted-foreground">
              {entry.location}
            </p>
          )}

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {entry.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {entry.stack.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="text-xs font-normal"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
