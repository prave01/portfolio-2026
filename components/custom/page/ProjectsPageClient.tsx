"use client";

import { ChevronLeft } from "lucide-react";
import { animate, easeInOut } from "motion";
import { useEffect } from "react";
import { LinkTransition } from "../atom/LinkTransition";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "../molecule/ProjectCard";
import { motion, stagger } from "motion/react";
import { ProjectsData } from "@/lib/constants/Project";

export default function ProjectsPageClient() {
  useEffect(() => {
    (async () => {
      await animate(
        ".project-page",
        { opacity: [0, 1], filter: ["blur(5px)", "blur(0px)"] },
        { delay: 1, duration: 0.3, ease: "easeInOut" },
      );
      await animate(
        ".project-card",
        { opacity: [0, 1], y: [10, 0], filter: ["blur(5px)", "blur(0px)"] },
        { delay: stagger(0.1), duration: 0.3, ease: easeInOut },
      );
    })();
  }, []);
  return (
    <motion.div className="w-full min-h-screen pt-10 px-3 opacity-0 project-page">
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
          className="w-full h-full lg:pb-5 pb-10 grid grid-cols-1 sm:grid-cols-2
            place-items-center px-3 gap-4"
        >
          {ProjectsData.map((i, idx) => (
            <ProjectCard
              key={idx}
              name={i.name}
              techImages={i.techImages}
              image={i.image as string}
              github={i.github}
              description={i.description}
              video={i.video as string}
              live={i.live}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
