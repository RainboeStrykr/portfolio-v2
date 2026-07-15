import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Skills — Abhiraj Bhowmick",
  description:
    "An interactive 3D gallery showcasing skills and projects by Abhiraj Bhowmick.",
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
