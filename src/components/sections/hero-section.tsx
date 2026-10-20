import { ContactButtons } from "@/components/common/contact-button";
import { ProfileImage } from "@/components/common/profile-image";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { person } = siteConfig;

  return (
    <section aria-labelledby="hero-title" className="bg-gradient-to-b from-accent/70 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 pt-8 pb-10 sm:px-8 md:grid-cols-[1fr_auto] md:gap-12 md:py-20 lg:py-24">
        <div className="md:order-1">
          <div className="flex items-center gap-4 md:block">
            <ProfileImage
              src={person.profileImage.src}
              alt={person.profileImage.alt}
              name={person.name}
              className="size-20 shrink-0 md:hidden"
            />
            <div>
              <p className="text-base font-semibold text-accent-foreground">{person.affiliation}</p>
              <p className="mt-0.5 text-2xl font-bold text-navy md:text-3xl">{person.name}</p>
            </div>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-[1.75rem] font-bold leading-snug text-navy sm:text-4xl md:mt-8 md:text-5xl md:leading-tight"
          >
            {person.headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {person.introduction}
          </p>

          <ContactButtons className="mt-7 max-w-xl" />
        </div>

        <ProfileImage
          src={person.profileImage.src}
          alt={person.profileImage.alt}
          name={person.name}
          className="hidden size-72 md:order-2 md:block lg:size-80"
        />
      </div>
    </section>
  );
}
