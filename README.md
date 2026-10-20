# 안재현 보험설계사 홈페이지

현대해상 보험설계사 안재현의 개인 소개 및 상담 연결용 단일 페이지 웹사이트입니다.
보험을 직접 판매하거나 가입·보험료 계산·보험금 판단을 처리하지 않으며, 방문자가 카카오톡 또는 전화로
상담을 시작하도록 돕는 것이 목적입니다.

> **배포 정책: 이 저장소는 배포하지 않습니다.** Vercel·Netlify 등 외부 배포, 운영 도메인 연결,
> 배포용 GitHub Actions 워크플로를 추가하지 않습니다. 로컬 개발 서버와 로컬 빌드만 사용합니다.

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router, 정적 렌더링) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 |
| UI 컴포넌트 | shadcn/ui (Accordion — 공식 CLI로 설치) |
| 아이콘 | Lucide Icons (`lucide-react`) |
| 폰트 | Pretendard (`next/font/local`로 self-host, SIL OFL 1.1) |

Motion 라이브러리는 검토 후 사용하지 않았습니다. 스크롤 등장 효과를 적용하면 JavaScript가 실행되기 전까지
카드 내용이 보이지 않는 문제가 있어, 콘텐츠를 항상 바로 읽을 수 있도록 하는 쪽을 택했습니다.

## 필요 환경

- Node.js **22.18 이상** (`scripts/`의 보조 스크립트가 TypeScript 설정 파일을 직접 읽습니다)
- npm 10 이상

## 설치 및 실행

```bash
npm install          # 의존성 설치
npm run dev          # 개발 서버 실행 → http://localhost:3000
```

### 검사 및 빌드

```bash
npm run typecheck    # TypeScript 검사 (라우트 타입 생성 포함)
npm run lint         # ESLint 검사
npm run build        # production 빌드
npm run verify:build # 빌드 결과물에 시안용 후기·빈 링크·undefined 노출이 없는지 검사
npm run check        # 위 네 가지를 순서대로 모두 실행
npm run start        # 빌드 결과를 로컬에서 실행 (배포 아님)
```

## 콘텐츠 수정 방법

**모든 문구와 연락처는 `src/config/site.ts` 한 파일에서 수정합니다.** 컴포넌트 파일을 고칠 필요가 없습니다.

| 항목 | 위치 (`siteConfig.`) |
| --- | --- |
| 이름·소속·헤드라인·소개 | `person` |
| 카카오톡 URL·전화번호·버튼 문구 | `contact` |
| 상담 철학 | `sections.philosophy` |
| 보험 점검 항목 | `sections.coverage.items` |
| 상담 절차 | `sections.process.steps` |
| FAQ | `sections.faq.items` |
| 고객 후기·사례 | `sections.testimonials.items` |
| 마지막 상담 안내 | `sections.contact` |
| 하단 운영자 안내·유의사항·심의 번호 | `footer` |
| 개인정보 처리방침 | `privacy` |
| 페이지 제목·설명·링크 미리보기 | `metadata` |
| 공개 도메인 | `siteUrl` |

### 연락처 변경

```ts
contact: {
  kakaoUrl: "https://open.kakao.com/o/xxxxxxx", // 또는 https://pf.kakao.com/_xxxxx
  phone: "010-1234-5678",
}
```

- 모든 카카오톡·전화 버튼(첫 화면, 본문, 마지막 안내, 모바일 하단 바, PC 헤더)이 이 값을 함께 사용합니다.
- `kakaoUrl`은 `https://`로 시작하는 `kakao.com` 계열 주소만 링크로 만듭니다.
- 화면에 보이는 번호와 `tel:` 링크는 같은 `phone` 값에서 만들어지므로 서로 어긋나지 않습니다.
- 값이 비어 있거나 형식이 맞지 않으면 링크를 만들지 않고 "준비 중" 상태의 비활성 버튼을 표시합니다.
- 개발 서버(`npm run dev`)에서는 비어 있는 설정이 화면 상단과 터미널에 경고로 표시됩니다.

> 저장소가 공개 상태라면 실제 전화번호·카카오톡 주소를 커밋하기 전에 공개해도 되는 정보인지 확인하세요.

### 이미지 교체

- **프로필 사진**: 사진 파일(권장: 정사각형, 640×640px 이상, WebP)을 `public/images/`에 넣고
  `person.profileImage.src`와 `alt`(예: `"보험설계사 안재현 프로필 사진"`)를 수정합니다.
  현재는 실제 사진이 아닌 실루엣 플레이스홀더입니다. 경로가 비어 있거나 이미지를 불러오지 못하면 이름 첫 글자로 대체됩니다.
- **링크 미리보기 이미지** (`public/images/og-image.png`, 1200×630): 설정 파일의 이름·문구로 만들어집니다.
  문구를 바꾼 뒤 `npm run generate:images`를 실행하면 다시 생성됩니다. 직접 만든 이미지로 바꿔도 됩니다.
- **파비콘**: `src/app/icon.svg`

### 고객 후기

- 실제 고객 후기·사례만 `sections.testimonials.items`에 넣고, 고객 동의·개인정보·사실관계·광고 규정
  검토가 끝난 항목만 `approvedForPublication: true`로 바꿉니다. 승인된 항목이 없으면 섹션이 표시되지 않습니다.
- 디자인 확인용 가상 사례는 `src/config/testimonials.sample.ts`에 있으며
  `npm run dev:samples`로 실행한 개발 서버에서만 "시안용 가상 사례" 표시와 함께 보입니다.
  production 빌드에는 포함되지 않으며, `npm run verify:build`가 이를 확인합니다.
  (`dev:samples`는 macOS·Linux 셸 기준입니다.)

### 공개 도메인과 링크 미리보기

공개 도메인이 확정되기 전까지 `siteUrl`은 빈 값으로 둡니다. 이때는 다음과 같이 동작합니다.

- canonical URL과 `og:image`(카카오톡 미리보기에 절대 URL이 필요함)를 만들지 않습니다.
- 검색 노출을 막는 `noindex, nofollow`를 설정합니다. 그래서 로컬 Lighthouse SEO 점수가 낮게 나옵니다.

`siteUrl`에 실제 도메인(예: `"https://example.com"`)을 넣으면 canonical, `og:url`, `og:image`가 자동으로
설정되고 `noindex`가 해제됩니다. 로컬 환경에서는 카카오톡 링크 미리보기 수집을 확인할 수 없으므로
공개 전에 [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing)로 확인해야 합니다.

## 폴더 구조

```text
src/
├── app/
│   ├── layout.tsx            # 폰트, 메타데이터, viewport
│   ├── page.tsx              # 섹션 조립
│   ├── globals.css           # 디자인 토큰 (네이비·화이트, 카카오 노랑)
│   ├── icon.svg
│   └── privacy/page.tsx      # privacy.enabled 가 true 일 때만 표시 (그 전엔 404)
├── components/
│   ├── layout/               # 헤더, 푸터, 모바일 하단 고정 바, 개발용 설정 안내
│   ├── sections/             # Hero, 상담 철학, 보험 점검, 진행 방법, FAQ, 후기, 마지막 안내
│   ├── common/               # 공통 연락 버튼, 섹션 제목, 아이콘 카드, 프로필 이미지
│   └── ui/                   # shadcn/ui 컴포넌트
├── config/
│   ├── site.ts               # ★ 문구·연락처 단일 설정 파일
│   └── testimonials.sample.ts# 개발 전용 가상 후기
├── lib/                      # 연락처 검증, 도메인, 후기 필터, 유틸리티
└── types/site.ts             # 설정 데이터 타입
scripts/
├── generate-images.mjs       # 프로필 플레이스홀더·OG 이미지 생성
└── verify-build-content.mjs  # 빌드 결과물 콘텐츠 검사
```

## 공개 전 확인 항목

아래 항목은 개발자가 추측해서 채우지 않았습니다. 공개하려면 운영자가 확인해야 합니다.

| 항목 | 현재 상태 |
| --- | --- |
| 카카오톡 상담 URL | 비어 있음 → 버튼 비활성 |
| 공개 전화번호 | 비어 있음 → 버튼 비활성 |
| 실제 프로필 사진·사용 권한 | 플레이스홀더 사용 중 |
| 소속 표기 "현대해상 보험설계사" | 실제 소속 확인 필요 (회사 로고는 사용하지 않음) |
| 회사명·브랜드 사용 지침 | 확인 필요 |
| 경력·자격 정보 | 게시하지 않음 |
| 고객 후기·사례 | 없음 → 섹션 숨김 |
| 상담 가능 지역 | 표기하지 않음 |
| 개인정보 처리방침 | 실제 운영 방식 확정 전 → 링크·페이지 숨김 |
| 공식 도메인 | 없음 → canonical·og:image 생략, noindex |
| 광고 심의·내부 승인 | 승인 전 → `footer.complianceNumber` 비어 있음 |
| 모든 문구(소개·철학·점검·절차·FAQ·하단 유의사항) | 초안. 실제 상담 방식과 일치하는지, 사내 심의 필요 여부 확인 |

이 사이트는 개인정보 입력 양식, 로그인, 데이터베이스, 분석·추적 스크립트를 포함하지 않습니다.
연락은 외부 카카오톡·전화 링크로만 시작됩니다.

## 검증 기록 (로컬)

- 360 / 390 / 768 / 1280px 폭에서 가로 스크롤, 버튼 텍스트 잘림, 하단 고정 바의 콘텐츠 가림이 없음을 Playwright(Chromium)로 확인
- 키보드로 FAQ 열기·닫기, 포커스 이동 확인 / 동작 줄이기 설정에서 콘텐츠 정상 표시
- 브라우저 콘솔 오류 없음 (개발 모드에서는 미설정 항목 경고만 의도적으로 출력)
- 로컬 Lighthouse(모바일, 개발 PC에서 측정한 참고치): Accessibility 100, Best Practices 100,
  Performance는 실제 네트워크 제한(devtools) 측정에서 91~93점, 시뮬레이션 측정에서 82~83점입니다.
  SEO 점수는 도메인이 정해지지 않아 의도적으로 설정한 `noindex` 때문에 낮습니다.
- iOS Safari·Android 실기기 검증은 하지 않았습니다. 공개 전에 실제 기기에서 하단 고정 바와 안전 영역을 확인해야 합니다.
