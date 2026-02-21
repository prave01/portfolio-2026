"use client";

import { ExternalLinkIcon } from "lucide-react";
import { LinkTransition } from "./LinkTransition";

export default function BlogCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string[];
  href: string;
}) {
  return (
    <LinkTransition href={href} className="blog-card opacity-0">
      <div
        className="blog-card bg-black/5 h-full max-h-45 w-full max-w-85
          rounded-4xl border-primary/10 border p-5 flex flex-col gap-2
          transition-all duration-300 ease-in-out relative overflow-clip group
          hover:cursor-pointer"
      >
        <div
          className="w-auto h-auto group-hover:brightness-50 transition-all
            duration-100 ease-in-out flex gap-y-2 flex-col"
        >
          <p className="text-[16px] text-primary">{title}</p>
          <ul
            className="text-[14px] font-medium text-primary/50 list-disc pl-5
              space-y-1"
          >
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          className="absolute w-0 group-hover:w-20 h-full right-0 bg-[#131010]
            z-20 top-0 group-hover:border-l border-primary/10 duration-100
            ease-in-out transition-all flex items-center justify-center"
        >
          <ExternalLinkIcon className="size-8 stroke-primary" />
        </div>
      </div>
    </LinkTransition>
  );
}
