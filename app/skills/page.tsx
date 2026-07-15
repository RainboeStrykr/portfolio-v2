"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { skillImages } from "../skills-section/skillDetails";

const InfiniteGallery = dynamic(
  () => import("../skills-section/InfiniteGallery"),
  { ssr: false }
);

export default function SkillsPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#0E1016] touch-none">
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-10">
        <div className="pointer-events-auto flex items-start justify-between">
          <Link
            href="/"
            className="rounded-md border border-[#e4ded7]/30 px-4 py-2 text-[12px] font-semibold text-[#e4ded7] transition-colors hover:border-[#e4ded7] sm:text-[14px]"
          >
            ← Back
          </Link>
        </div>

        <div className="pointer-events-none text-center">
          <h1 className="pointer-events-none text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[48px] md:text-[64px]">
            Skills
          </h1>
          <p className="pointer-events-none mt-2 text-[12px] text-[#e4ded7]/50 sm:text-[14px]">
            Swipe, scroll, or use arrow keys to explore
          </p>
        </div>

        <div />
      </div>

      <InfiniteGallery
        images={skillImages}
        className="h-screen w-full"
      />
    </main>
  );
}
