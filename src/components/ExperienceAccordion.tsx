"use client";

import { useState } from "react";
import type { ExperienceItem } from "@/lib/content";

function PlusMinus({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14" className={open ? "hidden" : ""} />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function ExperienceAccordion({ items }: { items: ExperienceItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.org}
            className="rounded-2xl border border-card-border bg-card transition"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div>
                <p className="font-semibold">
                  {item.role} @ {item.org}
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  {item.stack ? `${item.stack} · ` : ""}
                  {item.location}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="hidden text-xs tracking-widest text-muted sm:inline">
                  {item.dates.toUpperCase()}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-card-border text-muted">
                  <PlusMinus open={open} />
                </span>
              </div>
            </button>
            {open && (
              <ul className="list-disc space-y-2 px-6 pb-6 pl-10 text-sm leading-relaxed text-foreground/80">
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
