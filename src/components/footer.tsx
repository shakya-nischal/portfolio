import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Nischal Shakya</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/shakya-nischal"
            target="_blank"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nischal-shakya-79860a178/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <div className="w-4 h-4"> Linkedin </div>
          </Link>
          <Link href="mailto:shakyanischal2913@gmail.com" aria-label="Email">
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
