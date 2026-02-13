"use client";

import { animate } from "motion";
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

    overlay.classList = "overlay fixed top-0 bg-yellow-400 z-10 h-full";

    document.body.appendChild(overlay);

    await animate(
      ".overlay",
      { width: "100%" },
      {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.5,
        type: "spring",
        damping: 20,
      },
    );

    router.push(href);

    await animate(
      ".overlay",
      { scaleX: [1, 0], transformOrigin: "right" },
      { duration: 0.2, ease: "easeInOut", type: "spring", damping: 20 },
    );
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
