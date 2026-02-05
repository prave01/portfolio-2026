import { animate, inView, easeInOut } from "motion";
import { useEffect } from "react";
import { motion, stagger } from "motion/react";
import { Accordion } from "@/components/ui/accordion";
import ExperienceAccordian from "../atom/ExperienceAccordian";

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
    <div className="py-3">
      <motion.p
        className="font-news title-exp text-2xl md:text-3xl font-medium
          text-primary px-3"
      >
        Experience
      </motion.p>

      <div className="pt-4 lg:pt-8 px-3 md:px-6 flex flex-col gap-5">
        <Accordion
          type="multiple"
          defaultValue={["item-1"]}
          className="divide-none gap-6 flex flex-col"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <ExperienceAccordian
              key={i}
              index={i}
              name={"Weframer-Tech"}
              role={"Frontend Engineer"}
              period={"2024 - 2025"}
              description={[
                "Worked on a JAMstack-based web application called 'Neuzorg' for the Government of Karnataka a public news platform similar to Daily Hunt or Google News.",
                "Leveraging Next.js for the frontend, TanStack Query for optimized data fetching, and Directus as the headless CMS.",
              ]}
              bgcolor={"bg-rose-400"}
            />
          ))}{" "}
        </Accordion>
      </div>
    </div>
  );
}
