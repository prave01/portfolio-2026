export const ExperienceData: Array<{
  name: string;
  role: string;
  techImages: Array<{ name: string; image: string }>;
  duration: string;
  color: string;
  description: string[];
}> = [
    {
      name: "Weframe-Tech",
      role: "Frontend Engineer",
      description: [
        "Worked on a JAMstack-based web application called 'Neuzorg' for the Government of Karnataka a public news platform similar to Daily Hunt or Google News.",
        "Leveraging Next.js for the frontend, TanStack Query for optimized data fetching, and Directus as the headless CMS.",
      ],
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
          name: "Redis",
          image: "/skills/redis.png",
        },
        {
          name: "PostgreSQL",
          image: "/skills/postgresql.png",
        },
      ],
      color: "bg-yellow-400",
      duration: "2024 - 2025",
    },
    {
      name: "Salzer Technologies",
      role: "Backend Intern",
      techImages: [
        {
          name: "Node",
          image: "/skills/node.png",
        },
        {
          name: "Express",
          image: "/skills/express.png",
        },
        {
          name: "Python",
          image: "/skills/python.png",
        },
        {
          name: "JavaScript",
          image: "/skills/js.png",
        },
      ],
      description: [
        "Collaborated on developing an in-house transaction API using Node.js , resulting in a 20% improvement in system performance and $2500 annual cost savings.",
        "Accomplished by implementing caching , optimized queries , and used asynchronous processing to enhance database access and manage concurrent transactions.",
      ],
      color: "bg-rose-400",
      duration: "April 2023 - July 2023",
    },
  ];
