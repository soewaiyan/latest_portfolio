import Link from "next/link";
import { notFound } from "next/navigation";
import MediaGrid from "@/components/MediaGrid";
import { GitHubIcon } from "@/components/SocialIcons";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-muted hover:text-accent"
      >
        ← Back to projects
      </Link>

      <p className="mt-6 text-xs font-medium tracking-[0.3em] text-accent">
        {project.dates.toUpperCase()}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-2 text-sm text-muted">{project.stack}</p>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-card-border px-4 py-1.5 text-xs font-medium transition hover:border-accent/60 hover:text-accent"
            >
              <GitHubIcon /> {link.label}
            </a>
          ))}
        </div>
      )}

      {project.media.length > 0 && (
        <div className="mt-8">
          <MediaGrid media={project.media} />
        </div>
      )}

      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
