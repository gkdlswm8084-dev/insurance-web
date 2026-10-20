import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function IconCard({ icon: Icon, title, description, className }: IconCardProps) {
  return (
    <div
      className={cn(
        "flex h-full gap-4 rounded-2xl border bg-card p-5 sm:p-6 md:flex-col",
        className,
      )}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <div>
        <h3 className="text-lg font-semibold leading-snug text-navy">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
