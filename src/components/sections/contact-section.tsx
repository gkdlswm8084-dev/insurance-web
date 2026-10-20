import { ContactButtons } from "@/components/common/contact-button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const { contact } = siteConfig.sections;

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy py-14 text-navy-foreground md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="contact-title" className="text-2xl font-bold leading-snug sm:text-3xl">
          {contact.title}
        </h2>
        <div className="mt-4 space-y-1 text-lg leading-relaxed text-white/85">
          {contact.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ContactButtons showNumber className="mx-auto mt-8 max-w-xl [&_button]:border-white/40 [&_button]:bg-white/10 [&_button]:text-white/80" />
      </div>
    </section>
  );
}
