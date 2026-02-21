import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function VideoModal({
  open = true,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (open) {
      video.play().catch(() => { });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  return (
    <div
      className={cn(
        "absolute z-40 w-full h-screen",
        "items-center justify-center inset-0",
        open ? "flex" : "hidden",
      )}
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute backdrop-blur-md bg-black/50 w-full h-full -z-10"
      />

      <video
        ref={videoRef}
        src="/sample-vid.mp4"
        controls
        className="size-auto rounded-2xl"
      />
    </div>
  );
}
