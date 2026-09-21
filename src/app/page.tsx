import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { experience } from "@/lib/experience";
import { getAllProjects } from "@/lib/projects";

const skillGroups = [
  {
    title: "Data Engineering & Analytics",
    skills: [
      "SQL",
      "SQL Server",
      "T-SQL",
      "ETL",
      "Data Warehousing",
      "Dimensional Modelling",
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
      "Python",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Laravel",
      "Symfony",
      "Pimcore",
      "Magento 2",
      "React",
      "React Native",
      "WordPress",
      "Shopify",
      "REST APIs",
    ],
  },
  {
    title: "Databases, Tools & Infrastructure",
    skills: [
      "MySQL",
      "MariaDB",
      "Docker",
      "Apache",
      "Nginx",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
];

export default function HomePage() {
  const featured = getAllProjects()
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => a.featuredOrder! - b.featuredOrder!)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Sidebar />

      <main className="lg:ml-[420px] px-6 py-12 lg:py-24 lg:pr-16 max-w-2xl">
        {/* About */}
        <section id="about" className="scroll-mt-16 mb-24">
          <h2 className="sr-only">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="text-foreground">Software Engineer</span> with 3+
              years of professional experience building web, eCommerce, API, and
              system-integration solutions. My engineering background includes
              PHP, Pimcore, Magento 2, WordPress, Laravel, React, and React
              Native, with experience working on enterprise platforms and
              collaborating with international teams.
            </p>

            <p>
              I&apos;m currently pursuing an{" "}
              <span className="text-foreground">MRes in Cyber Security</span> at
              the University of Wolverhampton while expanding into{" "}
              <span className="text-foreground">
                Data Engineering and Analytics
              </span>
              . My recent hands-on work includes SQL Server, T-SQL, ETL, data
              warehousing, dimensional modelling, Excel, Power BI, DAX, Power
              Query, Python, and Docker.
            </p>

            <p>
              I enjoy working across the full data and software lifecycle — from
              backend systems and raw data through cleaning, transformation,
              modelling, analysis, and user-facing solutions. I&apos;m
              particularly interested in building reliable data pipelines and
              analytical solutions that turn complex data into useful insights.
            </p>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="scroll-mt-16 mb-24">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 lg:sr-only">
            Skills & Technologies
          </h2>

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm uppercase tracking-widest text-foreground">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 mb-24">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 lg:sr-only">
            Experience
          </h2>
          <ol className="space-y-4">
            {experience.map((entry) => (
              <ExperienceCard key={entry.company} entry={entry} />
            ))}
          </ol>
          <div className="mt-8 px-6">
            <Link
              href="/cv.pdf"
              target="_blank"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              View full CV
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-16 mb-24">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 lg:sr-only">
            Projects
          </h2>
          <div className="grid gap-4">
            {featured.length === 0 ? (
              <p className="text-muted-foreground text-sm">
                More projects coming soon.
              </p>
            ) : (
              featured.map((p) => <ProjectCard key={p.slug} project={p} />)
            )}
          </div>
          <div className="mt-8 px-6">
            <Link
              href="/work"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              View all projects
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 lg:sr-only">
            Contact
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m currently open to opportunities in{" "}
              <span className="text-foreground">
                Data Engineering, Data Analytics, and Software Engineering
              </span>{" "}
              in the UK. I&apos;m also open to selective freelance projects
              involving web development, eCommerce, APIs, and system
              integrations.
            </p>
            <p>
              Quickest reply by email —{" "}
              <a
                href="mailto:shakyanischal2913@gmail.com"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
              >
                shakyanischal2913@gmail.com
              </a>
              .
            </p>
          </div>

          <footer className="mt-24 pt-8 border-t border-border text-xs text-muted-foreground space-y-1">
            <p>
              Built with Next.js, Tailwind, and MDX. Hosted on Vercel. Type set
              in Geist.
            </p>
            <p>© {new Date().getFullYear()} Nischal Shakya</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
