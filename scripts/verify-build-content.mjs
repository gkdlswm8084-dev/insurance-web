// production 빌드 결과물에 시안용 가상 콘텐츠나 잘못된 연락처 링크가 없는지 검사합니다.
// 사용법: npm run build && npm run verify:build
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { sampleTestimonials } from "../src/config/testimonials.sample.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDirs = [".next/server", ".next/static"].map((dir) => path.join(root, dir));
const textExtensions = new Set([".html", ".js", ".rsc", ".json", ".body", ".txt", ".css"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else if (textExtensions.has(path.extname(entry.name))) yield fullPath;
  }
}

const sampleMarkers = sampleTestimonials.flatMap((item) =>
  [item.title, item.content, item.sampleLabel].filter(Boolean),
);
const htmlRules = [
  { pattern: /href=""/, message: "빈 href 링크" },
  { pattern: /href="tel:"/, message: "번호 없는 tel: 링크" },
  { pattern: />\s*undefined\s*</, message: "화면에 노출된 undefined" },
  { pattern: />\s*null\s*</, message: "화면에 노출된 null" },
];

const problems = [];
let htmlCount = 0;

for (const dir of buildDirs) {
  try {
    for await (const file of walk(dir)) {
      const text = await readFile(file, "utf8");
      const rel = path.relative(root, file);

      for (const marker of sampleMarkers) {
        if (text.includes(marker)) problems.push(`${rel}: 시안용 가상 후기 포함 → "${marker.slice(0, 30)}…"`);
      }

      if (file.endsWith(".html")) {
        htmlCount += 1;
        for (const rule of htmlRules) {
          if (rule.pattern.test(text)) problems.push(`${rel}: ${rule.message}`);
        }
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`빌드 결과물이 없습니다: ${path.relative(root, dir)} — 먼저 npm run build 를 실행하세요.`);
      process.exit(1);
    }
    throw error;
  }
}

if (htmlCount === 0) {
  console.error("검사할 HTML 파일을 찾지 못했습니다.");
  process.exit(1);
}

if (problems.length > 0) {
  console.error(`빌드 콘텐츠 검사 실패 (${problems.length}건)`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`빌드 콘텐츠 검사 통과: HTML ${htmlCount}개, 시안용 후기·빈 링크·undefined 노출 없음`);
