import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { getKakaoHref, getPhoneContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactButtonProps = {
  channel: "kakao" | "phone";
  /** compact: 모바일 하단 바·헤더용 짧은 문구 */
  compact?: boolean;
  /** 전화 버튼에 번호를 함께 표시합니다. */
  showNumber?: boolean;
  className?: string;
};

const baseClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold leading-tight text-center transition-colors";

const channelClass = {
  kakao: "bg-kakao text-kakao-foreground hover:bg-kakao-hover",
  phone: "border border-navy bg-white text-navy hover:bg-accent",
} as const;

const unavailableClass =
  "cursor-not-allowed border border-dashed border-muted-foreground/50 bg-muted text-muted-foreground";

/**
 * 모든 카카오톡·전화 CTA가 공유하는 버튼입니다.
 * 연락처가 비어 있거나 형식이 맞지 않으면 링크 대신 비활성 버튼을 렌더링합니다.
 */
export function ContactButton({
  channel,
  compact = false,
  showNumber = false,
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
          className={className}
        />
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClass, channelClass.kakao, className)}
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
        className={className}
      />
    );
  }

  return (
    <a
      href={phone.href}
      aria-label={`${labels.phoneShort} ${phone.display}`}
      className={cn(baseClass, channelClass.phone, className)}
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
    <button type="button" disabled className={cn(baseClass, unavailableClass, className)}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

/** 카카오톡·전화 버튼 묶음 */
export function ContactButtons({
  className,
  showNumber = false,
}: {
  className?: string;
  showNumber?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <ContactButton channel="kakao" className="sm:flex-[3]" />
      <ContactButton channel="phone" showNumber={showNumber} className="sm:flex-[2]" />
    </div>
  );
}
