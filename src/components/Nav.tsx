import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/content";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Nav() {
  return (
    <div className="sticky top-4 z-20 mx-auto flex max-w-3xl justify-center px-4">
      <nav className="flex w-full items-center justify-between gap-2 rounded-full border border-card-border bg-card/80 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent"
        >
          {initials}
        </Link>
        <div className="hidden items-center gap-5 text-sm text-muted sm:flex">
          <a href="/#about" className="transition hover:text-foreground">About</a>
          <a href="/#experience" className="transition hover:text-foreground">Experience</a>
          <a href="/#projects" className="transition hover:text-foreground">Projects</a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            Resume
          </a>
          <a href="/#contact" className="transition hover:text-foreground">Contact</a>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
