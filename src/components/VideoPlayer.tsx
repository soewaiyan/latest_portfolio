export default function VideoPlayer({
  src,
  poster,
  caption,
}: {
  src: string;
  poster: string;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
      <video
        className="aspect-video w-full bg-black object-contain"
        controls
        preload="none"
        poster={poster}
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      {caption && (
        <figcaption className="px-3 py-2 text-sm text-black/60 dark:text-white/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
