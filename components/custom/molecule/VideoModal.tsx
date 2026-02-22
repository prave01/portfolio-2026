import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function VideoModal({
  open = true,
  setOpen,
  source,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  source: string;
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
        "fixed z-50 w-full h-full",
        "items-center justify-center inset-y-0",
        open ? "flex" : "hidden",
      )}
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute backdrop-blur-md bg-black/80 w-full h-full top-0
          -z-10"
      />

      <video
        ref={videoRef}
        src={source}
        controls
        className="w-380 h-auto lg:h-180 rounded-none lg:rounded-2xl"
      />
    </div>
  );
}
