import { ContactButton } from "@/components/common/contact-button";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const { person, navigation } = siteConfig;

  return (
    <header className="border-b bg-white/95 backdrop-blur md:sticky md:top-0 md:z-40">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:h-16">
        <a href="#top" className="flex items-baseline gap-2 rounded-md">
          <span className="text-lg font-bold text-navy">{person.name}</span>
          <span className="text-sm text-muted-foreground">{person.affiliation}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="주요 메뉴" className="hidden lg:block">
            <ul className="flex gap-5 text-sm font-medium text-foreground/80">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="rounded-md py-2 hover:text-navy">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ContactButton channel="kakao" compact className="min-h-11 px-4 py-2 text-sm" />
        </div>
      </div>
    </header>
  );
}
