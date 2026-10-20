import { FileSearch, HeartPulse, Users, type LucideIcon } from "lucide-react";

import { ContactButton } from "@/components/common/contact-button";
import { IconCard } from "@/components/common/icon-card";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/config/site";
import type { CoverageIcon } from "@/types/site";

const icons: Record<CoverageIcon, LucideIcon> = {
  "file-search": FileSearch,
  users: Users,
  "heart-pulse": HeartPulse,
};

export function CoverageSection() {
  const { coverage } = siteConfig.sections;
  if (coverage.items.length === 0) return null;

  return (
    <section id="coverage" aria-labelledby="coverage-title" className="bg-muted py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="coverage-title" eyebrow={coverage.eyebrow} title={coverage.title} />

        <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {coverage.items.map((item) => (
            <li key={item.title}>
              <IconCard icon={icons[item.icon]} title={item.title} description={item.description} />
            </li>
          ))}
        </ul>

        <ContactButton channel="kakao" className="mt-8 w-full sm:w-auto" />
      </div>
    </section>
  );
}
