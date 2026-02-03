import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { X } from "lucide-react";

export function HoverCardProject({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="top"
        className="flex translate-y-30 translate-x-20 transition-all w-64
          flex-col gap-0.5 relative"
      >
        <X className="absolute right-2 top-2 size-5 text-muted-foreground" />
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="text-muted-foreground mt-1 text-xs">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
