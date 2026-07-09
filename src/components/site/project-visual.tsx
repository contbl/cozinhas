import { type LucideIcon } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  icon: Icon,
  ratio = 4 / 3,
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  ratio?: number;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <AspectRatio
      ratio={ratio}
      className={cn(
        "group relative overflow-hidden rounded-sm bg-gradient-to-br from-secondary via-muted to-accent",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, color-mix(in oklch, var(--primary), transparent 78%), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className={cn(
            "size-12 text-primary/25 transition-transform duration-500 group-hover:scale-110",
            iconClassName
          )}
          strokeWidth={1.25}
        />
      </div>
      <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase backdrop-blur-sm">
        Imagem ilustrativa
      </span>
    </AspectRatio>
  );
}
