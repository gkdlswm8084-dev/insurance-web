/**
 * 카카오 JavaScript SDK 설정 상수 (카카오톡 공유하기 전용).
 *
 * - JavaScript 키는 브라우저에 공개되는 값이며, 카카오 개발자 콘솔에 등록된 도메인에서만 동작합니다.
 * - SDK 버전·integrity 값을 바꿀 때는 카카오 공식 문서의 script 태그 값을 그대로 옮겨 적습니다.
 */
export const KAKAO_JS_KEY = "9083d206d804f22655fdc317858abb7a";

export const KAKAO_SDK = {
  src: "https://t1.kakaocdn.net/kakao_js_sdk/2.8.4/kakao.min.js",
  integrity: "sha384-BGX7Wb16GmRFagri4bLJV2DgipVZaU2AI812GZtHtHzzDQJnfHasDXN5houxv45w",
  crossOrigin: "anonymous",
} as const;

/** 카카오 개발자 콘솔에 등록한 도메인(SDK 도메인·제품 링크 관리). 공유 링크는 모두 이 주소 기준 절대 경로입니다. */
export const KAKAO_SHARE_ORIGIN = "https://insurance-web-smoky.vercel.app";
