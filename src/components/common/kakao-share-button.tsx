"use client";

import { Share2 } from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import { KAKAO_SDK } from "@/config/kakao";
import { siteConfig } from "@/config/site";
import { ensureKakaoInitialized, shareSite, type ShareResult } from "@/lib/kakao-share";
import { cn } from "@/lib/utils";

const MESSAGE_DURATION_MS = 4000;

/**
 * 카카오톡 공유하기(온라인 명함) 버튼.
 * SDK는 페이지가 모두 표시된 뒤(lazyOnload) 공식 CDN에서 불러오며,
 * 로드 전 클릭·로드 실패 시에도 기기 공유창이나 링크 복사로 대체합니다.
 */
export function KakaoShareButton({ className }: { className?: string }) {
  const { buttonLabel, messages } = siteConfig.share;
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const showMessage = (text: string) => {
    window.clearTimeout(timer.current);
    setMessage(text);
    timer.current = window.setTimeout(() => setMessage(""), MESSAGE_DURATION_MS);
  };

  const handleClick = async () => {
    if (busy) return;
    setBusy(true);
    let result: ShareResult;
    try {
      result = await shareSite();
    } catch {
      result = "failed";
    }
    setBusy(false);
    if (result === "copied") showMessage(messages.copied);
    else if (result === "failed") showMessage(messages.failed);
  };

  return (
    <div className={className}>
      <Script
        id="kakao-sdk"
        src={KAKAO_SDK.src}
        integrity={KAKAO_SDK.integrity}
        crossOrigin={KAKAO_SDK.crossOrigin}
        strategy="lazyOnload"
        onReady={() => {
          ensureKakaoInitialized();
        }}
      />
      <button
        type="button"
        onClick={handleClick}
        aria-busy={busy}
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-medium text-white/90",
          "underline-offset-4 transition-colors hover:text-white hover:underline",
        )}
      >
        <Share2 aria-hidden="true" className="size-4 shrink-0" />
        {buttonLabel}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-white/90">
        {message}
      </p>
    </div>
  );
}
