import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";

const { privacy, person } = siteConfig;
const isPublished = privacy.enabled && privacy.sections.length > 0;

export const metadata: Metadata = {
  title: `${privacy.title} | ${person.name}`,
};

/**
 * 실제 운영 방식에 맞는 방침이 config에 작성되고 privacy.enabled 가 true 일 때만 표시합니다.
 * 그 전에는 임의의 정책을 게시하지 않도록 404를 반환합니다.
 */
export default function PrivacyPage() {
  if (!isPublished) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Link href="/" className="text-sm font-semibold text-accent-foreground underline underline-offset-4">
        ← {person.name} 홈으로
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-navy">{privacy.title}</h1>
      <div className="mt-8 space-y-8 text-base leading-relaxed">
        {privacy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
