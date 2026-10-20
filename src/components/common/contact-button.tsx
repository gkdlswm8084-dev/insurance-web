import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { getKakaoHref, getPhoneContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

/** light: 흰 배경 위 / dark: 코발트 배경 위 */
type Tone = "light" | "dark";

type ContactButtonProps = {
  channel: "kakao" | "phone";
  /** compact: 모바일 하단 바·헤더용 짧은 문구 */
  compact?: boolean;
  /** 전화 버튼에 번호를 함께 표시합니다. */
  showNumber?: boolean;
  tone?: Tone;
  className?: string;
};

const baseClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold leading-tight text-center transition-colors";

// 카카오톡 버튼은 배경과 관계없이 카카오 노란색을 유지합니다.
const kakaoClass = "bg-kakao text-kakao-foreground hover:bg-kakao-hover";

const phoneClass: Record<Tone, string> = {
  light: "border border-primary bg-white text-primary hover:bg-accent",
  dark: "border border-white bg-transparent text-white hover:bg-white/10",
};

const unavailableClass: Record<Tone, string> = {
  light: "cursor-not-allowed border border-dashed border-muted-foreground/50 bg-muted text-muted-foreground",
  dark: "cursor-not-allowed border border-dashed border-white/50 bg-white/10 text-white/85",
};

/**
 * 모든 카카오톡·전화 CTA가 공유하는 버튼입니다.
 * 연락처가 비어 있거나 형식이 맞지 않으면 링크 대신 비활성 버튼을 렌더링합니다.
 */
export function ContactButton({
  channel,
  compact = false,
  showNumber = false,
  tone = "light",
  className,
}: ContactButtonProps) {
  const { labels } = siteConfig.contact;
  const Icon = channel === "kakao" ? MessageCircle : Phone;
  const icon = <Icon aria-hidden="true" className="size-5 shrink-0" />;

  if (channel === "kakao") {
    const href = getKakaoHref();
    if (!href) {
      return (
        <UnavailableButton
          label={compact ? labels.kakaoUnavailableShort : labels.kakaoUnavailable}
          icon={icon}
          className={cn(unavailableClass[tone], className)}
        />
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClass, kakaoClass, className)}
      >
        {icon}
        <span>{compact ? labels.kakaoShort : labels.kakao}</span>
        <span className="sr-only">({labels.newWindow})</span>
      </a>
    );
  }

  const phone = getPhoneContact();
  if (!phone) {
    return (
      <UnavailableButton
        label={compact ? labels.phoneUnavailableShort : labels.phoneUnavailable}
        icon={icon}
        className={cn(unavailableClass[tone], className)}
      />
    );
  }

  return (
    <a
      href={phone.href}
      aria-label={`${labels.phoneShort} ${phone.display}`}
      className={cn(baseClass, phoneClass[tone], className)}
    >
      {icon}
      <span>{compact ? labels.phoneShort : labels.phone}</span>
      {showNumber && <span className="font-normal tabular-nums">{phone.display}</span>}
    </a>
  );
}

function UnavailableButton({
  label,
  icon,
  className,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" disabled className={cn(baseClass, className)}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

/** 카카오톡·전화 버튼 묶음 */
export function ContactButtons({
  className,
  showNumber = false,
  tone = "light",
}: {
  className?: string;
  showNumber?: boolean;
  tone?: Tone;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <ContactButton channel="kakao" tone={tone} className="sm:flex-[3]" />
      <ContactButton channel="phone" tone={tone} showNumber={showNumber} className="sm:flex-[2]" />
    </div>
  );
}
