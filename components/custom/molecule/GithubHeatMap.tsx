"use client";

import { Spinner } from "@/components/ui/spinner";
import { useEffect, useMemo, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { easeInOut, motion } from "motion/react";
import { animate, inView } from "motion";
import { SlidingNumber } from "@/components/ui/sliding-number";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContriData = {
  contributions: Contribution[];
};

export default function GithubHeatMap() {
  const [contriData, setContriData] = useState<ContriData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getContributions = async () => {
      setLoading(true);
      const res = await fetch(
        "https://github-contributions-api.jogruber.de/v4/prave01?y=last",
      );
      const data = await res.json();
      setContriData(data);
      setLoading(false);
    };

    getContributions();
  }, []);

  const lastNineMonthsData = useMemo(() => {
    if (!contriData) return [];

    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 9);

    return contriData.contributions.filter((day) => {
      return new Date(day.date) >= cutoff;
    });
  }, [contriData]);

  useEffect(() => {
    inView(".title-github", (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [5, 0] },
        {
          duration: 0.4,
          ease: easeInOut,
        },
      );
    });
  }, []);
  return (
    <motion.div className="w-full py-3 title-github opacity-0">
      <p
        className="font-news text-2xl md:text-3xl font-medium text-primary
        px-3"
      >
        GitHub
      </p>

      <div
        className="text-xs title-github md:text-sm text-primary/80 font-normal
          px-3.5 pt-1 flex gap-1"
      >
        <SlidingNumber
          value={contriData?.contributions?.length || 0}
          padStart={true}
        />
        Contributions Last Year
      </div>

      <div
        className="mx-auto pt-6 lg:px-0 px-4 w-auto lg:w-fit h-50 lg:h-60 flex
          items-center justify-center"
      >
        {loading ? (
          <div
            className="text-primary flex items-center justify-center flex-col
              gap-2 font-medium text-sm lg:text-md"
          >
            <Spinner className="size-5" /> Fetching Contributions
          </div>
        ) : (
          lastNineMonthsData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="w-full"
            >
              <ActivityCalendar
                data={lastNineMonthsData}
                showTotalCount={false}
                blockMargin={6}
                className="text-primary/80 font-medium"
                colorScheme="dark"
                tooltips={{
                  activity: {
                    text: (activity) =>
                      `${activity.level} activities on ${activity.date}`,
                  },
                  colorLegend: {
                    text: (level) => `Activity level ${level + 1}`,
                  },
                }}
                theme={{
                  light: [
                    "#131010",
                    "#fde68a",
                    "#facc15",
                    "#eab308",
                    "#ca8a04",
                  ],
                  dark: ["#161b22", "#713f12", "#a16207", "#eab308", "#fde047"],
                }}
              />
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}
