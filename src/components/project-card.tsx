import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block p-6 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <p className="text-xs text-neutral-500">
            {project.period} · {project.role}
          </p>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-700">{project.summary}</p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors flex-shrink-0" />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.slice(0, 4).map((s) => (
          <Badge key={s} variant="secondary" className="text-xs">
            {s}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
