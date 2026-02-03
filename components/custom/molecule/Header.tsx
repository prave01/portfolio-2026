import Image from "next/image";
import TextEntry from "../atom/TextEntry";

export default function Header() {
  return (
    <div className="flex px-2 justify-between items-center w-full">
      {" "}
      <div
        className="text-primary font-play text-5xl font-medium tracking flex
          gap-4 flex-col"
      >
        <TextEntry>
          <span className="">Praveen</span>
        </TextEntry>
        <TextEntry delay={0.2} className="text-2xl text-primary/80 ml-10">
          Thanikachalam
        </TextEntry>
      </div>
      <Image
        width={500}
        height={500}
        className="object-cover object-top bg-yellow-400 [corner-shape:squircle]
          rounded-[40px] size-30"
        src={"/new3.png"}
        placeholder="blur"
        alt={"Praveen's Profile Image"}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
    </div>
  );
}
