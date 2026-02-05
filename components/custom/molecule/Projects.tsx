"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="relative w-full py-3">
      <p
        className="font-news text-2xl md:text-3xl font-medium text-primary
        px-3"
      >
        Projects
      </p>
      <div className="absolute z-10 w-full h-full">
        {" "}
        <Link
          href={"/projects"}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10
            rounded-full bg-yellow-400 text-black shadow-lg hover:shadow-xl
            transition-all px-3 py-2 text-sm font-medium hover:bg-primary"
        >
          View More
        </Link>
      </div>{" "}
      <div
        className="px-4 py-5 grid grid-cols-3 gap-6 items-center justify-center
          w-fit mx-auto mask-b-from-5% mask-b-to-transparent brightness-50"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Image
            key={i}
            src={"/aa.jpeg"}
            alt={""}
            width={500}
            height={500}
            className="w-55 h-30 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
