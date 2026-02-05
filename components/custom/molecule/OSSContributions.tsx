import { animate, easeInOut, inView } from "motion";
import { useEffect } from "react";
import { motion, stagger } from "motion/react";
import OSSPill from "../atom/OSSPill";

export default function OSSContributions() {
  useEffect(() => {
    inView(".title-oss", (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [5, 0] },
        {
          duration: 0.4,
          ease: easeInOut,
        },
      );
    });

    inView(".title-oss", () => {
      animate(
        ".oss-pill",
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
        className="font-news title-oss text-2xl md:text-3xl font-medium
          text-primary px-3"
      >
        OSS Contributions
      </motion.p>

      <div
        className="md:px-6 px-1 pt-4 md:pt-6 w-full flex-wrap flex-row flex
          gap-2 items- justify-start"
      >
        <OSSPill
          name={"Formbricks"}
          issue={"6784"}
          href={"https://github.com/formbricks/formbricks/pull/6784"}
          icon={"/formbricks.png"}
        />
      </div>
    </div>
  );
}
