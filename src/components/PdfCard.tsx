export default function PdfCard({ src, caption }: { src: string; caption?: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-accent transition hover:bg-accent-soft"
    >
      <span>{caption ?? "View PDF"}</span>
      <span aria-hidden>→</span>
    </a>
  );
}
