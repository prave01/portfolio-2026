"use client";

import About from "@/components/custom/molecule/About";
import Experience from "@/components/custom/molecule/Experience";
import GithubHeatMap from "@/components/custom/molecule/GithubHeatMap";
import Header from "@/components/custom/molecule/Header";
import OSSContributions from "@/components/custom/molecule/OSSContributions";
import Projects from "@/components/custom/molecule/Projects";
import SpotifyNotifer from "@/components/custom/molecule/SpotifyNotifier";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full overflow-hidden min-h-screen relative font-semibold">
      <div
        className="gap-2 md:gap-4 pt-3 md:pt-18 mx-auto flex flex-col max-w-3xl
          w-full"
      >
        {" "}
        <Header />
        <Separator className="bg-primary/5" />
        <About />
        <Separator className="bg-primary/5" />
        <GithubHeatMap />
        <Separator className="bg-primary/5" />
        <Projects />
        <Separator className="bg-primary/5" />
        <Experience />
        <Separator className="bg-primary/5" />
        <OSSContributions />
        <Separator className="bg-primary/5" />
      </div>
      <SpotifyNotifer />;
    </div>
  );
}
