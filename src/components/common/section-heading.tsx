import type { SectionHeadingContent } from "@/types/site";
import { cn } from "@/lib/utils";

type SectionHeadingProps = SectionHeadingContent & {
  id: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-sm font-medium tracking-wide text-muted-foreground">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-[1.75rem] font-bold leading-snug text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
