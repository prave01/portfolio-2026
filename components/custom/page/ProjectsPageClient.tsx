"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../atom/ProjectCard";
import { animate, easeInOut, stagger } from "motion";
import { useEffect } from "react";
import { LinkTransition } from "../atom/LinkTransition";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPageClient() {
  useEffect(() => {
    animate(
      ".project-card",
      { opacity: [0, 1], y: [10, 0], filter: ["blur(5px)", "blur(0px)"] },
      { duration: 0.3, ease: easeInOut, delay: stagger(0.1) },
    );
  }, []);
  return (
    <div>
      {" "}
      <div className="w-full min-h-screen pt-10 md:pt-15 px-3">
        <div className="max-w-2xl w-full mx-auto h-full flex gap-8 flex-col">
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
            <p
              className="font-news text-2xl md:text-3xl font-medium
                text-primary"
            >
              Projects Page
            </p>
            <p className="text-primary/50 px-4 w-[90%] text-sm">
              All these projects are propely planned and implemented by me, You
              can find all the necessary structures and tech stack here.
            </p>
          </div>
          <Separator className="w-[60%] mx-auto bg-primary/5" />
          <div
            className="grid grid-cols-1 gap-y-12 items-start pb-15
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
    </div>
  );
}
