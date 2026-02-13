import Image from "next/image";
import Link from "next/link";

export default function OSSPill({
  name,
  href,
  issue,
  icon,
}: {
  name: string;
  issue: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="bg-primary/20 oss-pill [corner-shape:squircle] rounded-[40px]
        w-fit p-3 flex gap-3 items-center justify-center"
    >
      {" "}
      <div
        className="[corner-shape:squircle] rounded-[40px] size-10 flex
          bg-[#131010] items-center justify-center"
      >
        <Image
          src={icon}
          width={500}
          height={500}
          className="size-6"
          alt={""}
        />
      </div>
      <div className="flex pr-1 flex-col gap-0.5">
        <p className="text-primary text-[12px]">{name}</p>
        <p className="text-yellow-400 text-[10px]">Issue - {issue}</p>
      </div>
    </Link>
  );
}
