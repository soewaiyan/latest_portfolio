"use client";

import dynamic from "next/dynamic";

const STLViewer = dynamic(() => import("./STLViewer"), { ssr: false });

export default function HeroModel() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-accent-soft via-card to-card">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <STLViewer src="/media/csail/lock-mechanism.stl" bare heightRatio={1} />
      </div>
    </div>
  );
}
