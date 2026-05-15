import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { useMDXComponents } from "../../../../mdx-components";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const components = useMDXComponents({});

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      {/* Back link */}
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to projects
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
          {project.period} · {project.role}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-6">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="text-xs font-normal">
              {s}
            </Badge>
          ))}
        </div>
      </header>

      {/* MDX content */}
      <article className="prose-content text-muted-foreground">
        <MDXRemote source={project.content} components={components} />
      </article>

      {/* Footer back link */}
      <div className="mt-24 pt-8 border-t border-border">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          View all projects
        </Link>
      </div>
    </div>
  );
}
