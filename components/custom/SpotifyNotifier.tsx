"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export default function SpotifyNotifer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      animate={{
        clipPath: isOpen
          ? "circle(70% at right bottom)"
          : "circle(20% at right bottom)",
      }}
      transition={{
        ease: "easeInOut",
        type: "spring",
        damping: 20,
      }}
      className="bg-green-400 [clip-path:circle(20%_at_right_bottom)] circle
        size-50 absolute bottom-0 right-0"
    >
      <Image
        width={500}
        height={500}
        className="object-cover size-6 absolute bottom-1 right-1"
        src={"/spotify.png"}
        alt={""}
      />
    </motion.div>
  );
}
