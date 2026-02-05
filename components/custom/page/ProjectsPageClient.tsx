"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../atom/ProjectCard";
import { animate, easeInOut, stagger } from "motion";
import { useEffect } from "react";

export default function ProjectsPageClient() {
  useEffect(() => {
    animate(
      ".project-card",
      { opacity: [0, 1], y: [10, 0], filter: ["blur(5px)", "blur(0px)"] },
      { duration: 0.3, ease: easeInOut, delay: stagger(0.1) },
    );
  }, []);
  return (
    <div className="w-full min-h-screen pt-10 md:pt-20 px-3">
      <div className="max-w-2xl w-full mx-auto h-full">
        <Link
          href={"/"}
          className="text-primary/80 flex items-center hover:text-primary
            transition-all ease-in-out duration-150"
        >
          <ChevronLeft className="size-5" /> Back
        </Link>
        <div
          className="grid grid-cols-1 gap-y-12 items-start pb-15 pt-5 md:py-10
            justify-center md:grid-cols-2 w-full h-f overflow-hidden"
        >
          {" "}
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
