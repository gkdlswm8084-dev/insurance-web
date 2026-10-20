import { siteConfig } from "@/config/site";
import type { TestimonialItem } from "@/types/site";

/**
 * 공개 승인된 후기만 반환합니다.
 * 시안용 가상 사례는 개발 서버에서 SHOW_SAMPLE_TESTIMONIALS=true 일 때만 불러오며,
 * production 빌드에서는 이 분기가 제거되어 번들에 포함되지 않습니다.
 */
export async function getVisibleTestimonials(): Promise<TestimonialItem[]> {
  const approved = siteConfig.sections.testimonials.items.filter(
    (item) => item.approvedForPublication && !item.sampleLabel,
  );

  if (
    process.env.NODE_ENV === "development" &&
    process.env.SHOW_SAMPLE_TESTIMONIALS === "true"
  ) {
    const { sampleTestimonials } = await import("@/config/testimonials.sample");
    return [...approved, ...sampleTestimonials];
  }

  return approved;
}
