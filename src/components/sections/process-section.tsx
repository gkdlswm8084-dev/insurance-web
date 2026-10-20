import { ContactButton } from "@/components/common/contact-button";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/config/site";

export function ProcessSection() {
  const { process } = siteConfig.sections;
  if (process.steps.length === 0) return null;

  return (
    <section id="process" aria-labelledby="process-title" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} />

        <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <div className="flex h-full gap-4 rounded-2xl border bg-card p-5 sm:p-6 md:flex-col">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-navy-foreground"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy">
                    <span className="sr-only">{index + 1}단계: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <ContactButton channel="kakao" className="mt-8 w-full sm:w-auto" />
      </div>
    </section>
  );
}
