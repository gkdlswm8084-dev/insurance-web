"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * 프로필 사진을 표시하고, 경로가 비어 있거나 로딩에 실패하면 이름 첫 글자로 대체합니다.
 */
export function ProfileImage({
  src,
  alt,
  name,
  className,
}: {
  src: string;
  alt: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-full bg-accent ring-4 ring-white",
        className,
      )}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 320px, 128px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          role="img"
          aria-label={alt}
          className="flex size-full items-center justify-center text-4xl font-bold text-accent-foreground md:text-7xl"
        >
          {name.slice(0, 1)}
        </span>
      )}
    </div>
  );
}
