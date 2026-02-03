import TextEntry from "../atom/TextEntry";

export default function About() {
  return (
    <div className="h-auto w-full px-3 md:px-2">
      <p className="text-primary font-semibold text-md">
        {" "}
        <span className="underline underline-offset-3">
          Praveen <span className="text-primary/50">Thanikachalam</span>
        </span>{" "}
        <span className="text-yellow-400">✿</span> 21 yr old, From India
      </p>
      <ul
        className="text-primary/80 flex md:gap-0.5 gap-0 flex-col text-md
          font-medium"
      >
        <li className="flex gap-0 lg:gap-1 md:flex-row flex-col">
          {" "}
          <TextEntry delay={0.5}>
            {" "}
            Currently broke <span className="text-yellow-400">ASF</span>.{" "}
          </TextEntry>
          <TextEntry delay={0.6} className="text-wrap">
            {" "}
            I am a <span className="text-yellow-400">Full Stack Developer</span>{" "}
            who lives somewhere between terminal windows in
            <span className="md:hidden text-yellow-400"> Arch Linux</span>
          </TextEntry>
        </li>
        <li className="flex gap-1 md:flex-row flex-col">
          {" "}
          <TextEntry delay={0.7} className="hidden md:flex">
            <span className="text-yellow-400">Arch Linux</span>.
          </TextEntry>
          <TextEntry>
            I am trying so hard to free myself from{" "}
            <span className="bg-yellow-400 text-black">unemployement</span>{" "}
            jail, but some external spritual 💀{" "}
            <span className="w-fit md:hidden">forces are not letting me.</span>
          </TextEntry>
        </li>
        <li className="gap-1 md:flex-row flex-col hidden md:flex">
          {" "}
          <TextEntry>forces are not letting me.</TextEntry>
        </li>
        <li className="flex gap-1">
          {" "}
          <TextEntry>
            So if you are someone who have the{" "}
            <span className="bg-yellow-400 text-black">
              <br className="md:hidden" /> key (a job offering)
            </span>
            , Please free me from this dungeon and i will{" "}
            <span className="md:hidden">
              {" "}
              server under your leadership for the rest of my life.
            </span>
          </TextEntry>
        </li>
        <li className="gap-1 hidden md:flex">
          <TextEntry>
            server under your leadership for the rest of my life.
          </TextEntry>
        </li>
      </ul>
    </div>
  );
}
