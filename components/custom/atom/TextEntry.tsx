"use client";

import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";

export default function TextEntry({
  className,
  delay = 0,
  children,
}: {
  className?: ClassValue;
  delay?: number;
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = async () => {
    await animate(
      "div.absolute",
      { width: "100%" },
      {
        duration: 0.2,
        ease: "easeInOut",
        delay: delay,
        type: "spring",
        damping: 20,
      },
    );
    setAppear(true);

    await animate(
      "div.absolute",
      { scaleX: [1, 0], transformOrigin: "right" },
      { duration: 0.2, ease: "easeInOut", type: "spring", damping: 20 },
    );
  };

  return (
    <div ref={scope} className={cn("relative w-fit h-fit pt-1", className)}>
      <div className={cn(appear ? "opacity-100" : "opacity-0")}>{children}</div>
      <div className="absolute bg-yellow-400 h-full top-0"></div>
    </div>
  );
}
