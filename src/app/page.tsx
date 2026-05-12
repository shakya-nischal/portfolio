import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featured = getAllProjects().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-sm text-neutral-600">
          Farnborough, UK · Software Engineer · MRes Cyber Security
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          I build scalable web, mobile, and eCommerce platforms — and I&apos;m
          pivoting into data engineering.
        </h1>
        <p className="text-lg text-neutral-700 leading-relaxed">
          Three years building enterprise systems with PHP, Magento 2, Pimcore,
          WordPress, and React. Currently pursuing an MRes in Cyber Security at
          the University of Wolverhampton, with a focus on secure, data-driven
          systems.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/contact">
              Get in touch <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/cv.pdf" target="_blank">
              <Download className="w-4 h-4 mr-1" /> Download CV
            </a>
          </Button>
        </div>
      </section>

      {/* Selected work */}
      <section className="mt-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/work"
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6">
          {featured.length === 0 ? (
            <p className="text-neutral-500 text-sm">Projects loading…</p>
          ) : (
            featured.map((p) => <ProjectCard key={p.slug} project={p} />)
          )}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Stack</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 text-sm">
          <div>
            <h3 className="font-medium mb-3">Languages & Backend</h3>
            <p className="text-neutral-700 leading-relaxed">
              PHP, JavaScript, TypeScript, SQL, Node.js, Laravel, Symfony
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Frontend & Mobile</h3>
            <p className="text-neutral-700 leading-relaxed">
              React, React Native, Next.js, Twig, Tailwind, Elementor Pro
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Platforms</h3>
            <p className="text-neutral-700 leading-relaxed">
              Magento 2, Pimcore, WordPress, Shopify
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">DevOps & Data</h3>
            <p className="text-neutral-700 leading-relaxed">
              Docker, Git, Nginx, MySQL, MongoDB, AWS basics, REST APIs
            </p>
          </div>
          <div className="sm:col-span-2 mt-4 p-5 rounded-lg bg-neutral-50 border border-neutral-200">
            <h3 className="font-medium mb-2">Currently learning</h3>
            <p className="text-neutral-700 leading-relaxed">
              Python for data engineering, dbt, Apache Airflow, Snowflake, AWS
              Data Engineer stack — alongside an MRes in Cyber Security at the
              University of Wolverhampton.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
