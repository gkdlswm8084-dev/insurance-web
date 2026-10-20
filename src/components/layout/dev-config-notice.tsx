import { siteConfig } from "@/config/site";
import { getConfigIssues } from "@/lib/contact";

/** 개발 서버에서만 미설정 항목을 화면 상단에 표시합니다. production 빌드에서는 렌더링되지 않습니다. */
export function DevConfigNotice() {
  if (process.env.NODE_ENV !== "development") return null;

  const issues = getConfigIssues();
  if (issues.length === 0) return null;

  console.warn(`[site config]\n- ${issues.join("\n- ")}`);

  return (
    <div role="note" className="border-b border-amber-300 bg-amber-50 px-5 py-3 text-sm text-amber-950">
      <p className="font-semibold">{siteConfig.ui.devNoticeTitle}</p>
      <ul className="mt-1 list-disc pl-5">
        {issues.map((issue) => (
          <li key={issue}>{issue}</li>
        ))}
      </ul>
      <p className="mt-1">수정 위치: src/config/site.ts</p>
    </div>
  );
}
