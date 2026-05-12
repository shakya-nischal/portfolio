import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  role: string;
  period: string;
  cover?: string;
  content: string;
};

const projectsDir = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      content,
      ...(data as Omit<Project, "slug" | "content">),
    };
  });

  return projects.sort((a, b) => b.period.localeCompare(a.period)); // Sort by period, newest first
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
