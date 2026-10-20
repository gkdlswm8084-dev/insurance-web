import { ContactButtons } from "@/components/common/contact-button";
import { ProfileImage } from "@/components/common/profile-image";
import { SonarGrid } from "@/components/ui/sonar-grid";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { person } = siteConfig;

  return (
    <section aria-labelledby="hero-title" className="on-dark bg-brand-gradient text-white">
      {/*
        장식용 점 배경. 흰 점의 최대 불투명도를 color 알파(0.4)로 제한해 글자 가독성을 지키고,
        파동은 글자가 적은 오른쪽에서만 생기게 합니다. 클릭 반응(interactive)은 끄고,
        '동작 줄이기' 설정에서는 정지된 점 배경만 표시됩니다.
      */}
      <SonarGrid
        color="rgba(255, 255, 255, 0.4)"
        baseOpacity={0.3}
        spacing={28}
        amplitude={1.4}
        pingEvery={4}
        interactive={false}
        pingArea={[0.6, 0.2, 0.95, 0.85]}
      >
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
      </SonarGrid>
    </section>
  );
}
