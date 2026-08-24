import Link from "next/link";
import { profile } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-medium tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-5 text-sm text-black/70 dark:text-white/70">
          <a href="/#projects" className="hover:text-black dark:hover:text-white">
            Projects
          </a>
          <a href="/#experience" className="hover:text-black dark:hover:text-white">
            Experience
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
