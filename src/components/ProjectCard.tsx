import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex flex-col justify-between rounded-2xl border border-black/10 p-5 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <div>
        <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
          {project.dates}
        </p>
        <h3 className="mt-1 text-lg font-medium">{project.title}</h3>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">
          {project.summary}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-black/50 dark:text-white/50">{project.stack}</p>
        <span className="text-sm text-black/60 transition group-hover:translate-x-0.5 group-hover:text-black dark:text-white/60 dark:group-hover:text-white">
          View →
        </span>
      </div>
    </Link>
  );
}
