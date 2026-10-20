import type { TestimonialItem } from "../types/site";

/**
 * 디자인 확인용 가상 사례입니다. 실제 고객 후기가 아닙니다.
 * - 개발 서버에서 SHOW_SAMPLE_TESTIMONIALS=true 로 실행할 때만 표시됩니다.
 * - `npm run verify:build`가 production 빌드 결과물에 이 문구가 없는지 확인합니다.
 */
export const sampleTestimonials: TestimonialItem[] = [
  {
    id: "sample-1",
    title: "[시안] 가입한 보험을 한눈에 정리한 사례",
    content:
      "[시안용 가상 문구] 여러 개의 보험을 정리해 보장 항목을 이해하기 쉽게 설명받은 상황을 가정한 예시 문구입니다.",
    approvedForPublication: false,
    sampleLabel: "시안용 가상 사례 · 실제 후기 아님",
  },
  {
    id: "sample-2",
    title: "[시안] 가족 보장을 함께 살펴본 사례",
    content:
      "[시안용 가상 문구] 가족 구성과 현재 보장 내용을 함께 확인한 상황을 가정한 예시 문구입니다.",
    approvedForPublication: false,
    sampleLabel: "시안용 가상 사례 · 실제 후기 아님",
  },
];
