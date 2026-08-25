export default function HeroPhoto() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-accent-soft via-card to-card">
      <img
        src="/media/profile.jpg"
        alt="Soe Wai Yan"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
