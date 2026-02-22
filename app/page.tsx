"use client";

import About from "@/components/custom/molecule/About";
import Blogs from "@/components/custom/molecule/Blogs";
import Experience from "@/components/custom/molecule/Experience";
import Footer from "@/components/custom/molecule/Footer";
import GithubHeatMap from "@/components/custom/molecule/GithubHeatMap";
import Header from "@/components/custom/molecule/Header";
import OSSContributions from "@/components/custom/molecule/OSSContributions";
import Projects from "@/components/custom/molecule/Projects";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillsData } from "@/lib/constants/Skills";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size),
    );
  };

  const chunkedSkills = chunkArray(SkillsData, 10);
  return (
    <div
      className="w-full overflow-hidden min-h-screen relative font-semibold
        no-scrollbar"
    >
      <motion.div
        animate={{
          opacity: [0, 1],
          filter: ["blur(5px)", "blur(0px)"],
        }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: easeInOut,
        }}
        className="gap-2 opacity-0 md:gap-4 pt-3 md:pt-18 mx-auto flex flex-col
          max-w-3xl w-full no-scrollbar"
      >
        <Header />
        <Separator className="bg-primary/5" />
        <About />
        <Separator className="bg-primary/5 hidden lg:flex" />
        <div className="w-full overflow-hidden hidden lg:flex">
          <motion.div
            className="flex w-full gap-4 items-start justify-center px-3
              flex-col"
          >
            {chunkedSkills.map((group, groupIndex) => (
              <div key={groupIndex} className="flex gap-4">
                {group.map((i, idx) => (
                  <Tooltip key={idx}>
                    <TooltipContent>{i.name}</TooltipContent>
                    <TooltipTrigger asChild>
                      <Image
                        width={500}
                        height={500}
                        className={cn(
                          "size-15 shrink-0 hover:grayscale-0",
                          `grayscale-100 transition-all duration-200 ease-in-out
                          bg-primary p-3 rounded-full`,
                        )}
                        src={i.logo}
                        alt={i.name}
                      />
                    </TooltipTrigger>
                  </Tooltip>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        <Separator className="bg-primary/5" />
        <GithubHeatMap />
        <Separator className="bg-primary/5" />
        <Projects />
        <Separator className="bg-primary/5" />
        <Experience />
        <Separator className="bg-primary/5" />
        <OSSContributions />
        <Separator className="bg-primary/5" />
        <Blogs />
        <Separator className="bg-primary/5" />
        <Footer />
      </motion.div>
    </div>
  );
}
