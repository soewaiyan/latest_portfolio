import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on GitHub Pages
      </div>
    </footer>
  );
}
