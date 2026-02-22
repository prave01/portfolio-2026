import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { LinkTransition } from "@/components/custom/atom/LinkTransition";
import Markdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cleanSlug = slug.replace(/\.md$/, "");

  const filePath = path.join(process.cwd(), "public/blogs", `${cleanSlug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdown = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      className="w-full min-h-screen pt-10 px-3 delay-100 transition-all
        opacity-100 duration-150"
    >
      <div className="max-w-2xl w-full mx-auto h-full flex gap-6 flex-col">
        <LinkTransition
          href={"/blogs"}
          className="text-primary/80 flex items-center hover:text-primary
            transition-all ease-in-out group duration-150"
        >
          <ChevronLeft
            className="size-4 group-hover:-translate-x-1 transition-all
              duration-150 ease-in-out"
          />
          <p className="text-sm">Back</p>
        </LinkTransition>
        <div className="px-4 space-2">
          {" "}
          <p className="font-news text-2xl md:text-3xl font-medium text-primary">
            {slug.split("_").join(" ")}
          </p>
          <p className="text-primary/50 text-sm">Mar 2025</p>
        </div>
        <Separator className="w-[60%] mx-auto bg-primary/5" />
        <div className="prose prose-invert px-4 pb-5">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  );
}
