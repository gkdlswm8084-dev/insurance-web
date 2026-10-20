import { DevConfigNotice } from "@/components/layout/dev-config-notice";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { CoverageSection } from "@/components/sections/coverage-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {siteConfig.ui.skipToContent}
      </a>
      <DevConfigNotice />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <PhilosophySection />
        <CoverageSection />
        <ProcessSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  );
}
