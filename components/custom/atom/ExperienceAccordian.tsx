import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function ExperienceAccordian({
  name,
  role,
  period,
  description,
  bgcolor,
  index,
}: {
  index: number;
  name: string;
  role: string;
  period: string;
  description: string[];
  bgcolor: string;
}) {
  return (
    <AccordionItem value={`item-${index.toString()}`}>
      <AccordionTrigger className="">
        <div className="flex gap-3">
          {" "}
          <div
            className={cn(
              `[corner-shape:squircle] rounded-[40px] px-3 py-2 size-12 flex
              items-center justify-center text-lg`,
              bgcolor,
            )}
          >
            {name[0].toUpperCase()}
          </div>
          <div className="flex flex-col items-start gap-0.5 justify-center">
            <p className="text-primary font-medium text-md">
              {role} at
              <span className="text-yellow-400"> {name}</span>
            </p>
            <p className="text-primary/60 text-sm font-normal">{period}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div
          className="h-auto w-full flex flex-col gap-3 items-center
            justify-start pl-15.5 py-4"
        >
          {description.map((i, idx) => (
            <p className="text-primary/90 font-medium text-[14px]" key={idx}>
              {i}
            </p>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
