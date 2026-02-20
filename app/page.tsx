"use client";

import About from "@/components/custom/molecule/About";
import Blogs from "@/components/custom/molecule/Blogs";
import Experience from "@/components/custom/molecule/Experience";
import Footer from "@/components/custom/molecule/Footer";
import GithubHeatMap from "@/components/custom/molecule/GithubHeatMap";
import Header from "@/components/custom/molecule/Header";
import OSSContributions from "@/components/custom/molecule/OSSContributions";
import Projects from "@/components/custom/molecule/Projects";
import { Separator } from "@/components/ui/separator";
import { easeInOut, motion } from "motion/react";

export default function Home() {
  return (
    <div
      className="w-full overflow-hidden min-h-screen relative font-semibold
        no-scrollbar"
    >
      <motion.div
        animate={{
          opacity: [0, 1],
          filter: ["blur(5px)", "blur(0px)"],
        }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: easeInOut,
        }}
        className="gap-2 opacity-0 md:gap-4 pt-3 md:pt-18 mx-auto flex flex-col
          max-w-3xl w-full no-scrollbar"
      >
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
        <Blogs />
        <Separator className="bg-primary/5" />
        <Footer />
      </motion.div>
    </div>
  );
}
