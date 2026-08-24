import Link from "next/link";
import { notFound } from "next/navigation";
import MediaGrid from "@/components/MediaGrid";
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
        className="text-sm text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
      >
        ← Back to projects
      </Link>

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
          {project.dates}
        </p>
      </div>
      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
        {project.stack}
      </p>

      {project.media.length > 0 && (
        <div className="mt-8">
          <MediaGrid media={project.media} />
        </div>
      )}

      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/80 dark:text-white/80">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
