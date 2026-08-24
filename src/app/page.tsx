import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import HeroModel from "@/components/HeroModel";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { profile, education, experience, projects, skills } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-12 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <div>
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent/60" />
            HI, MY NAME IS
          </div>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-sm font-medium tracking-[0.25em] text-muted">
            ROBOTICS & COMPUTER VISION
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
            {profile.bio}
          </p>
          <p className="mt-5 text-accent italic">&ldquo;{profile.motto}&rdquo;</p>

          <div className="mt-8 h-px w-full bg-card-border" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-85"
            >
              Download Résumé
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-medium transition hover:border-accent/60"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-medium transition hover:border-accent/60"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <HeroModel />
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <SectionHeading eyebrow="About" title="A bit about me" />
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed text-foreground/80">
          <p>{profile.bio}</p>
          <p>
            I&apos;m studying {education.degree} at {education.school},
            graduating {education.graduation}, with coursework spanning{" "}
            {education.coursework.join(", ")}.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 py-16">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mx-auto mt-10 max-w-3xl">
          <ExperienceAccordion items={experience} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16">
        <SectionHeading eyebrow="Projects" title="What I've built" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <p className="mt-12 text-center text-xs tracking-[0.3em] text-muted">
              MORE
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-16">
        <SectionHeading eyebrow="Skills" title="Tools I work with" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="text-sm font-semibold text-accent">
                {s.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-card-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 pb-28 text-center">
        <SectionHeading eyebrow="Contact" title="Let's talk" />
        <p className="mx-auto mt-4 max-w-md text-foreground/75">
          Have an internship, research opportunity, or project in mind?
          I&apos;m an email away.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-foreground/70 transition hover:border-accent/60 hover:text-accent"
          >
            <MailIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-foreground/70 transition hover:border-accent/60 hover:text-accent"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-foreground/70 transition hover:border-accent/60 hover:text-accent"
          >
            <GitHubIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
