import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Globe, PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import VideoModal from "./VideoModal";
import { useState } from "react";

export default function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full">
      {" "}
      <VideoModal setOpen={setOpen} open={open} />
      <div
        className="w-full h-auto bg-black/10 rounded-2xl [corner-shape:squircle]
          project-card border-primary/10 border overflow-hidden"
      >
        <div className="w-full h-full relative">
          {" "}
          <Image
            className="object-cover w-full h-auto"
            width={400}
            height={400}
            src={"/projects/sample.png"}
            alt={""}
          />
          <div onClick={() => { }} className="absolute top-2 right-2">
            {" "}
            <Tooltip>
              {" "}
              <TooltipContent>Play Video</TooltipContent>
              <TooltipTrigger asChild>
                <PlayCircleIcon
                  onClick={() => setOpen(true)}
                  className="stroke-primary size-6 cursor-pointer
                    hover:stroke-primary/80"
                />
              </TooltipTrigger>
            </Tooltip>
          </div>
        </div>
        <div className="px-3 py-2 flex flex-col gap-1">
          {" "}
          <p className="text-lg font-medium text-primary">Project Name</p>
          <div className="flex gap-x-2 items-center w-full justify-start">
            {" "}
            <Image
              width={500}
              height={500}
              className="size-4.5"
              src={"/skills/ts.png"}
              alt={""}
            />
            <Image
              width={500}
              height={500}
              className="size-4.5"
              src={"/skills/ts.png"}
              alt={""}
            />
            <Image
              width={500}
              height={500}
              className="size-4.5"
              src={"/skills/ts.png"}
              alt={""}
            />
          </div>
          <p className="text-sm text-primary/50 font-normal my-1">
            Lorem ipsum is typically a corrupted version of De finibus bonorum
            et malorum, a 1st-century BC text by the Roman
          </p>
          <div className="mb-1 mt flex gap-2 items-center justify-start">
            <Link href={""}>
              {" "}
              <Github className="size-4 stroke-white" />
            </Link>
            <Link href={""}>
              {" "}
              <Globe className="stroke-blue-400 size-4" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
