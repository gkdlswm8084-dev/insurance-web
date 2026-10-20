import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/config/site";
import { getVisibleTestimonials } from "@/lib/testimonials";

/** 공개 승인된 후기가 없으면 섹션 전체를 렌더링하지 않습니다. */
export async function TestimonialsSection() {
  const items = await getVisibleTestimonials();
  if (items.length === 0) return null;

  const { testimonials } = siteConfig.sections;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="testimonials-title"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {items.map((item) => (
            <li key={item.id} className="border bg-card p-5 sm:p-7">
              {item.sampleLabel && (
                <p className="mb-3 inline-block rounded-md bg-destructive/10 px-2 py-1 text-sm font-semibold text-destructive">
                  {item.sampleLabel}
                </p>
              )}
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
