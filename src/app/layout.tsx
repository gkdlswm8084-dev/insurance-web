import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

// Pretendard (SIL OFL 1.1) — KS X 1001 한글 2,350자 서브셋 정적 폰트(400·700)를 self-host 합니다.
// display: optional — 느린 네트워크의 첫 방문에서는 시스템 한글 폰트로 바로 표시하고(글꼴 교체로 인한
// 재렌더링·LCP 지연 방지), 캐시된 이후 방문부터 Pretendard를 사용합니다.
const pretendard = localFont({
  src: [
    {
      path: "../../node_modules/pretendard/dist/web/static/woff2-subset/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/pretendard/dist/web/static/woff2-subset/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "optional",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "Noto Sans KR",
    "sans-serif",
  ],
});

const { metadata: meta } = siteConfig;
const siteUrl = getSiteUrl();

// 공개 도메인이 확정되기 전에는 canonical·og:image(절대 URL 필요)를 만들지 않고 검색 노출도 막습니다.
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: meta.ogTitle,
    description: meta.ogDescription,
    ...(siteUrl && {
      url: "/",
      images: [
        {
          url: meta.ogImage.src,
          width: meta.ogImage.width,
          height: meta.ogImage.height,
          alt: meta.ogImage.alt,
        },
      ],
    }),
  },
  ...(siteUrl
    ? { metadataBase: siteUrl, alternates: { canonical: "/" } }
    : { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f2747",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
