import { ContactButton } from "@/components/common/contact-button";
import { cn } from "@/lib/utils";

const barClass =
  "border-t bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden";

function BarButtons() {
  return (
    <div className="mx-auto flex max-w-xl gap-2">
      <ContactButton channel="kakao" compact className="min-w-0 flex-[3] px-3" />
      <ContactButton channel="phone" compact className="min-w-0 flex-[2] px-3" />
    </div>
  );
}

/**
 * 모바일 하단 고정 상담 바. md 이상에서는 헤더의 CTA로 대체됩니다.
 * 같은 마크업의 보이지 않는 자리 표시 요소를 문서 흐름에 두어,
 * 글자 크기 확대 등으로 바 높이가 바뀌어도 마지막 콘텐츠가 가려지지 않게 합니다.
 */
export function MobileContactBar() {
  return (
    <>
      <div aria-hidden="true" inert className={cn(barClass, "invisible border-transparent")}>
        <BarButtons />
      </div>
      <aside
        aria-label="상담 바로가기"
        className={cn(
          barClass,
          "fixed inset-x-0 bottom-0 z-50 shadow-[0_-4px_16px_rgba(15,39,71,0.08)] backdrop-blur",
        )}
      >
        <BarButtons />
      </aside>
    </>
  );
}
