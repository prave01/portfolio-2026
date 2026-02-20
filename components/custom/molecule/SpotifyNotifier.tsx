"use client";

import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import z from "zod";
import { cn } from "@/lib/utils";
import { TimeSlider } from "../atom/TimeSlider";
import { PauseIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const DataSchema = z.object({
  is_playing: z.boolean(),
  item: z.object({
    name: z.string(),
    album: z.object({
      images: z.array(
        z.object({
          height: z.number(),
          width: z.number(),
          url: z.string(),
        }),
      ),
    }),
    duration_ms: z.number(),
    external_urls: z.object({
      spotify: z.string(),
    }),
    artists: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  currently_playing_type: z.enum(["track", "ad"]),
  progress_ms: z.number(),
});

export type SpotifyData = z.infer<typeof DataSchema>;

const convertToMin = (ms: number) => {
  const minutes = Math.floor(ms / 1000 / 60);

  const seconds = Math.floor((ms / 1000) % 60);

  return `${minutes}:${seconds}`;
};

export default function SpotifyNotifer() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    setLoading(true);
    const es = new EventSource("/spotify");

    es.onmessage = async (e) => {
      setLoading(false);
      const data = await JSON.parse(e.data);
      setData(data);
    };

    setLoading(false);
    es.onerror = () => es.close();

    return () => {
      es.close();
    };
  }, []);

  useEffect(() => {
    if (data && data.is_playing) {
      setTimeout(() => setExpanded(true), 1500);
    }
  }, [data?.is_playing]);

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        filter: ["blur(5px)", "blur(0px)"],
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
        damping: 20,
      }}
      className="w-full py-2 md:pt-4 md:py-0"
    >
      <motion.div
        onClick={() => setExpanded(!isExpanded)}
        layout
        animate={{
          borderRadius: 10,
          width: isExpanded ? "350px" : "100px",
          height: isExpanded ? "150px" : "40px",
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
          damping: 20,
          borderRadius: {
            ease: easeInOut,
            duration: 0.3,
            damping: 20,
          },
        }}
        className={cn(
          "px-2 py-2 bg-green-500 tracking-tight",
          " rounded-[10px] w-fit h-fit gap-2 items-start mr-auto flex",
        )}
      >
        <div className="flex gap-2 w-full h-full flex-col">
          {" "}
          <div
            className="text-md ml-0.5 bg-green-500 z-30 relative font-medium
              w-full flex gap-2"
          >
            {" "}
            Spotify
            {loading ? (
              <Spinner className="size-5 mr-0.5" />
            ) : data?.is_playing ? (
              <DotLottieReact
                width={500}
                height={100}
                className="size-10 z-40 absolute -translate-y-2.5
                  translate-x-12"
                loop
                autoplay
                src="/wave.lottie"
              />
            ) : (
              <Image
                src={"/spotify.png"}
                width={500}
                height={500}
                className="size-5"
                alt={""}
              />
            )}
          </div>{" "}
          {isExpanded && (
            <AnimatePresence>
              {" "}
              <motion.div
                animate={{
                  filter: ["blur(5px)", "blur(0px)"],
                  scale: [0, 1],
                }}
                exit={{
                  filter: ["blur(0px)", "blur(5px)"],
                  scale: [1, 0],
                }}
                style={{
                  transformOrigin: "top left",
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: easeInOut,
                  damping: 20,
                }}
                className="w-full h-full bg-white/30 py-2 px-3 rounded-[10px]"
              >
                {data && data.currently_playing_type === "track" ? (
                  <>
                    <p
                      className="text-black font-medium text-md max-w-47.25
                        truncate"
                    >
                      {data?.item.name}
                    </p>
                    <p
                      className="text-black font-medium text-sm max-w-47.25
                        truncate"
                    >
                      {data?.item?.artists[0].name}
                    </p>
                    <div
                      className="w-full text-[12px] flex items-center
                        justify-between h-auto pt-2 text-black/50"
                    >
                      <span>{convertToMin(data?.progress_ms || 0)}</span>
                      <span>{convertToMin(data?.item?.duration_ms || 0)}</span>
                    </div>
                  </>
                ) : data && data.currently_playing_type === "ad" ? (
                  <span className="text-sm w-42.5">Ad</span>
                ) : (
                  <span className="text-sm w-42.5 pb-2">
                    Currently not lisenting
                  </span>
                )}

                <TimeSlider
                  max={
                    data?.currently_playing_type == "ad"
                      ? 0
                      : data?.item?.duration_ms
                  }
                  disabled
                  value={[data?.progress_ms || 0]}
                  className="w-full bg-white brightness-120 mt-2"
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <AnimatePresence>
          {" "}
          {isExpanded && (
            <motion.div
              animate={{
                filter: ["blur(5px)", "blur(0px)"],
                opacity: [0, 1],
                scale: [0, 1],
              }}
              exit={{
                filter: ["blur(0px)", "blur(5px)"],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: easeInOut,
                damping: 20,
              }}
              style={{
                transformOrigin: "top left",
              }}
              className="w-50 h-full relative rounded-[10px] flex items-center
                justify-center"
            >
              {data && data?.item?.album?.images[0].url ? (
                <>
                  <Image
                    className="h-full w-full object-cover rounded-[10px]"
                    src={data.item.album.images[0].url}
                    width={data.item.album.images[0].width}
                    height={data.item.album.images[0].height}
                    alt={""}
                  />
                  {!data?.is_playing && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        filter: "blur(5px)",
                      }}
                      animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      exit={{
                        opacity: 0,
                        filter: "blur(5px)",
                      }}
                      className="absolute z-10"
                    >
                      <PauseIcon className="size-20 fill-zinc-200 text-zinc-200" />
                    </motion.div>
                  )}
                </>
              ) : data?.currently_playing_type == "ad" ? (
                <span>Playing Ad</span>
              ) : (
                <div className="relative w-auto h-auto">
                  <Image
                    src={"/green.png"}
                    width={500}
                    height={500}
                    className="size-10 object-cover bg-white rounded-lg p-2
                      brightness-80"
                    alt={""}
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
