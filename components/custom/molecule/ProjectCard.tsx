import Image from "next/image";
import { Github, Globe, PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import VideoModal from "./VideoModal";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectCard({
  name,
  description,
  github,
  image,
  techImages,
  video,
  live,
}: {
  name: string;
  techImages: Array<{ name: string; image: string }>;
  image: string;
  github: string;
  live?: string;
  description: string;
  video: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      {video && <VideoModal setOpen={setOpen} open={open} source={video} />}
      <div
        className="w-full h-auto bg-black/10 rounded-2xl [corner-shape:squircle]
          border-primary/10 border overflow-hidden project-card opacity-0"
      >
        <div
          className="w-full h-37.5 overflow-hidden relative flex items-center
            justify-center"
        >
          {" "}
          {image ? (
            <Image
              className="object-cover w-full h-auto"
              width={400}
              height={400}
              src={image}
              alt={""}
            />
          ) : (
            <div
              className="text-4xl p-5 rounded-full size-20 font-bold
                bg-primary/10 text-rose-400 flex items-center justify-center"
            >
              {name[0].toUpperCase()}
            </div>
          )}
          {video && (
            <div onClick={() => { }} className="absolute top-2 right-2">
              <PlayCircleIcon
                onClick={() => setOpen(true)}
                className="stroke-primary size-6 cursor-pointer
                  hover:stroke-primary/80"
              />
            </div>
          )}
        </div>
        <div className="px-3 py-2 flex flex-col gap-1">
          <p className="text-lg font-medium text-primary">{name}</p>
          <div className="flex gap-x-2 items-center w-full justify-start">
            {techImages.map((i, idx) => (
              <Tooltip key={idx}>
                <TooltipContent>{i.name}</TooltipContent>
                <TooltipTrigger asChild>
                  <Image
                    width={500}
                    height={500}
                    className="size-4.5"
                    src={i.image}
                    alt={""}
                  />
                </TooltipTrigger>
              </Tooltip>
            ))}
          </div>
          <p className="text-sm text-primary/50 font-normal my-1">
            {description}
          </p>
          <div className="mb-1 mt flex gap-2 items-center justify-start">
            <Link href={github} target="_blank">
              {" "}
              <Github className="size-4 stroke-white" />
            </Link>
            {live && (
              <Link href={live} target="_blank">
                {" "}
                <Globe className="stroke-blue-400 size-4" />{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
