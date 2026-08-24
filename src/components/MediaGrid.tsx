"use client";

import dynamic from "next/dynamic";
import VideoPlayer from "./VideoPlayer";
import PdfCard from "./PdfCard";
import type { MediaItem } from "@/lib/content";

const STLViewer = dynamic(() => import("./STLViewer"), { ssr: false });

export default function MediaGrid({ media }: { media: MediaItem[] }) {
  if (media.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {media.map((item, i) => {
        if (item.type === "video") {
          return (
            <VideoPlayer
              key={i}
              src={item.src}
              poster={item.poster}
              caption={item.caption}
            />
          );
        }
        if (item.type === "stl") {
          return <STLViewer key={i} src={item.src} caption={item.caption} />;
        }
        return (
          <div key={i} className="sm:col-span-2">
            <PdfCard src={item.src} caption={item.caption} />
          </div>
        );
      })}
    </div>
  );
}
