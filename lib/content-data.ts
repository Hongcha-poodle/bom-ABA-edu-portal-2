export type ContentType = "image-sequence" | "rich-text" | "video";

export type Category = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
  softColor: string;
};

type ImageSequenceBody = {
  sections: Array<{
    title: string;
    imageLabel: string;
    alt: string;
    caption: string;
  }>;
};

type RichTextBody = {
  intro: string;
  sections: Array<{
    heading: string;
    text: string;
  }>;
  tips: string[];
};

type VideoBody = {
  videoTitle: string;
  videoUrl: string;
  summary: string;
  bulletPoints: string[];
};

type ContentBodyMap = {
  "image-sequence": ImageSequenceBody;
  "rich-text": RichTextBody;
  video: VideoBody;
};

export type ContentItem = {
  slug: string;
  title: string;
  category: string;
  contentType: ContentType;
  summary: string;
  coverImage: string;
  publishedAt: string;
} & (
  | { contentType: "image-sequence"; body: ImageSequenceBody }
  | { contentType: "rich-text"; body: RichTextBody }
  | { contentType: "video"; body: VideoBody }
);

export type AppItem = {
  slug: string;
  name: string;
  status: "live" | "coming-soon";
  shortDescription: string;
  features: string[];
  thumbnail: string;
  launchMode: "detail" | "placeholder";
  ageRange: string;
  sessionLength: string;
};

export const categories: Category[] = [
  {
    slug: "language",
    name: "언어",
    description: "말문 열기, 요청하기, 따라 말하기처럼 언어 발달을 돕는 콘텐츠",
    emoji: "🗣️",
    softColor: "#fae8ff"
  },
  {
    slug: "social",
    name: "사회성",
    description: "차례 지키기, 눈맞춤, 함께 놀이하기 같은 사회성 훈련 가이드",
    emoji: "🤝",
    softColor: "#ccfbea"
  },
  {
    slug: "daily-living",
    name: "일상생활",
    description: "식사, 옷 입기, 정리정돈 등 루틴을 만드는 생활 기술 콘텐츠",
    emoji: "🧺",
    softColor: "#fef9c3"
  },
  {
    slug: "behavior",
    name: "행동 관리",
    description: "문제 행동을 관찰하고 대체 행동을 가르치는 실천 중심 팁",
    emoji: "🪄",
    softColor: "#e0f2fe"
  }
];

export const contentItems: ContentItem[] = [
  {
    slug: "requesting-with-choice-board",
    title: "선택 보드로 요청하기 시작하기",
    category: "language",
    contentType: "image-sequence",
    summary: "말로 표현이 어려운 아이가 그림 선택판을 통해 원하는 것을 요청하도록 돕는 4단계 루틴입니다.",
    coverImage: "카드뉴스: 그림 선택판, 간식 요청, 칭찬 루틴",
    publishedAt: "2026.03.12",
    body: {
      sections: [
        {
          title: "1. 두 개의 선택지만 먼저 보여주세요",
          imageLabel: "Scene 01",
          alt: "두 개의 간식 카드가 놓인 선택 보드",
          caption: "처음에는 선택지를 두 개만 제시해 아이가 부담 없이 고를 수 있도록 합니다."
        },
        {
          title: "2. 아이가 가리키면 즉시 말 모델을 주세요",
          imageLabel: "Scene 02",
          alt: "보호자가 '사과 주세요'라고 짧게 모델링하는 장면",
          caption: "아이가 카드를 고르면 '사과 주세요'처럼 짧은 요청 문장을 바로 들려줍니다."
        },
        {
          title: "3. 요청 직후 바로 강화물을 전달하세요",
          imageLabel: "Scene 03",
          alt: "요청 직후 간식을 전달받는 장면",
          caption: "요청과 결과가 바로 연결돼야 학습 속도가 빨라집니다."
        }
      ]
    }
  },
  {
    slug: "turn-taking-at-home",
    title: "집에서 시작하는 차례 지키기 놀이",
    category: "social",
    contentType: "video",
    summary: "공놀이와 블록 놀이를 활용해 차례 지키기와 기다리기를 짧게 훈련하는 영상형 가이드입니다.",
    coverImage: "영상 가이드: 차례 지키기, 기다리기, 간단한 칭찬 문장",
    publishedAt: "2026.03.10",
    body: {
      videoTitle: "차례 지키기 5분 루틴",
      videoUrl: "https://video.example.com/turn-taking",
      summary:
        "아이와 보호자가 번갈아 한 번씩 행동하는 구조를 명확히 만들면, 기다리기와 사회적 주의를 동시에 연습할 수 있습니다.",
      bulletPoints: [
        "놀이 시작 전에 '엄마 차례, OO 차례' 규칙을 짧게 보여줍니다.",
        "기다린 순간을 바로 칭찬해 차례 개념을 강화합니다.",
        "어려우면 1초 대기부터 시작해 점진적으로 늘립니다."
      ]
    }
  },
  {
    slug: "toothbrushing-routine",
    title: "양치 루틴을 5단계로 나누는 방법",
    category: "daily-living",
    contentType: "rich-text",
    summary: "양치를 싫어하는 아이를 위해 과제를 작은 단계로 쪼개고 시각 단서를 붙이는 방법을 소개합니다.",
    coverImage: "아티클: 시각 스케줄, 단계 쪼개기, 성공 경험 쌓기",
    publishedAt: "2026.03.08",
    body: {
      intro:
        "일상생활 기술은 한 번에 완성시키기보다, 작은 성공을 반복하면서 루틴으로 굳히는 접근이 효과적입니다.",
      sections: [
        {
          heading: "양치를 한 덩어리 과제로 보지 않기",
          text:
            "칫솔 잡기, 물 묻히기, 치약 짜기, 앞니 닦기, 헹구기처럼 단계를 쪼개면 아이가 어디에서 어려움을 느끼는지 명확해집니다."
        },
        {
          heading: "시각 단서와 고정 문장을 함께 사용하기",
          text:
            "같은 순서표와 같은 문장을 반복하면 예측 가능성이 높아져 저항이 줄어듭니다. 예: '칫솔 잡고, 치약 짜고, 앞니 닦기'."
        }
      ],
      tips: [
        "처음에는 전체 양치보다 1~2단계 성공을 목표로 잡습니다.",
        "완료 직후 좋아하는 활동으로 자연스럽게 전환합니다.",
        "매번 다른 설명보다 같은 표현을 반복해 주세요."
      ]
    }
  },
  {
    slug: "replacement-behavior-basics",
    title: "문제 행동 대신 대체 행동을 가르치는 기본",
    category: "behavior",
    contentType: "rich-text",
    summary: "울음, 떼쓰기, 던지기 행동을 막는 대신 무엇을 하게 할지 정하는 대체 행동 설계 가이드입니다.",
    coverImage: "인포그래픽: 문제 행동 관찰, 기능 추정, 대체 행동 설계",
    publishedAt: "2026.03.06",
    body: {
      intro:
        "행동을 줄이는 것만으로는 충분하지 않습니다. 아이가 같은 목적을 더 적절한 방식으로 달성할 수 있어야 행동이 실제로 바뀝니다.",
      sections: [
        {
          heading: "행동의 기능부터 추정하기",
          text:
            "주의를 받기 위한 행동인지, 회피를 위한 행동인지, 원하는 것을 얻기 위한 행동인지 먼저 추정해야 대체 행동을 맞출 수 있습니다."
        },
        {
          heading: "아이에게 가능한 반응이어야 합니다",
          text:
            "대체 행동은 현재 발달 수준에서 바로 시도 가능한 행동이어야 합니다. 예를 들어 긴 문장보다 그림 카드나 한 단어 요청이 더 현실적일 수 있습니다."
        }
      ],
      tips: [
        "문제 행동이 나오기 쉬운 상황을 먼저 기록해 보세요.",
        "대체 행동이 나오면 즉시 같은 기능의 결과를 제공하세요.",
        "보호자와 치료사가 같은 반응 원칙을 공유해야 합니다."
      ]
    }
  },
  {
    slug: "echoic-imitation-play",
    title: "따라 말하기를 놀이로 연결하는 미니 루틴",
    category: "language",
    contentType: "video",
    summary: "에코익 연습을 놀이 중간에 짧게 넣어 자연스럽게 말 모방 빈도를 늘리는 방법입니다.",
    coverImage: "영상: 소리 모방, 즉시 강화, 짧은 반복",
    publishedAt: "2026.03.04",
    body: {
      videoTitle: "놀이 속 따라 말하기 루틴",
      videoUrl: "https://video.example.com/echoic",
      summary:
        "아이의 선호 활동 안에 소리 모방 기회를 넣으면 반복 부담을 줄이고 성공률을 높일 수 있습니다.",
      bulletPoints: [
        "블록을 쌓기 전에 한 음절 모방 기회를 넣습니다.",
        "성공 즉시 다음 놀이 순서로 넘어가 흐름을 끊지 않습니다.",
        "모방이 어려우면 입 모양 보기와 손짓 힌트를 함께 씁니다."
      ]
    }
  }
];

export const appItems: AppItem[] = [
  {
    slug: "sia-hangul-keyboard",
    name: "시아 한글 키보드",
    status: "live",
    shortDescription:
      "자모 인식과 단어 입력을 놀이처럼 익히는 한글 보조 키보드 앱입니다.",
    features: [
      "큰 터치 타깃과 명확한 음성 피드백",
      "자주 쓰는 요청 문장을 빠르게 구성",
      "보호자와 함께 연습하기 좋은 단계별 모드"
    ],
    thumbnail: "⌨️",
    launchMode: "detail",
    ageRange: "4세 이상",
    sessionLength: "5-10분"
  },
  {
    slug: "nyamnyam-food-sort",
    name: "냠냠 쩝쩝",
    status: "live",
    shortDescription:
      "음식 분류 게임으로 어휘 확장과 범주화 학습을 돕는 인터랙티브 앱입니다.",
    features: [
      "음식 카테고리별 드래그 앤 드롭 활동",
      "정답 시 시각·청각 강화 제공",
      "짧은 세션으로 집중력 부담 최소화"
    ],
    thumbnail: "🍎",
    launchMode: "detail",
    ageRange: "3-7세",
    sessionLength: "3-7분"
  },
  {
    slug: "emotion-matching-lab",
    name: "감정 매칭 연구소",
    status: "coming-soon",
    shortDescription:
      "표정과 상황을 연결해 감정 이해를 확장하는 사회성 학습 앱입니다.",
    features: [
      "표정-상황 매칭 카드",
      "보호자 코칭 스크립트 제공",
      "단계별 난이도 조절"
    ],
    thumbnail: "🙂",
    launchMode: "placeholder",
    ageRange: "5세 이상",
    sessionLength: "5분"
  },
  {
    slug: "routine-builder",
    name: "루틴 빌더",
    status: "coming-soon",
    shortDescription:
      "아침 준비와 취침 루틴을 시각 스케줄로 만드는 생활기술 지원 앱입니다.",
    features: [
      "루틴 카드 커스터마이징",
      "완료 체크 보상 시스템",
      "가정용 시각 스케줄 출력"
    ],
    thumbnail: "🪥",
    launchMode: "placeholder",
    ageRange: "4세 이상",
    sessionLength: "상시 사용"
  }
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getContentBySlug(slug: string) {
  return contentItems.find((item) => item.slug === slug);
}

export function getAppBySlug(slug: string) {
  return appItems.find((item) => item.slug === slug);
}

export function getContentByCategory(slug: string) {
  return contentItems.filter((item) => item.category === slug);
}

export function getRelatedContent(currentSlug: string, category: string) {
  return contentItems.filter((item) => item.slug !== currentSlug && item.category === category).slice(0, 3);
}

export function getContentTypeLabel(type: ContentType) {
  const labels: Record<ContentType, string> = {
    "image-sequence": "카드뉴스",
    "rich-text": "아티클",
    video: "영상"
  };

  return labels[type];
}

export function getContentTypesForCategory(slug: string) {
  return Array.from(new Set(getContentByCategory(slug).map((item) => item.contentType)));
}
