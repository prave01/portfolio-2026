"use client";
import Image from "next/image";
import TextEntry from "../atom/TextEntry";
import { useRef } from "react";
import { useInView } from "motion/react";

import { motion } from "motion/react";
import { GithubIcon, Globe, Play } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="relative w-full">
      <p
        className="font-news text-3xl font-medium text-primary px-3 lg:pt-0
          pt-3"
      >
        Projects
      </p>

      <Button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 rounded-full
          bg-yellow-400 text-black shadow-lg hover:shadow-xl transition-all"
      >
        View More
      </Button>
      <div
        className="px-3 lg:pt-5 pt-3 grid gap-12 lg:gap-8 grid-cols-1
          items-center justify-center lg:grid-cols-2 w-full h-100
          overflow-hidden mask-b-from-20% mask-b-to-100%"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="relative mx-auto group w-fit h-auto z-0">
            <motion.div
              ref={ref}
              className="lg:h-50 h-40 group-hover:-translate-y-5 transition-all
                duration-150 ease-in-out w-84 lg:w-85 border-primary/80
                [corner-shape:squircle] rounded-[40px] overflow-clip relative
                z-10 group-hover:shadow-[0px_1px_8px_var(--color-black)]"
            >
              {isInView && (
                <div
                  className="absolute flex flex-col items-start justify-end
                    w-full p-4 h-full bg-black/50 z-10"
                >
                  <TextEntry className="max-w-50 w-full text-yellow-400">
                    Code Planning and
                  </TextEntry>
                  <TextEntry delay={0.2} className="text-yellow-400 mt-0.5">
                    Orhestration (like n8n)
                  </TextEntry>
                </div>
              )}
              <Image
                src={"/aa.jpeg"}
                className="object-cover brightness-50"
                alt={""}
                width={500}
                height={500}
              />
            </motion.div>
            <div
              className="h-20 translate-y-8 lg:group-hover:translate-y-6
                transition-all duration-150 ease-in-out w-full absolute
                lg:bg-yellow-400/50 bg-yellow-400/80
                lg:group-hover:bg-yellow-400/80 bottom-0 lg:translate-y-0.5
                rounded-b-4xl [corner-shape:squircle] -z-10
                group-hover:shadow-[0px_-1px_4px_var(--color-black)_inset]"
            >
              <div
                className="absolute -bottom-1 lg:bottom-1 w-full h-10 flex
                  items-center gap-3 justify-start px-4"
              >
                {" "}
                <Tooltip delayDuration={800}>
                  <TooltipTrigger>
                    {" "}
                    <GithubIcon
                      className="text-neutral-900 hover:text-gray-200
                        rounded-full transition-all duration-150 size-5
                        ease-in-out"
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="backdrop-blur-md text-white bg-black/50"
                  >
                    Github
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={800}>
                  <TooltipTrigger>
                    <Globe
                      className="text-neutral-900 hover:text-blue-700
                        rounded-full transition-all duration-150 size-5
                        ease-in-out"
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="backdrop-blur-md text-white bg-black/50"
                  >
                    Live
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={800}>
                  <TooltipTrigger>
                    <Play
                      className="text-neutral-900 hover:text-red-700
                        rounded-full transition-all duration-150 size-5
                        ease-in-out"
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="backdrop-blur-md text-white bg-black/50"
                  >
                    Demo{" "}
                  </TooltipContent>
                </Tooltip>
                <p
                  className="text-green-800 font-medium text-sm absolute
                    bottom-1.2 right-4"
                >
                  Completed
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
