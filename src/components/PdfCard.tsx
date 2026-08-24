export default function PdfCard({ src, caption }: { src: string; caption?: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span>{caption ?? "View PDF"}</span>
      <span aria-hidden>→</span>
    </a>
  );
}
