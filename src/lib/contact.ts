import { siteConfig } from "@/config/site";

/**
 * 카카오톡 링크는 https 이면서 kakao.com 계열 주소일 때만 사용합니다.
 * 비어 있거나 형식이 맞지 않으면 null을 반환해 잘못된 링크가 만들어지지 않게 합니다.
 */
export function getKakaoHref(url: string = siteConfig.contact.kakaoUrl): string | null {
  const value = url.trim();
  if (!value) return null;

  try {
    const parsed = new URL(value);
    const isKakaoHost =
      parsed.hostname === "kakao.com" || parsed.hostname.endsWith(".kakao.com");
    return parsed.protocol === "https:" && isKakaoHost ? parsed.toString() : null;
  } catch {
    return null;
  }
}

export type PhoneContact = {
  display: string;
  href: string;
};

/**
 * 화면 표시 번호와 tel: 링크를 같은 값에서 만들어 두 번호가 어긋나지 않게 합니다.
 */
export function getPhoneContact(phone: string = siteConfig.contact.phone): PhoneContact | null {
  const display = phone.trim();
  if (!display) return null;

  const digits = display.replace(/[^\d+]/g, "");
  if (!/^\+?\d{8,13}$/.test(digits)) return null;

  return { display, href: `tel:${digits}` };
}

/** 개발 모드 안내에 표시할 미설정·오류 항목 목록 */
export function getConfigIssues(): string[] {
  const issues: string[] = [];
  const { contact, siteUrl, privacy, footer } = siteConfig;

  if (!contact.kakaoUrl.trim()) {
    issues.push("contact.kakaoUrl: 카카오톡 상담 URL이 비어 있어 버튼이 비활성화됩니다.");
  } else if (!getKakaoHref()) {
    issues.push("contact.kakaoUrl: https://*.kakao.com 형식이 아니어서 링크를 만들지 않았습니다.");
  }

  if (!contact.phone.trim()) {
    issues.push("contact.phone: 전화번호가 비어 있어 전화 버튼이 비활성화됩니다.");
  } else if (!getPhoneContact()) {
    issues.push("contact.phone: 전화번호 형식이 올바르지 않아 링크를 만들지 않았습니다.");
  }

  if (!siteUrl.trim()) {
    issues.push("siteUrl: 공개 도메인이 없어 canonical·og:image·검색 노출 설정을 생략했습니다.");
  }

  if (!privacy.enabled) {
    issues.push("privacy.enabled: 개인정보 처리방침이 확정되지 않아 링크와 페이지를 숨겼습니다.");
  }

  if (!footer.complianceNumber.trim()) {
    issues.push("footer.complianceNumber: 광고 심의·내부 승인 번호가 비어 있습니다.");
  }

  return issues;
}
