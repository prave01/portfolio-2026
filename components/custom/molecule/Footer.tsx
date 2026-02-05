import { useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import TextEntry from "../atom/TextEntry";
import { Mail } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="h-50 w-full py-3 flex items-center justify-between"
    >
      <div className="h-full flex items-start px-6 flex-col justify-between">
        {" "}
        <div className="w-auto h-auto text-sm flex flex-col gap-4 text-primary">
          <Link
            href={""}
            className="px-3 py-2 shadow-[2px_3px_2px_var(--color-primary)_inset]
              bg-yellow-400 text-black font-normal flex gap-2 w-fit items-center
              justify-center"
          >
            <XCom className="text-black" />
            (@drunkidev)
          </Link>
          <Link
            href={""}
            className="px-3 py-2 shadow-[2px_3px_2px_var(--color-primary)_inset]
              bg-yellow-400 text-black font-normal flex gap-2 w-fit items-center
              justify-center"
          >
            <Mail className="text-red-500 size-5" />
            Gmail
          </Link>
        </div>
        {isInView && (
          <TextEntry className="text-primary/50 font-news">@ 2025</TextEntry>
        )}
      </div>
      <Image
        src={"/am.png"}
        width={500}
        height={500}
        className="size-50 bg-none md:bg-yellow-400/50 [corner-shape:squircle]
          rounded-4xl"
        alt={""}
      />
    </div>
  );
}

const XCom = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="bi bi-twitter-x"
    {...props}
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);
