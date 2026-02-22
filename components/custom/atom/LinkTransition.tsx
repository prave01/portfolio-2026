"use client";

import { animate, easeInOut } from "motion";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const LinkTransition = ({
  href,
  children,
  className,
  ...props
}: TransitionProps) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const overlay = document.createElement("div");

    overlay.className = "fixed top-0 left-0 bg-yellow-400 z-50 h-full w-0";

    document.body.appendChild(overlay);

    const enterAnimation = animate(
      overlay,
      { width: "100%" },
      {
        duration: 0.4,
        ease: easeInOut,
        type: "spring",
        damping: 20,
      },
    );

    if (document.body.contains(overlay)) router.push(href);

    await enterAnimation;

    if (window.location.href.includes(href)) {
      await animate(
        overlay,
        { scaleX: [1, 0], transformOrigin: "right" },
        {
          duration: 0.3,
          ease: easeInOut,
          type: "spring",
          damping: 20,
        },
      );
    }

    document.body.removeChild(overlay);
  };

  return (
    <Link
      href={href}
      className={className}
      {...props}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
};
