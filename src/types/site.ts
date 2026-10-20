export type CoverageIcon = "file-search" | "users" | "heart-pulse";

export type CoverageItem = {
  title: string;
  description: string;
  icon: CoverageIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  id: string;
  title: string;
  content: string;
  /** 고객 동의·사실관계·광고 규정 검토가 끝난 경우에만 true로 바꿉니다. */
  approvedForPublication: boolean;
  /** 개발용 시안 데이터에만 사용합니다. 실제 후기에는 넣지 않습니다. */
  sampleLabel?: string;
};

export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

export type SectionHeadingContent = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type SiteConfig = {
  /** 실제 공개 도메인. 확정 전에는 빈 문자열로 둡니다. (예: "https://example.com") */
  siteUrl: string;

  person: {
    name: string;
    affiliation: string;
    headline: string;
    introduction: string;
    profileImage: {
      /** public 폴더 기준 경로. 빈 문자열이면 이니셜 대체 UI를 표시합니다. */
      src: string;
      alt: string;
    };
  };

  contact: {
    /** 카카오톡 채널 또는 오픈채팅 URL (https://*.kakao.com). 미확정 시 빈 문자열. */
    kakaoUrl: string;
    /** 화면에 표시하고 실제로 연결할 전화번호. 미확정 시 빈 문자열. */
    phone: string;
    labels: {
      kakao: string;
      kakaoShort: string;
      kakaoUnavailable: string;
      kakaoUnavailableShort: string;
      phone: string;
      phoneShort: string;
      phoneUnavailable: string;
      phoneUnavailableShort: string;
      newWindow: string;
    };
  };

  navigation: { label: string; href: string }[];

  sections: {
    philosophy: SectionHeadingContent & {
      paragraphs: string[];
    };
    coverage: SectionHeadingContent & {
      items: CoverageItem[];
    };
    process: SectionHeadingContent & {
      steps: ProcessStep[];
    };
    faq: SectionHeadingContent & {
      items: FAQItem[];
    };
    testimonials: SectionHeadingContent & {
      items: TestimonialItem[];
    };
    contact: {
      title: string;
      paragraphs: string[];
    };
  };

  footer: {
    /** 운영 주체를 밝히는 안내 문구 */
    operatorNotice: string;
    disclaimers: string[];
    /** 광고 심의필 번호 등. 승인 전에는 빈 문자열로 두면 표시되지 않습니다. */
    complianceNumber: string;
  };

  privacy: {
    /** 실제 운영 방식에 맞는 방침이 확정되었을 때만 true로 바꿉니다. */
    enabled: boolean;
    href: string;
    linkLabel: string;
    title: string;
    sections: PolicySection[];
  };

  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  };

  ui: {
    skipToContent: string;
    devNoticeTitle: string;
  };
};
