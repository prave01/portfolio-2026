"use client";

import { ExternalLinkIcon } from "lucide-react";
import { easeInOut, motion, stagger } from "motion/react";
import BlogCard from "../atom/BlogCard";
import { useEffect } from "react";
import { animate, inView } from "motion";

export default function Blogs() {
  useEffect(() => {
    inView(".item-blog", (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [5, 0] },
        {
          duration: 0.4,
          ease: easeInOut,
        },
      );
    });

    inView(".item-blog", () => {
      animate(
        ".blog-card",
        { opacity: [0, 1], y: [5, 0], filter: ["blur(5px)", "blur(0px)"] },
        {
          delay: stagger(0.4),
          duration: 0.3,
          ease: easeInOut,
        },
      );
    });
  }, []);

  return (
    <motion.div className="relative item-blog w-full py-3 title-projects opacity-0">
      <p
        className="font-news text-2xl md:text-3xl font-medium text-primary
        px-3"
      >
        Blogs
      </p>
      <div
        className="w-full h-full lg:pt-8 grid grid-cols-2 place-items-center
          gap-y-10 gap-x-5"
      >
        {Array.from({ length: 6 }).map((i, idx) => (
          <BlogCard
            key={idx}
            title="Evaluating RAG"
            description={[
              "Traditional IR benchmarks fall short for real-world RAG applications due to stale data queries",
              "This talk introduces FreshStack, incomplete labels, and unrealistic",
            ]}
            href="/"
          />
        ))}

        <div
          className="absolute w-0 group-hover:w-20 h-full right-0 bg-[#131010]
            z-20 top-0 group-hover:border-l border-primary/10 duration-100
            ease-in-out transition-all flex items-center justify-center"
        >
          <ExternalLinkIcon className="size-8 stroke-primary" />
        </div>
      </div>
    </motion.div>
  );
}
