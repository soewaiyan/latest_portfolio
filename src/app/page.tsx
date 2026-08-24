import ProjectCard from "@/components/ProjectCard";
import { profile, education, experience, projects, skills } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="text-sm font-medium text-black/50 dark:text-white/50">
          {profile.tagline}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
          {profile.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85 dark:bg-white dark:text-black"
          >
            Download Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 py-10">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <h3 className="mt-10 text-sm font-medium text-black/50 dark:text-white/50">
              More
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-16">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 flex flex-col gap-10">
          {experience.map((e) => (
            <div key={e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium">{e.org}</h3>
                <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
                  {e.dates}
                </p>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60">
                {e.role}
                {e.stack ? ` · ${e.stack}` : ""} · {e.location}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/75 dark:text-white/75">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-10">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-base font-medium">{education.school}</h3>
            <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
              {education.graduation}
            </p>
          </div>
          <p className="text-sm text-black/60 dark:text-white/60">
            {education.degree} · GPA {education.gpa}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/75 dark:text-white/75">
            <span className="font-medium">Relevant coursework:</span>{" "}
            {education.coursework.join(", ")}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 py-10 pb-24">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="text-sm font-medium text-black/50 dark:text-white/50">
                {s.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/75 dark:border-white/10 dark:text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
