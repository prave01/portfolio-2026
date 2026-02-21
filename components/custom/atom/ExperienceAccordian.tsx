"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import TextEntry from "./TextEntry";
import Image from "next/image";
import { Fragment } from "react";

export default function ExperienceAccordian({
  name,
  role,
  period,
  description,
  bgcolor,
  index,
  techImages,
}: {
  index: number;
  name: string;
  role: string;
  techImages: Array<{ name: string; image: string }>;
  period: string;
  description: string[];
  bgcolor: string;
}) {
  const val = `item-acc-${index.toString()}`;

  return (
    <AccordionItem className="item-acc" value={val}>
      <AccordionTrigger className="">
        <div className="flex gap-3">
          {" "}
          <div
            className={cn(
              `[corner-shape:squircle] rounded-[40px] px-3 py-2 size-12 flex
              items-center justify-center text-lg`,
              bgcolor,
            )}
          >
            {name[0].toUpperCase()}
          </div>
          <div className="flex flex-col items-start gap-0.5 justify-center">
            <p className="text-primary font-medium text-md">
              {role} at
              <span className="text-yellow-400"> {name}</span>
            </p>
            <p className="text-primary/60 text-sm font-normal">{period}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div
          className="h-auto w-full flex flex-col gap-3 items-start justify-start
            pl-15.5 py-4"
        >
          <div className="w-full flex flex-wrap items-start justify-start gap-2">
            {" "}
            {techImages.map((i, idx) => (
              <div
                key={idx}
                className="w-fit h-auto bg-white/5 rounded-lg px-3 py-2 flex
                  gap-2 items-center justify-center text-primary font-medium
                  text-xs"
              >
                <Image
                  width={500}
                  height={500}
                  className="size-4"
                  src={i.image}
                  alt={""}
                />
                <p>{i.name}</p>
              </div>
            ))}
          </div>
          {description.map((i, idx) => (
            <TextEntry
              className="text-primary/90 font-medium text-[14px]"
              delay={idx - 0.5}
              key={idx}
            >
              {i}
            </TextEntry>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
