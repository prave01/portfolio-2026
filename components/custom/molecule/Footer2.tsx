"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { easeInOut, useInView } from "motion/react";
import { animate } from "motion";

export default function Footer2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(
        ".footer",
        { filter: ["blur(5px)", "blur(0px)"], opacity: [0, 1] },
        {
          duration: 0.3,
          ease: easeInOut,
          damping: 20,
        },
      );
    }
  }, [isInView]);

  return (
    <div ref={ref} className="h-auto footer w-full pb-4 px-2 flex relative">
      <div
        className="w-full h-auto bg-neutral-800 rounded-4xl
          [corner-shape:squircle] px-3 py-2"
      >
        {" "}
        <p className="text-xl text-yellow-400">Let's Connect</p>
        <div className="text-md text-neutral-300 p-4 flex flex-col gap-1">
          <span className="font-normal">Find me active on</span>
          <div className="flex gap-2 pl-10 pt-1 items-end">
            {" "}
            <Link
              href={""}
              className="bg-yellow-400 text-black flex items-center
                justify-center gap-1 w-fit text-sm px-2 py-1 rounded-4xl
                [corner-shape:squircle]
                shadow-[0px_2px_2px_var(--color-white)_inset]
                hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              <Image
                src={"/x.svg"}
                width={500}
                height={500}
                className="size-5.5"
                alt={""}
              />
              @drunkidev
            </Link>
            <Link
              href={""}
              className="bg-yellow-400 text-black flex items-center
                justify-center gap-1 w-fit text-sm px-2 py-1 rounded-4xl
                [corner-shape:squircle]
                shadow-[0px_2px_2px_var(--color-white)_inset]
                hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              <Image
                src={"/linkedin.svg"}
                width={500}
                height={500}
                className="size-6"
                alt={""}
              />
              @linkedin
            </Link>
          </div>
          <p className="text-neutral-300 font-normal text-sm pt-4">
            or you can email me on -{" "}
            <Link
              href={"mailto:praveenthanikachalam408@gmail.com"}
              className="text-yellow-400 font-medium underline
                underline-offset-2 italic"
            >
              praveenthanikachalam408@gmail.com
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={"/am.png"}
        width={500}
        height={500}
        className="size-40 absolute top-3 right-4 lg:flex hidden"
        alt={""}
      />
    </div>
  );
}
