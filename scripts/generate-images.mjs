// 시안용 프로필 플레이스홀더와 링크 미리보기(Open Graph) 이미지를 생성합니다.
// 이름·문구는 src/config/site.ts 에서 읽어 오므로, 문구를 바꾼 뒤 `npm run generate:images`를 다시 실행하세요.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import sharp from "sharp";
import { ImageResponse } from "next/og.js";

import { siteConfig } from "../src/config/site.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/images");
const fontDir = path.join(root, "node_modules/pretendard/dist/public/static");

await mkdir(outDir, { recursive: true });

// 1) 프로필 플레이스홀더: 실제 사진이 아님을 알 수 있는 단순 실루엣
const placeholderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
  <rect width="640" height="640" fill="#e7edf5"/>
  <circle cx="320" cy="250" r="110" fill="#b7c6d9"/>
  <path d="M110 640c0-120 94-210 210-210s210 90 210 210z" fill="#b7c6d9"/>
</svg>`;
await sharp(Buffer.from(placeholderSvg))
  .webp({ quality: 80 })
  .toFile(path.join(outDir, "profile-placeholder.webp"));

// 2) Open Graph 이미지 (1200×630)
const { person, metadata } = siteConfig;
const [regular, bold] = await Promise.all([
  readFile(path.join(fontDir, "Pretendard-Regular.otf")),
  readFile(path.join(fontDir, "Pretendard-Bold.otf")),
]);

const og = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 96px",
        background: "#0f2747",
        color: "#ffffff",
        fontFamily: "Pretendard",
      },
    },
    h("div", { style: { fontSize: 34, color: "#b7c6d9" } }, person.affiliation),
    h("div", { style: { fontSize: 64, fontWeight: 700, marginTop: 12 } }, person.name),
    h(
      "div",
      { style: { fontSize: 58, fontWeight: 700, marginTop: 48, lineHeight: 1.3 } },
      person.headline,
    ),
    h(
      "div",
      { style: { fontSize: 30, marginTop: 28, color: "#dce3ec", lineHeight: 1.5 } },
      metadata.ogDescription,
    ),
    h("div", {
      style: { position: "absolute", left: 96, bottom: 64, width: 120, height: 10, background: "#fee500" },
    }),
  ),
  {
    width: metadata.ogImage.width,
    height: metadata.ogImage.height,
    fonts: [
      { name: "Pretendard", data: regular, weight: 400, style: "normal" },
      { name: "Pretendard", data: bold, weight: 700, style: "normal" },
    ],
  },
);
await writeFile(path.join(outDir, "og-image.png"), Buffer.from(await og.arrayBuffer()));

console.log("생성 완료: public/images/profile-placeholder.webp, public/images/og-image.png");
