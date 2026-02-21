"use client";

import { ChevronLeft, Github, Globe, PlayCircleIcon } from "lucide-react";
import { animate, easeInOut, stagger } from "motion";
import { useEffect } from "react";
import { LinkTransition } from "../atom/LinkTransition";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "../molecule/ProjectCard";

export default function ProjectsPageClient() {
  useEffect(() => {
    animate(
      ".project-card",
      { opacity: [0, 1], y: [10, 0], filter: ["blur(5px)", "blur(0px)"] },
      { duration: 0.3, ease: easeInOut, delay: stagger(0.1) },
    );
  }, []);
  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="max-w-2xl w-full mx-auto h-full flex gap-6 flex-col">
        <LinkTransition
          href={"/"}
          className="text-primary/80 flex items-center hover:text-primary
            transition-all ease-in-out group duration-150"
        >
          <ChevronLeft
            className="size-4 group-hover:-translate-x-1 transition-all
              duration-150 ease-in-out"
          />
          <p className="text-sm">Back</p>
        </LinkTransition>
        <div className="space-y-5 px-4">
          {" "}
          <p className="font-news text-2xl md:text-3xl font-medium text-primary">
            Projects Page
          </p>
          <p className="text-primary/50 px-4 w-[90%] text-sm">
            All these projects are propely planned, developed and maintained by
            me, You can find all the necessary structures and tech stack here.
          </p>
        </div>
        <Separator className="w-[60%] mx-auto bg-primary/5" />
        <div
          className="w-full h-full pb-10 grid grid-cols-1 lg:grid-cols-2
            place-items-center px-3 gap-4"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
