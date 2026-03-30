export type ContentType = "image-sequence" | "rich-text" | "video";

export type Category = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
  softColor: string;
};

export type VisualAsset = {
  thumbnailSrc: string;
  src?: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  emoji?: string;
  background: string;
  accent: string;
  foreground?: string;
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

export type ContentLevel = "beginner" | "intermediate";

export type ContentItem = {
  slug: string;
  title: string;
  category: string;
  contentType: ContentType;
  summary: string;
  coverImage: string;
  coverAsset: VisualAsset;
  publishedAt: string;
  level: ContentLevel;
  ageRange: string;
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
  thumbnailAsset: VisualAsset;
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
  },
  {
    slug: "aba-basics",
    name: "ABA 기초",
    description: "강화, 프롬프트, 소거 등 ABA 핵심 개념을 쉽게 풀어주는 입문 가이드",
    emoji: "📘",
    softColor: "#f0e6ff"
  }
];

export const contentItems: ContentItem[] = [
  {
    slug: "requesting-with-choice-board",
    title: "선택 보드로 요청하기 시작하기",
    category: "language",
    contentType: "image-sequence",
    level: "beginner",
    ageRange: "2-5세",
    summary: "말로 표현이 어려운 아이가 그림 선택판을 통해 원하는 것을 요청하도록 돕는 4단계 루틴입니다.",
    coverImage: "카드뉴스: 그림 선택판, 간식 요청, 칭찬 루틴",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/requesting-choice-board.svg",
      alt: "선택 보드와 요청 훈련 루틴을 표현한 더미 썸네일",
      eyebrow: "Card Story",
      title: "요청 훈련",
      description: "선택판, 즉시 강화, 짧은 모델링",
      badge: "언어 시작",
      emoji: "🗣️",
      background:
        "linear-gradient(135deg, rgba(255,245,239,1) 0%, rgba(255,225,209,1) 55%, rgba(255,205,176,1) 100%)",
      accent: "#ff6b2c",
      foreground: "#7a2e0f"
    },
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
    level: "beginner",
    ageRange: "3-6세",
    summary: "공놀이와 블록 놀이를 활용해 차례 지키기와 기다리기를 짧게 훈련하는 영상형 가이드입니다.",
    coverImage: "영상 가이드: 차례 지키기, 기다리기, 간단한 칭찬 문장",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/turn-taking-play.svg",
      alt: "차례 지키기 놀이를 표현한 더미 썸네일",
      eyebrow: "Video Guide",
      title: "차례 놀이",
      description: "기다리기, 번갈아 하기, 짧은 칭찬",
      badge: "사회성",
      emoji: "🤝",
      background:
        "linear-gradient(135deg, rgba(235,255,248,1) 0%, rgba(207,250,232,1) 52%, rgba(164,243,214,1) 100%)",
      accent: "#0f9f6e",
      foreground: "#065f46"
    },
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
    level: "beginner",
    ageRange: "3-7세",
    summary: "양치를 싫어하는 아이를 위해 과제를 작은 단계로 쪼개고 시각 단서를 붙이는 방법을 소개합니다.",
    coverImage: "아티클: 시각 스케줄, 단계 쪼개기, 성공 경험 쌓기",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/toothbrushing-routine.svg",
      alt: "양치 루틴 단계를 보여주는 더미 썸네일",
      eyebrow: "Article",
      title: "양치 루틴",
      description: "단계 쪼개기, 시각 단서, 성공 경험",
      badge: "일상생활",
      emoji: "🪥",
      background:
        "linear-gradient(135deg, rgba(255,251,214,1) 0%, rgba(254,240,138,1) 48%, rgba(253,224,71,1) 100%)",
      accent: "#c59b06",
      foreground: "#713f12"
    },
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
    level: "intermediate",
    ageRange: "2-10세",
    summary: "울음, 떼쓰기, 던지기 행동을 막는 대신 무엇을 하게 할지 정하는 대체 행동 설계 가이드입니다.",
    coverImage: "인포그래픽: 문제 행동 관찰, 기능 추정, 대체 행동 설계",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/replacement-behavior.svg",
      alt: "대체 행동 설계 흐름을 표현한 더미 썸네일",
      eyebrow: "Infographic",
      title: "대체 행동",
      description: "기능 관찰, 반응 설계, 일관된 강화",
      badge: "행동 관리",
      emoji: "🪄",
      background:
        "linear-gradient(135deg, rgba(236,248,255,1) 0%, rgba(186,230,253,1) 52%, rgba(125,211,252,1) 100%)",
      accent: "#0ea5e9",
      foreground: "#0c4a6e"
    },
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
    level: "intermediate",
    ageRange: "2-5세",
    summary: "에코익 연습을 놀이 중간에 짧게 넣어 자연스럽게 말 모방 빈도를 늘리는 방법입니다.",
    coverImage: "영상: 소리 모방, 즉시 강화, 짧은 반복",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/echoic-play.svg",
      alt: "따라 말하기 놀이를 표현한 더미 썸네일",
      eyebrow: "Play Loop",
      title: "소리 모방",
      description: "한 음절, 즉시 강화, 놀이 속 반복",
      badge: "언어 확장",
      emoji: "🎈",
      background:
        "linear-gradient(135deg, rgba(243,232,255,1) 0%, rgba(221,214,254,1) 52%, rgba(196,181,253,1) 100%)",
      accent: "#7c3aed",
      foreground: "#4c1d95"
    },
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
  },
  {
    slug: "what-is-aba",
    title: "ABA란 무엇인가요? 부모가 알아야 할 핵심",
    category: "aba-basics",
    contentType: "rich-text",
    level: "beginner",
    ageRange: "전 연령",
    summary: "ABA(응용행동분석)가 무엇이고, 왜 발달지연 아동에게 효과적인지 짧게 설명합니다.",
    coverImage: "아티클: ABA 정의, 핵심 원리, 가정에서의 적용",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/requesting-choice-board.svg",
      alt: "ABA 기초 개념을 설명하는 더미 썸네일",
      eyebrow: "Basics",
      title: "ABA 입문",
      description: "행동 관찰, 원인 분석, 체계적 교수",
      badge: "입문",
      emoji: "📘",
      background:
        "linear-gradient(135deg, rgba(240,230,255,1) 0%, rgba(216,200,255,1) 52%, rgba(192,170,255,1) 100%)",
      accent: "#7c3aed",
      foreground: "#4c1d95"
    },
    publishedAt: "2026.03.14",
    body: {
      intro:
        "ABA는 Applied Behavior Analysis의 약자로, 한국어로는 '응용행동분석'이라고 합니다. 행동의 원인을 관찰하고 환경을 조정해 바람직한 행동을 늘리는 과학적 접근법입니다.",
      sections: [
        {
          heading: "ABA의 핵심: 행동에는 이유가 있다",
          text: "아이가 하는 모든 행동에는 목적이 있습니다. 관심을 얻기 위해, 원하는 것을 요청하기 위해, 또는 싫은 상황을 피하기 위해 행동합니다. ABA는 이 목적을 파악한 뒤, 같은 목적을 더 적절한 방식으로 달성하도록 가르칩니다."
        },
        {
          heading: "집에서도 할 수 있나요?",
          text: "ABA는 전문 치료실에서만 하는 것이 아닙니다. 식사 시간, 놀이 시간, 외출 준비 등 일상 장면에서 부모가 직접 적용할 수 있는 간단한 원칙들이 있습니다. 이 포털에서는 그런 실천 중심의 가이드를 제공합니다."
        }
      ],
      tips: [
        "ABA는 벌을 주는 방법이 아닙니다. 바람직한 행동을 강화하는 데 초점을 둡니다.",
        "전문가의 도움과 함께 가정에서의 일관된 연습이 가장 효과적입니다.",
        "한 번에 여러 행동을 바꾸려 하지 말고, 하나씩 목표를 정하세요."
      ]
    }
  },
  {
    slug: "reinforcement-basics",
    title: "강화(Reinforcement)의 기본: 칭찬과 보상을 제대로 쓰는 법",
    category: "aba-basics",
    contentType: "image-sequence",
    level: "beginner",
    ageRange: "전 연령",
    summary: "ABA의 가장 중요한 도구인 '강화'가 무엇이고, 일상에서 어떻게 사용하는지 4단계로 알아봅니다.",
    coverImage: "카드뉴스: 강화 정의, 즉시 강화, 일관성 유지",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/turn-taking-play.svg",
      alt: "강화의 기본 원리를 설명하는 더미 썸네일",
      eyebrow: "Card Story",
      title: "강화 기초",
      description: "즉시 강화, 구체적 칭찬, 일관성",
      badge: "핵심 개념",
      emoji: "⭐",
      background:
        "linear-gradient(135deg, rgba(255,248,230,1) 0%, rgba(255,235,180,1) 52%, rgba(255,220,130,1) 100%)",
      accent: "#d97706",
      foreground: "#78350f"
    },
    publishedAt: "2026.03.13",
    body: {
      sections: [
        {
          title: "1. 강화란 '행동 직후에 좋은 결과를 주는 것'입니다",
          imageLabel: "Scene 01",
          alt: "아이가 요청한 직후 간식을 받는 장면",
          caption: "아이가 바람직한 행동을 했을 때, 그 직후에 아이가 좋아하는 결과를 제공하면 그 행동이 다시 일어날 가능성이 높아집니다. 이것이 '강화'입니다."
        },
        {
          title: "2. '잘했어'보다 '뭘 잘했는지' 말해주세요",
          imageLabel: "Scene 02",
          alt: "보호자가 구체적으로 칭찬하는 장면",
          caption: "'잘했어' 대신 '사과 달라고 말해줬구나, 잘했어!'처럼 어떤 행동이 좋았는지 구체적으로 알려주면 아이가 무엇을 반복해야 하는지 이해합니다."
        },
        {
          title: "3. 타이밍이 핵심: 3초 안에 강화하세요",
          imageLabel: "Scene 03",
          alt: "즉시 강화를 제공하는 타이밍 다이어그램",
          caption: "행동과 강화 사이의 시간이 짧을수록 아이는 '이 행동 때문에 좋은 결과가 왔구나'를 명확히 연결합니다. 가능하면 3초 안에 반응하세요."
        },
        {
          title: "4. 매번 같은 기준으로 강화하세요",
          imageLabel: "Scene 04",
          alt: "일관된 강화 기준을 보여주는 장면",
          caption: "어떤 날은 칭찬하고 어떤 날은 무시하면 아이가 혼란스러워합니다. 같은 행동에는 같은 반응을 일관되게 유지하는 것이 중요합니다."
        }
      ]
    }
  },
  {
    slug: "prompting-guide",
    title: "프롬프트(Prompt)란? 아이에게 힌트를 주는 기술",
    category: "aba-basics",
    contentType: "rich-text",
    level: "beginner",
    ageRange: "전 연령",
    summary: "아이가 새로운 행동을 배울 때 적절한 힌트(프롬프트)를 주고 점차 줄여가는 방법을 안내합니다.",
    coverImage: "아티클: 프롬프트 종류, 단계적 축소, 자립 유도",
    coverAsset: {
      thumbnailSrc: "/content-thumbnails/replacement-behavior.svg",
      alt: "프롬프트 기술을 설명하는 더미 썸네일",
      eyebrow: "Guide",
      title: "프롬프트",
      description: "힌트 단계, 점진적 축소, 자립 유도",
      badge: "핵심 기술",
      emoji: "👆",
      background:
        "linear-gradient(135deg, rgba(230,245,255,1) 0%, rgba(186,225,255,1) 52%, rgba(147,205,255,1) 100%)",
      accent: "#2563eb",
      foreground: "#1e3a5f"
    },
    publishedAt: "2026.03.11",
    body: {
      intro:
        "프롬프트는 아이가 아직 혼자 할 수 없는 행동을 할 수 있도록 도와주는 '힌트'입니다. 손을 잡아 이끌기, 시범 보이기, 말로 알려주기 등 다양한 형태가 있으며, 핵심은 아이가 점차 도움 없이 혼자 할 수 있도록 줄여가는 것입니다.",
      sections: [
        {
          heading: "프롬프트의 종류: 강한 힌트부터 약한 힌트까지",
          text: "신체적 프롬프트(손을 잡아 동작 유도), 시범 프롬프트(직접 보여주기), 시각 프롬프트(그림이나 사진으로 안내), 언어 프롬프트(말로 알려주기), 제스처 프롬프트(가리키기) 순으로 도움의 강도가 줄어듭니다. 아이의 현재 수준에 맞는 프롬프트부터 시작하세요."
        },
        {
          heading: "프롬프트 페이딩: 힌트를 줄여가는 과정",
          text: "프롬프트의 목적은 아이가 결국 혼자 할 수 있게 되는 것입니다. 처음에는 손을 잡아 도와주다가, 팔꿈치만 가볍게 밀고, 그 다음에는 가리키기만 하고, 마지막에는 아무 힌트 없이 스스로 하게 됩니다. 이 과정을 '페이딩'이라고 합니다."
        }
      ],
      tips: [
        "아이가 실패하기 전에 프롬프트를 주세요. 실패 경험이 쌓이면 시도 자체를 꺼리게 됩니다.",
        "같은 프롬프트를 너무 오래 유지하면 아이가 힌트에 의존하게 됩니다. 조금씩 줄여가세요.",
        "프롬프트 후 아이가 성공하면 바로 강화하세요. 힌트를 받았더라도 칭찬받을 자격이 있습니다."
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
    thumbnailAsset: {
      thumbnailSrc: "/content-thumbnails/app-hangul-keyboard.svg",
      alt: "한글 키보드 학습 앱 더미 썸네일",
      eyebrow: "Live App",
      title: "한글 입력",
      description: "큰 키보드, 요청 문장, 즉시 음성 피드백",
      badge: "실행 가능",
      emoji: "⌨️",
      background:
        "linear-gradient(135deg, rgba(242,245,255,1) 0%, rgba(221,229,255,1) 52%, rgba(191,219,254,1) 100%)",
      accent: "#315efb",
      foreground: "#1f3a8a"
    },
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
    thumbnailAsset: {
      thumbnailSrc: "/content-thumbnails/app-food-sort.svg",
      alt: "음식 분류 게임 앱 더미 썸네일",
      eyebrow: "Live App",
      title: "음식 분류",
      description: "드래그 앤 드롭, 범주화, 짧은 세션",
      badge: "추천 앱",
      emoji: "🍎",
      background:
        "linear-gradient(135deg, rgba(255,246,233,1) 0%, rgba(254,215,170,1) 52%, rgba(253,186,116,1) 100%)",
      accent: "#ea580c",
      foreground: "#7c2d12"
    },
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
    thumbnailAsset: {
      thumbnailSrc: "/content-thumbnails/app-emotion-matching.svg",
      alt: "감정 매칭 앱 더미 썸네일",
      eyebrow: "Coming Soon",
      title: "감정 매칭",
      description: "표정 카드, 상황 연결, 보호자 코칭",
      badge: "준비 중",
      emoji: "🙂",
      background:
        "linear-gradient(135deg, rgba(246,241,255,1) 0%, rgba(233,213,255,1) 52%, rgba(216,180,254,1) 100%)",
      accent: "#9333ea",
      foreground: "#581c87"
    },
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
    thumbnailAsset: {
      thumbnailSrc: "/content-thumbnails/app-routine-builder.svg",
      alt: "루틴 빌더 앱 더미 썸네일",
      eyebrow: "Coming Soon",
      title: "루틴 설계",
      description: "시각 스케줄, 완료 체크, 생활 루틴",
      badge: "준비 중",
      emoji: "🪥",
      background:
        "linear-gradient(135deg, rgba(240,253,250,1) 0%, rgba(167,243,208,1) 52%, rgba(110,231,183,1) 100%)",
      accent: "#059669",
      foreground: "#065f46"
    },
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

export function getContentLevelLabel(level: ContentLevel) {
  const labels: Record<ContentLevel, string> = {
    beginner: "입문",
    intermediate: "중급"
  };

  return labels[level];
}

export function getContentTypesForCategory(slug: string) {
  return Array.from(new Set(getContentByCategory(slug).map((item) => item.contentType)));
}
