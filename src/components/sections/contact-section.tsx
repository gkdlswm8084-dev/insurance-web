import { ContactButtons } from "@/components/common/contact-button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const { contact } = siteConfig.sections;

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-primary py-16 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="contact-title" className="text-[1.75rem] font-bold leading-snug sm:text-4xl">
          {contact.title}
        </h2>
        <div className="mt-4 space-y-1 text-lg leading-relaxed text-white/85">
          {contact.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ContactButtons tone="dark" showNumber className="mx-auto mt-8 max-w-xl" />
      </div>
    </section>
  );
}
