import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/config/site";

export function PhilosophySection() {
  const { philosophy } = siteConfig.sections;

  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="philosophy-title" eyebrow={philosophy.eyebrow} title={philosophy.title} />
        <div className="mt-6 max-w-2xl space-y-4 border-l-2 border-primary pl-5 text-lg leading-relaxed text-foreground/90">
          {philosophy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
