import { KAKAO_JS_KEY, KAKAO_SHARE_ORIGIN } from "@/config/kakao";
import { siteConfig } from "@/config/site";

/** 등록 도메인 기준 https 절대 URL */
export function toShareUrl(path: string): string {
  return new URL(path, KAKAO_SHARE_ORIGIN).toString();
}

/**
 * SDK가 로드되어 있으면 한 번만 초기화합니다.
 * SDK가 아직 없거나 초기화에 실패하면 false를 반환하고, 예외는 밖으로 던지지 않습니다.
 */
export function ensureKakaoInitialized(): boolean {
  const kakao = typeof window === "undefined" ? undefined : window.Kakao;
  if (!kakao) return false;

  try {
    if (!kakao.isInitialized()) kakao.init(KAKAO_JS_KEY);
    return kakao.isInitialized();
  } catch {
    return false;
  }
}

function buildFeed(): KakaoFeedSettings {
  const { person, metadata, share } = siteConfig;
  const homeUrl = toShareUrl("/");

  return {
    objectType: "feed",
    content: {
      title: `${person.name} | ${person.affiliation}`,
      description: person.headline,
      imageUrl: toShareUrl(metadata.ogImage.src),
      imageWidth: metadata.ogImage.width,
      imageHeight: metadata.ogImage.height,
      link: { mobileWebUrl: homeUrl, webUrl: homeUrl },
    },
    buttons: share.cardButtons.map((button) => {
      const url = toShareUrl(button.path);
      return { title: button.title, link: { mobileWebUrl: url, webUrl: url } };
    }),
  };
}

export type ShareResult = "kakao" | "native" | "copied" | "cancelled" | "failed";

/**
 * 카카오톡 공유 → 기기 기본 공유창 → 링크 복사 순서로 시도합니다.
 * 카카오 공유는 등록 도메인에서만 동작하므로, 다른 주소(로컬·미리보기 배포)에서는 바로 대체 방법을 사용합니다.
 */
export async function shareSite(): Promise<ShareResult> {
  const onRegisteredDomain = window.location.origin === KAKAO_SHARE_ORIGIN;

  if (onRegisteredDomain && ensureKakaoInitialized()) {
    try {
      window.Kakao?.Share.sendDefault(buildFeed());
      return "kakao";
    } catch {
      // 아래 대체 방법으로 진행
    }
  }

  const url = toShareUrl("/");
  const { person } = siteConfig;

  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title: `${person.name} | ${person.affiliation}`, text: person.headline, url });
      return "native";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return "cancelled";
      // 공유창을 열 수 없으면 링크 복사로 진행
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "failed";
  }
}
