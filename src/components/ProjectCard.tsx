import Link from "next/link";
import type { Project } from "@/lib/content";

function Thumbnail({ project }: { project: Project }) {
  const first = project.media[0];

  if (first?.type === "video") {
    return (
      <img
        src={first.poster}
        alt={project.title}
        className="h-44 w-full object-cover"
      />
    );
  }

  if (first?.type === "stl") {
    return (
      <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-accent-soft to-transparent">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M12 2 3 7l9 5 9-5-9-5Z" />
          <path d="M3 7v10l9 5 9-5V7" />
          <path d="M12 12v10" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-accent-soft to-transparent">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const stack = project.stack.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition hover:border-accent/50"
    >
      <div className="overflow-hidden">
        <Thumbnail project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs tracking-widest text-muted">
          {project.dates.toUpperCase()}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/75">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="mt-4 text-sm font-medium text-accent transition group-hover:translate-x-0.5">
          View project →
        </span>
      </div>
    </Link>
  );
}
