"use client";

import Image from "next/image";
import TextEntry from "../atom/TextEntry";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const roles = ["Software Engineer", "Design Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex md:flex-row px-2 justify-end md:justify-between
        items-center w-full md:gap-0 flex-row-reverse gap-2"
    >
      {" "}
      <div
        className="text-primary font-news font-medium tracking flex flex-col
          gap-1"
      >
        <TextEntry>
          <span className="text-2xl md:text-5xl">Hi, I am Praveen</span>
        </TextEntry>
        <p className="text-lg md:text-2xl text-primary/80">
          <span className="relative">
            {" "}
            I'm a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{
                  y: 10,
                  opacity: 0,
                  filter: "blur(5px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: -10,
                  opacity: 0,
                  filter: "blur(5px)",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>
      </div>
      <div
        className="size-21 border-yellow-400/30 border-dashed relative border-2
          [corner-shape:squircle] rounded-[40px]"
      >
        {" "}
        <Image
          width={500}
          height={500}
          className={cn(`object-cover object-top bg-yellow-400
            [corner-shape:squircle] rounded-[40px] rotate-0 md:rotate-20
            absolute size-20 transition-all duration-200 ease-in-out
            hover:rotate-0`)}
          src={"/new3.png"}
          placeholder="blur"
          alt={"Praveen's Profile Image"}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
}
