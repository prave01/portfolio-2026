"use client";

import About from "@/components/custom/molecule/About";
import Connect from "@/components/custom/molecule/Connect";
import Header from "@/components/custom/molecule/Header";
import Projects from "@/components/custom/molecule/Projects";
import SpotifyNotifer from "@/components/custom/molecule/SpotifyNotifier";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="bg-[#131010] w-full overflow-hidden min-h-screen relative
        font-semibold"
    >
      <div
        className="gap-2 md:gap-4 pt-3 md:pt-18 mx-auto flex flex-col max-w-3xl
          w-full"
      >
        {" "}
        <Header />
        <Separator className="bg-primary/5" />
        <About />
        <Separator className="bg-primary/5" />
        <Projects />
        <Separator className="bg-primary/5" />
      </div>
      <SpotifyNotifer />;
    </div>
  );
}
