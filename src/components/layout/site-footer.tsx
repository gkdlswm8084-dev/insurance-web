import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const { person, footer, privacy } = siteConfig;
  const showPrivacyLink = privacy.enabled && privacy.sections.length > 0;

  return (
    <footer className="border-t bg-muted">
      <div className="mx-auto max-w-6xl space-y-4 px-5 py-10 text-sm leading-relaxed text-muted-foreground sm:px-8">
        <p>
          <span className="font-semibold text-foreground">{person.name}</span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          {person.affiliation}
        </p>
        <p>{footer.operatorNotice}</p>
        {footer.disclaimers.length > 0 && (
          <ul className="list-disc space-y-1 pl-5">
            {footer.disclaimers.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
        {footer.complianceNumber.trim() && <p>{footer.complianceNumber}</p>}
        {showPrivacyLink && (
          <p>
            <Link href={privacy.href} className="font-semibold text-foreground underline underline-offset-4">
              {privacy.linkLabel}
            </Link>
          </p>
        )}
        <p>© {person.name}</p>
      </div>
    </footer>
  );
}
