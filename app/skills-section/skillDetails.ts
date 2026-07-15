export type SkillImage = {
  src: string;
  alt: string;
};

const skill = (filename: string, alt: string): SkillImage => ({
  src: `/skills/${encodeURIComponent(filename)}`,
  alt,
});

export const skillImages: SkillImage[] = [
  skill(
    "AI Fluency - AI Capabilities and Limitations.png",
    "AI Fluency — AI Capabilities and Limitations"
  ),
  skill(
    "AI Fluency - Frameworks and Foundations.png",
    "AI Fluency — Frameworks and Foundations"
  ),
  skill("AI Fluency for Builders.png", "AI Fluency for Builders"),
  skill("AI Fluency for students.png", "AI Fluency for Students"),
  skill("Claude 101.png", "Claude 101"),
  skill("Claude Code 101.png", "Claude Code 101"),
  skill(
    "FORAGE - EA Software Engineering Job Simulation.png",
    "Forage — EA Software Engineering Job Simulation"
  ),
  skill("Introduction to Agent Skills.png", "Introduction to Agent Skills"),
  skill("Introduction to Claude Cowork.png", "Introduction to Claude Cowork"),
  skill(
    "Introduction to Model Context Protocol.png",
    "Introduction to Model Context Protocol"
  ),
  skill("Introduction to subagents.png", "Introduction to Subagents"),
  skill("McKinsey Forward Program.png", "McKinsey Forward Program"),
  skill(
    "Model Context Protocal - Advanced Topics.png",
    "Model Context Protocol — Advanced Topics"
  ),
];
