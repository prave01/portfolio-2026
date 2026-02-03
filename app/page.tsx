"use client";

import SpotifyNotifer from "@/components/custom/SpotifyNotifier";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import TextEntry from "@/components/custom/atom/TextEntry";

export default function Home() {
  return (
    <div
      className="bg-[#131010] w-full overflow-hidden min-h-screen relative
        font-semibold"
    >
      <div className="gap-6 pt-20 mx-auto flex flex-col max-w-4xl w-full">
        {" "}
        <div className="flex justify-between items-center w-full">
          {" "}
          <div
            className="text-primary font-play text-5xl font-medium tracking flex
              gap-4 flex-col"
          >
            <TextEntry text={"Praveen"} />
            <TextEntry
              text={"Thanikachalam"}
              delay={0.2}
              className="text-2xl text-primary/80 ml-10"
            />
          </div>
          <Image
            width={500}
            height={500}
            className="object-cover object-top bg-yellow-400
              [corner-shape:squircle] rounded-[40px] size-30"
            src={"/new3.png"}
            placeholder="blur"
            alt={"Praveen's Profile Image"}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <Separator className="bg-primary/5" />
      </div>
      <SpotifyNotifer />;
    </div>
  );
}
