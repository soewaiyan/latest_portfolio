import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 px-6 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-black dark:hover:text-white">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
