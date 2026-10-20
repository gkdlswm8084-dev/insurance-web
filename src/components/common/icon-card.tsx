import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** 코발트 그라데이션으로 채운 강조 카드 */
  filled?: boolean;
  className?: string;
};

export function IconCard({ icon: Icon, title, description, filled = false, className }: IconCardProps) {
  return (
    <div
      className={cn(
        "flex h-full gap-4 border p-5 sm:p-7 md:min-h-64 md:flex-col",
        filled ? "on-dark border-transparent bg-brand-gradient text-white" : "bg-card",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center",
          filled ? "bg-white/15 text-white" : "bg-accent text-accent-foreground",
        )}
      >
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <div>
        <h3 className={cn("text-xl font-bold leading-snug", !filled && "text-foreground")}>{title}</h3>
        <p className={cn("mt-2 text-base leading-relaxed", filled ? "text-white/90" : "text-muted-foreground")}>
          {description}
        </p>
      </div>
    </div>
  );
}
