import { ContactButtons } from "@/components/common/contact-button";
import { ProfileImage } from "@/components/common/profile-image";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { person } = siteConfig;

  return (
    <section aria-labelledby="hero-title" className="on-dark bg-brand-gradient text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 pt-10 pb-12 sm:px-8 md:grid-cols-[1fr_auto] md:gap-12 md:py-24 lg:py-28">
        <div className="md:order-1">
          <div className="flex items-center gap-4 md:block">
            <ProfileImage
              src={person.profileImage.src}
              alt={person.profileImage.alt}
              name={person.name}
              className="size-20 shrink-0 md:hidden"
            />
            <div>
              <p className="text-base font-medium text-white/80">{person.affiliation}</p>
              <p className="mt-0.5 text-2xl font-bold md:text-3xl">{person.name}</p>
            </div>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-[1.875rem] font-bold leading-snug sm:text-4xl md:mt-8 md:text-6xl md:leading-tight"
          >
            {person.headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            {person.introduction}
          </p>

          <ContactButtons tone="dark" className="mt-8 max-w-xl" />
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
