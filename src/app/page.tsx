import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { experience } from "@/lib/experience";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getAllProjects().slice(0, 4);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Sidebar />

      <main className="lg:ml-[420px] px-6 py-12 lg:py-24 lg:pr-16 max-w-2xl">
        {/* About */}
        <section id="about" className="scroll-mt-16 mb-24">
          <h2 className="sr-only">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Software Engineer based in Farnborough, currently
              pursuing an{" "}
              <span className="text-foreground">MRes in Cyber Security</span> at
              the University of Wolverhampton. My background is in building
              scalable enterprise systems — PHP, Magento 2, Pimcore, WordPress,
              Laravel — for international clients, with React and React Native
              on the frontend and mobile side.
            </p>
            <p>
              Right now I&apos;m moving toward{" "}
              <span className="text-foreground">data engineering</span>,
              building skills in Python, dbt, Airflow, Snowflake, and AWS to
              complement the data-heavy integration work I&apos;ve done across
              PIM systems and eCommerce platforms. The MRes brings the
              security-aware lens that&apos;s increasingly valuable in modern
              data infrastructure.
            </p>
            <p>
              Outside of code, I care about clear documentation, mentoring
              junior engineers, and bridging non-technical stakeholders with
              engineering teams. If you&apos;d like to chat about a role or
              project, the inbox is open.
            </p>
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
              Currently open to{" "}
              <span className="text-foreground">data engineering</span> roles in
              the UK (Graduate Route visa, no sponsorship needed) and selective{" "}
              <span className="text-foreground">freelance engagements</span>{" "}
              around PHP, eCommerce, or system integration work.
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
