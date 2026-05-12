import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold mt-12 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-10 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 my-4 text-neutral-700">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="underline underline-offset-4 hover:text-neutral-900"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    ...components,
  };
}
