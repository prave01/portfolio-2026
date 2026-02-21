"use client";

import { animate, inView, easeInOut } from "motion";
import { useEffect } from "react";
import { motion, stagger } from "motion/react";
import { Accordion } from "@/components/ui/accordion";
import ExperienceAccordian from "../atom/ExperienceAccordian";
import { ExperienceData } from "@/lib/constants/Experience";

export default function Experience() {
  useEffect(() => {
    inView(".title-exp", (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [5, 0] },
        {
          duration: 0.4,
          ease: easeInOut,
        },
      );
    });

    inView(".title-exp", () => {
      animate(
        ".item-acc",
        { opacity: [0, 1], y: [5, 0], filter: ["blur(5px)", "blur(0px)"] },
        {
          delay: stagger(0.4),
          duration: 0.9,
          ease: easeInOut,
        },
      );
    });
  }, []);

  return (
    <div className="py-3 title-exp opacity-0">
      <p
        className="font-news text-2xl md:text-3xl font-medium text-primary
        px-3"
      >
        Experience
      </p>

      <div className="pt-4 lg:pt-8 px-3 md:px-6 flex flex-col gap-5">
        <Accordion
          type="multiple"
          defaultValue={["item-1"]}
          className="divide-none gap-6 flex flex-col"
        >
          {ExperienceData.map((i, idx) => (
            <ExperienceAccordian
              key={idx}
              index={idx}
              name={i.name}
              role={i.role}
              period={i.duration}
              techImages={i.techImages}
              description={i.description}
              bgcolor={i.color}
            />
          ))}{" "}
        </Accordion>
      </div>
    </div>
  );
}
