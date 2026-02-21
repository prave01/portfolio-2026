export const ProjectsData: Array<{
  name: string;
  techImages: Array<{ name: string; image: string }>;
  image?: string;
  video?: string;
  description: string;
  github: string;
  live?: string;
}> = [
    {
      name: "Code Planning (UI like N8n)",
      description:
        "Built N8N-style workflow builder using React-Flow, NextJS, and Zustand, with Gemini AI generating executable blueprints.",
      github: "https://github.com/prave01/n8n_forCodePlanning",
      image: "/projects/n8n/image.png",
      techImages: [
        {
          name: "TypeScript",
          image: "/skills/ts.png",
        },
        {
          name: "NextJS",
          image: "/skills/next.svg",
        },
        {
          name: "ReactJS",
          image: "/skills/react.png",
        },
        {
          name: "Zustand",
          image: "/skills/zustand.svg",
        },
        { name: "Tailwindcss", image: "/skills/tailwind.svg" },
      ],
      video: "/projects/n8n/video.mp4",
      live: "https://tried-n8n.vercel.app",
    },
    {
      name: "DOM AI",
      description:
        "Use the lasso tool, select components in the page edit and inject custom styling and script in the live webpage DOM using AI.",
      image: "/projects/dom/image.png",
      live: "https://x.com/drunkidev/status/1974456116341006440",
      techImages: [
        {
          name: "Vite",
          image: "/skills/vite.png",
        },
        {
          name: "TypeScript",
          image: "/skills/ts.png",
        },
      ],
      github: "https://github.com/prave01/DOM_AI",
      video: "/projects/dom/video.mp4",
    },
    {
      name: "Theoremotion",
      description:
        "Create and Debug Manim scripts and see live preview with AI, get errors resolved by AI, export as mp4.",
      image: "/projects/theoremotion/image.png",
      live: "https://theoremotion.vercel.app/",
      techImages: [
        {
          name: "NextJS",
          image: "/skills/next.svg",
        },
        {
          name: "Bun",
          image: "/skills/bun.png",
        },
        {
          name: "Hono",
          image: "/skills/hono.png",
        },
        {
          name: "Docker",
          image: "/skills/docker.png",
        },
        {
          name: "Python",
          image: "/skills/python.png",
        },
      ],
      github: "https://github.com/prave01/Theoremotion",
      video: "/projects/theoremotion/video.mp4",
    },
    {
      name: "Playwright MCP Client",
      description:
        "A visual mode web scraping Playwright MCP client with open LLMs like Llama and Gemma models.",
      techImages: [
        {
          name: "TypeScript",
          image: "/skills/ts.png",
        },
        {
          name: "MCP",
          image: "https://avatars.githubusercontent.com/u/182288589?s=200&v=4",
        },
        {
          name: "Playwright",
          image: "/skills/playwright.png",
        },
        {
          name: "Zod",
          image: "/skills/zod.png",
        },
      ],
      image: "",
      github: "https://github.com/prave01/Playwright_MCP-LLM",
      video: "",
      live: "",
    },
  ];
