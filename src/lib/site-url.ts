import { siteConfig } from "@/config/site";

/** 공개 도메인이 확정된 경우에만 URL을 반환합니다. */
export function getSiteUrl(): URL | null {
  const value = siteConfig.siteUrl.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url : null;
  } catch {
    return null;
  }
}
