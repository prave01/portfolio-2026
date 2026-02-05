import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../atom/ProjectCard";

export default function ProjectsPageClient() {
  return (
    <div className="w-full min-h-screen pt-20">
      <div className="max-w-2xl w-full mx-auto">
        <Link
          href={"/"}
          className="text-primary/80 flex items-center hover:text-primary
            transition-all ease-in-out duration-150"
        >
          <ChevronLeft className="size-5" /> Back
        </Link>
        <div
          className="grid grid-cols-1 gap-y-12 items-start py-10 justify-center
            md:grid-cols-2 w-full h-full overflow-hidden"
        >
          <ProjectCard
            name={"Code Planning and Orhestration like (n8n)"}
            github={"https://github.com/prave01/n8n_forCodePlanning"}
            live={"https://tried-n8n.vercel.app/"}
          />
          <ProjectCard
            name={"Code Planning and Orhestration like (n8n)"}
            github={"https://github.com/prave01/n8n_forCodePlanning"}
            live={"https://tried-n8n.vercel.app/"}
          />
          <ProjectCard
            name={"Code Planning and Orhestration like (n8n)"}
            github={"https://github.com/prave01/n8n_forCodePlanning"}
            live={"https://tried-n8n.vercel.app/"}
          />
          <ProjectCard
            name={"Code Planning and Orhestration like (n8n)"}
            github={"https://github.com/prave01/n8n_forCodePlanning"}
            live={"https://tried-n8n.vercel.app/"}
          />
        </div>
      </div>
    </div>
  );
}
