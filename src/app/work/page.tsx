import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "Software engineering, data engineering, analytics, and research projects by Nischal Shakya.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      {/* Back link */}
      <Link
        href="/#projects"
        className="group mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        Back to portfolio
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Selected Work
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A collection of projects across software engineering, data
          engineering, analytics, and applied AI research.
        </p>
      </header>

      {/* Projects */}
      {projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          More projects coming soon.
        </p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-24 border-t border-border pt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nischal Shakya
      </footer>
    </main>
  );
}
