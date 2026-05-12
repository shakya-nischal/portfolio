import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Nischal Shakya
        </Link>
        <ul className="flex items-center gap-6 text-sm text-neutral-600">
          <li>
            <Link href="/about" className="hover:text-neutral-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className="hover:text-neutral-900">
              Work
            </Link>
          </li>
          <li>
            <Link href="/notes" className="hover:text-neutral-900">
              Notes
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-neutral-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
