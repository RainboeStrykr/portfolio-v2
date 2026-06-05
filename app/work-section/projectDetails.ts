export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "SiteShot",
    description:
      "SiteShot helps you capture any screenshot or website mockup and transform it into a clean, polished, presentation-ready screenshot.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rainboestrykr/siteshot",
    demo: "https://www.site-shot.app/",
    image: require(".//../../public/projects/siteshot.png"),
    available: true,
  },
  {
    id: 1,
    name: "MedRAG",
    description:
      "a fully local, agentic RAG system that lets anyone ask natural-language questions about AI in Healthcare and receive cited, reasoned answers grounded in a curated set of 60 expert documents.",
    technologies: ["Python", "Ollama", "NextJS"],
    github: "https://github.com/rainboestrykr/medrag",
    demo: "https://drive.google.com/file/d/11PcWJr1j021Q3Gc_mWnXIGV4tpSwMe5d/view?usp=sharing",
    image: require(".//../../public/projects/MedRAG.png"),
    available: true,
  },
  {
    id: 2,
    name: "CareerSync AI",
    description:
      "An AI-powered career transition platform that takes your resume, maps your transferable skills to a target industry, generates a personalised learning roadmap, and prepares you for domain-specific interviews.",
    technologies: ["Python", "JavaScript", "Ollama"],
    github: "https://github.com/rainboestrykr/careersync-ai",
    demo: "https://drive.google.com/file/d/1h0_SRpuTOfIaNz0eAulgiwyGYZHnGNFj/view?usp=sharing",
    image: require(".//../../public/projects/careersync.png"),
    available: true,
  },
  {
    id: 3,
    name: "Glyph",
    description:
      "Your all-in-one, browser-based solution for complete PDF management, designed for simplicity and power.",
    technologies: ["React", "Javascript", "PDFgen"],
    github: "https://github.com/rainboestrykr/glyph-pdf",
    demo: "https://glyph-pdf.vercel.app/",
    image: require(".//../../public/projects/glyph-pdf.gif"),
    available: true,
  },
  {
    id: 4,
    name: "EventX",
    description:
      "A full-stack event management application with QR code-based check-in system and admin dashboard.",
    technologies: ["Javascript", "Supabase", "QRLIb"],
    github: "https://github.com/rainboestrykr/eventx",
    demo: "https://drive.google.com/file/d/1or8lSjyWodZESfisWasbdFm3fEAn27xo/view?usp=sharing",
    image: require(".//../../public/projects/eventx.png"),
    available: true,
  },
  {
     id: 5,
     name: "Beamroom",
     description:
       "BeamRoom is a minimal, modern app that lets you create a room, share a unique join code, and instantly show your screen to anyone — no signup required.",
     technologies: ["Typescript", "WebRTC", "TailwindCSS"],
     github: "https://github.com/rainboestrykr/beamroom",
     demo: "https://beamroom.vercel.app/",
     image: require(".//../../public/projects/beamroom.gif"),
     available: true,
  },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
