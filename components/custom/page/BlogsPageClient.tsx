"use client";

import { ChevronLeft } from "lucide-react";
import { LinkTransition } from "../atom/LinkTransition";
import { Separator } from "@/components/ui/separator";
import BlogCard from "../atom/BlogCard";
import { stagger } from "motion/react";
import { animate, easeInOut } from "motion";
import { useEffect } from "react";
import { BlogsData } from "@/lib/constants/Blogs";

export default function BlogPage() {
  useEffect(() => {
    (async () => {
      await animate(
        ".blog-page",
        { opacity: [0, 1], filter: ["blur(5px)", "blur(0px)"] },
        { delay: 1, duration: 0.3, ease: "easeInOut" },
      );
      await animate(
        ".blog-card",
        { opacity: [0, 1], y: [10, 0], filter: ["blur(5px)", "blur(0px)"] },
        { delay: stagger(0.1), duration: 0.3, ease: easeInOut },
      );
    })();
  }, []);

  return (
    <div className="w-full min-h-screen pt-10 px-3 opacity-0 blog-page">
      <div className="max-w-2xl w-full mx-auto h-full flex gap-6 flex-col">
        <div className="flex flex-col gap-8">
          {" "}
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
              Blogs Page
            </p>
            <p className="text-primary/50 px-4 w-[90%] text-sm">
              You can find some intersting blog posts about AI, Case Studies,
              Architecural Planning, Enterprise Solutions and more ...
            </p>
          </div>
        </div>
        <Separator className="w-[60%] m-0 mx-auto bg-primary/5" />
        <div
          className="w-full h-full pb-10 grid grid-cols-1 sm:grid-cols-2
            place-items-center px-3 gap-4"
        >
          {BlogsData.map((i, idx) => (
            <BlogCard
              key={idx}
              title={i.title}
              description={[
                "Traditional IR benchmarks fall short for real-world RAG applications due to stale data queries",
                "This talk introduces FreshStack, incomplete labels, and unrealistic",
              ]}
              href="/blogs/RAG_Evaluation"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
