import { ChevronLeft } from "lucide-react";
import { LinkTransition } from "../atom/LinkTransition";
import { Separator } from "@/components/ui/separator";

export default function BlogPage() {
  return (
    <div>
      {" "}
      <div className="w-full min-h-screen pt-10 md:pt-15 px-3">
        <div className="max-w-2xl w-full mx-auto h-full flex gap-8 flex-col">
          <LinkTransition
            href={"/"}
            className="text-primary/80 flex items-center hover:text-primary
              transition-all ease-in-out group duration-150"
          >
            <ChevronLeft
              className="size-4 group-hover:-translate-x-1 transition-all
                duration-150 ease-in-out"
            />
            <p className="text-sm">Back</p>
          </LinkTransition>
          <div className="space-y-5 px-4">
            {" "}
            <p
              className="font-news text-2xl md:text-3xl font-medium
                text-primary"
            >
              Blogs Page
            </p>
            <p className="text-primary/50 px-4 w-[90%] text-sm">
              You can find some intersting blog posts about AI, Case Studies,
              Architecural Planning, Enterprise Solutions and more ...
            </p>
          </div>
          <Separator className="w-[60%] mx-auto bg-primary/5" />
          <div
            className="grid grid-cols-1 gap-y-12 items-start pb-15 pt-5 md:py-10
              justify-center md:grid-cols-2 w-full h-f overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  );
}
