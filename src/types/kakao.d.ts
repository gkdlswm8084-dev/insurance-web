// 카카오 JavaScript SDK 2.x 중 이 사이트가 사용하는 부분만 정의합니다.
// https://developers.kakao.com/docs/latest/ko/kakaotalk-share/js-link

type KakaoLink = {
  mobileWebUrl: string;
  webUrl: string;
};

type KakaoFeedSettings = {
  objectType: "feed";
  content: {
    title: string;
    description?: string;
    imageUrl: string;
    imageWidth?: number;
    imageHeight?: number;
    link: KakaoLink;
  };
  buttons?: { title: string; link: KakaoLink }[];
};

interface KakaoSDK {
  init(appKey: string): void;
  isInitialized(): boolean;
  Share: {
    sendDefault(settings: KakaoFeedSettings): void;
  };
}

interface Window {
  Kakao?: KakaoSDK;
}
