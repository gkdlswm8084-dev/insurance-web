import { SectionHeading } from "@/components/common/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

export function FaqSection() {
  const { faq } = siteConfig.sections;
  const items = faq.items.filter((item) => item.question.trim() && item.answer.trim());
  if (items.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-muted py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <Accordion type="multiple" className="mt-8 border-y border-foreground/80">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="min-h-16 items-center rounded-none py-5 text-base font-semibold text-foreground hover:text-primary hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
