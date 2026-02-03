import TextEntry from "../atom/TextEntry";

export default function About() {
  return (
    <div className="h-auto w-full px-2">
      {/* <p className="bg-primary text-xl w-fit py-0.5 px-2 font-play">About me</p> */}
      <p className="text-primary font-semibold text-lg">
        {" "}
        Praveen <span className="text-yellow-400">✿</span> 21 yr old, From India
      </p>
      <ul className="text-primary/80 flex gap-0.5 flex-col text-md font-medium">
        <li className="flex gap-x-1">
          {" "}
          <TextEntry delay={0.5}>
            {" "}
            Currently broke <span className="text-yellow-400">ASF</span>.{" "}
          </TextEntry>
          <TextEntry delay={0.6} className="text-wrap">
            {" "}
            I am a <span className="text-yellow-400">Full Stack Developer</span>{" "}
            who lives somewhere between terminal windows in
          </TextEntry>
        </li>
        <li className="flex gap-x-1">
          {" "}
          <TextEntry delay={0.7}>
            <span className="text-yellow-400">Arch Linux</span>.
          </TextEntry>
          <TextEntry>
            I am trying so hard to free myself from{" "}
            <span className="bg-yellow-400 text-black">unemployement</span>{" "}
            jail, but some external spritual 💀
          </TextEntry>
        </li>
        <li className="flex gap-x-1">
          {" "}
          <TextEntry>forces are not letting me.</TextEntry>
        </li>
        <li className="flex gap-x-1">
          {" "}
          <TextEntry>
            So if you are someone who have the{" "}
            <span className="bg-yellow-400 text-black">
              key (a job offering)
            </span>
            , Please free me from this dungeon and i will{" "}
          </TextEntry>
        </li>
        <li>
          <TextEntry>
            server under your leadership for the rest of my life.
          </TextEntry>
        </li>
      </ul>
    </div>
  );
}
