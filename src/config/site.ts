import type { SiteConfig } from "../types/site";

/**
 * 홈페이지의 문구·연락처·정책 정보를 관리하는 단일 설정 파일입니다.
 *
 * - 확인되지 않은 정보(연락처, 경력, 후기, 도메인 등)는 채우지 않습니다.
 * - 아래 문구는 초안이며, 공개 전 운영자의 검토와 필요한 사내 심의를 거쳐야 합니다.
 */
export const siteConfig: SiteConfig = {
  siteUrl: "",

  person: {
    name: "안재현",
    affiliation: "현대해상 보험설계사",
    headline: "내 보험, 제대로 알고 계신가요?",
    introduction:
      "이미 가입한 보험부터 앞으로 필요한 보장까지, 현재 상황을 살펴보고 이해하기 쉽게 안내해 드립니다.",
    profileImage: {
      src: "/images/profile-placeholder.webp",
      alt: "프로필 사진 준비 중",
    },
  },

  contact: {
    kakaoUrl: "",
    phone: "",
    labels: {
      kakao: "카카오톡으로 상담하기",
      kakaoShort: "카카오톡 상담",
      kakaoUnavailable: "카카오톡 상담 준비 중",
      kakaoUnavailableShort: "카카오톡 준비 중",
      phone: "전화로 상담하기",
      phoneShort: "전화 상담",
      phoneUnavailable: "전화 상담 준비 중",
      phoneUnavailableShort: "전화 준비 중",
      newWindow: "새 창에서 열림",
    },
  },

  navigation: [
    { label: "상담 방향", href: "#philosophy" },
    { label: "보험 점검", href: "#coverage" },
    { label: "진행 방법", href: "#process" },
    { label: "자주 묻는 질문", href: "#faq" },
  ],

  sections: {
    philosophy: {
      eyebrow: "상담 방향",
      title: "보험을 권하기 전에, 먼저 이해하는 것부터.",
      paragraphs: [
        "보험은 많이 가입하는 것보다, 내가 어떤 보장을 받고 있는지 아는 것이 먼저입니다.",
        "새로운 보험을 알아보기 전에 현재 가입한 보험의 내용을 살펴보고, 가족 상황과 앞으로의 계획을 함께 고려해 필요한 부분을 확인합니다.",
        "어려운 보험 용어는 쉽게 설명하고, 충분히 이해한 뒤 판단하실 수 있도록 돕겠습니다.",
      ],
    },

    coverage: {
      eyebrow: "보험 점검",
      title: "이런 내용을 함께 살펴봅니다",
      items: [
        {
          title: "기존 보험의 보장 내용 확인",
          description:
            "가입한 보험의 보장 항목과 보험료, 보장 기간 등을 확인하고 이해하기 쉽게 정리합니다.",
          icon: "file-search",
        },
        {
          title: "가족을 위한 사망 보장 점검",
          description:
            "가족 구성과 경제적 책임 등을 고려해 현재 보장 내용을 살펴봅니다.",
          icon: "users",
        },
        {
          title: "간병 및 노후 보장 확인",
          description:
            "향후 간병 비용과 노후 의료비에 대한 걱정을 바탕으로 관련 보장 내용을 확인합니다.",
          icon: "heart-pulse",
        },
      ],
    },

    process: {
      eyebrow: "진행 방법",
      title: "상담은 이렇게 진행됩니다",
      steps: [
        {
          title: "편하게 문의하기",
          description:
            "카카오톡이나 전화로 궁금한 점을 편하게 남겨 주세요. 가입한 보험이 정확히 기억나지 않아도 괜찮습니다.",
        },
        {
          title: "현재 상황 확인하기",
          description:
            "가입하신 보험의 보장 내용과 가족 상황, 걱정되는 부분을 함께 확인합니다.",
        },
        {
          title: "설명을 듣고 판단하기",
          description:
            "확인한 내용을 이해하기 쉽게 설명해 드립니다. 이후의 결정은 충분히 생각하신 뒤 직접 하시면 됩니다.",
        },
      ],
    },

    faq: {
      eyebrow: "자주 묻는 질문",
      title: "상담 전에 궁금하신 점",
      items: [
        {
          question: "기존 보험 점검만 받아도 되나요?",
          answer:
            "네, 가능합니다. 현재 가입하신 보험의 보장 내용을 확인하고 설명해 드리는 것부터 시작할 수 있습니다.",
        },
        {
          question: "상담 전에 무엇을 준비해야 하나요?",
          answer:
            "가입하신 보험의 보험회사와 상품명을 알고 계시면 도움이 됩니다. 정확히 기억나지 않으셔도 괜찮으며, 필요한 자료는 상담하면서 함께 안내해 드립니다.",
        },
        {
          question: "상담을 받으면 보험에 가입해야 하나요?",
          answer:
            "아니요. 상담을 받으셨다고 해서 보험에 가입하셔야 하는 것은 아닙니다. 설명을 충분히 들으신 뒤 필요 여부를 직접 판단하시면 됩니다.",
        },
        {
          question: "보험금 지급 여부도 확인할 수 있나요?",
          answer:
            "가입하신 보험의 보장 항목과 약관 내용을 함께 살펴보며 안내해 드릴 수 있습니다. 다만 실제 보험금 지급 여부와 금액은 보험회사의 심사를 거쳐 계약 조건과 개별 사실관계에 따라 결정되므로, 상담에서 확정해 드릴 수는 없습니다.",
        },
      ],
    },

    // 실제 고객 후기·사례만 넣고, 검토가 끝난 항목만 approvedForPublication: true 로 표시합니다.
    // 승인된 항목이 없으면 섹션 전체가 표시되지 않습니다.
    testimonials: {
      eyebrow: "상담 사례",
      title: "상담을 받아 보신 분들의 이야기",
      items: [],
    },

    contact: {
      title: "내 보험이 궁금하다면, 편하게 물어보세요.",
      paragraphs: [
        "현재 가입한 보험에서 확인하고 싶은 점부터 시작해 보세요.",
        "이해하기 쉬운 설명으로 상담을 도와드리겠습니다.",
      ],
    },
  },

  footer: {
    operatorNotice:
      "이 홈페이지는 보험설계사 안재현이 개인적으로 운영하는 상담 안내 페이지이며, 보험회사의 공식 홈페이지가 아닙니다.",
    disclaimers: [
      "보험 계약을 체결하기 전에 상품설명서와 약관을 반드시 확인하시기 바랍니다.",
      "보험금 지급 여부와 금액은 보험회사의 심사와 계약 조건에 따라 결정됩니다.",
    ],
    complianceNumber: "",
  },

  privacy: {
    enabled: false,
    href: "/privacy",
    linkLabel: "개인정보 처리방침",
    title: "개인정보 처리방침",
    sections: [],
  },

  metadata: {
    title: "안재현 | 보험 점검 상담",
    description:
      "기존 보험의 보장부터 사망 보장, 간병과 노후 준비까지. 안재현 보험설계사의 상담 안내를 확인해 보세요.",
    ogTitle: "내 보험, 제대로 알고 계신가요? | 안재현",
    ogDescription:
      "현재 가입한 보험부터 앞으로 필요한 보장까지, 이해하기 쉽게 안내해 드립니다.",
    ogImage: {
      src: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "안재현 보험설계사 — 내 보험, 제대로 알고 계신가요?",
    },
  },

  ui: {
    skipToContent: "본문으로 바로가기",
    devNoticeTitle: "개발 모드 안내: 아래 설정이 아직 비어 있습니다",
  },
};
