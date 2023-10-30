const PROJECTS = {
  dadok: {
    title: "다독다독",
    introduction: "책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼",
    skills: ["TypeScript", "Next.js", "Tanstack-Query", "Chakra UI"],
    sideInformations: ["2023.02 -", "Team / 프론트엔드 4명, 백엔드 3명"],
    descriptions: [
      `"유명한 개발자의 책장에는 어떤 책들이 꽂혀있을까?" 라는 질문에서 시작된 프로젝트예요.
        사람들은 특정 분야에 대한 깊은 이해가 필요할 때 책을 찾곤 합니다.
        그리고 한 사람의 책장에는 그 사람이 살면서 쌓아 온 경험과 인사이트들이 담겨있다고 생각해요.`,
      `다독다독을 통해 전문가가 공유한 책들과 코멘트를 확인할 수 있어요.
        그리고 독서 모임을 통해 다양한 사람들과 함께 인사이트를 얻어갈 수도 있어요.`,
    ],
    links: {
      webpage: "https://dev.dadok.site/",
      github: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE",
      video: "https://www.youtube.com/watch?v=wzx3kuox3ZI",
    },
  },
  pomo: {
    title: "뽀모",
    introduction:
      "관심사가 비슷한 사람들끼리 모여 소통하며, 뽀모도로 기법을 통해 집중할 수 있는 환경을 제공하는 웹 서비스",
    skills: ["TypeScript", "Next.js", "Emotion"],
    sideInformations: ["2023.01", "Team / 프론트엔드 5명"],
    descriptions: [
      `🍅 뽀모 = 함께하는 👥 + 뽀모도로 ⏰`,
      `뽀모도로 기법은 시간관리 기법 중 하나로, 25분 집중시간을 가지고 5분 휴식을 반복합니다.`,
      `많은 사람들이 작업의 효율을 높이기 위해 뽀모도로 기법을 사용해요. 여기에 동료까지 있다면 더 좋은 시너지 효과가 날 거예요.
        그래서 비슷한 작업을 하는 사람들이 모여 뽀모도로를 할 수 있는 서비스 "뽀모"가 탄생하게 되었어요!`,
    ],
    links: {
      github: "https://github.com/prgrms-fe-devcourse/FEDC3_POMO_DY",
    },
  },
  collusic: {
    title: "Collusic",
    introduction:
      "여러 작곡가들이 음원을 붙여 나가는 릴레이 작곡 웹 애플리케이션",
    skills: ["TypeScript", "React", "Recoil"],
    sideInformations: [
      "2022",
      "Team / 프론트엔드 2명, 백엔드 2명, 디자이너 1명",
    ],
    descriptions: [
      {
        text: `<놀면 뭐하니? 유플래쉬>에서 영감을 받아 시작하게 된 프로젝트예요.`,
        href: "https://namu.wiki/w/%EC%9C%A0%ED%94%8C%EB%9E%98%EC%89%AC",
      },
      `사용자는 자신의 음원을 등록하거나 누군가의 음원 위에 자신의 음원을 붙이는 과정을 통해 하나의 완성도 있는 곡을 탄생시킬 수 있습니다.`,
    ],
    links: {
      github: "https://github.com/Collusic/collusic-new",
    },
  },
  ontheway: {
    title: "가는길에",
    introduction:
      "인공지능 기반 여행지 추천 및 여행 일정 스케줄링 웹 애플리케이션",
    skills: ["JavaScript", "Flask"],
    sideInformations: ["2020.09 - 2021.06", "Team / 개발자 3명, 디자이너 1명"],
    descriptions: [
      `"가고 싶은 곳은 많은데, 어디서부터 어떻게 가야 가장 효율적일까? 이 장소 주변에 또 가볼만한 곳이 없을까?"`,
      `여행을 계획하며 이런 고민들 자주 하지 않으셨나요?`,
      `사용자의 관심 장소들을 바탕으로 추가적인 맞춤형 여행지를 추천하고, 여행지 간 이동거리를 고려하여 여행 일정을 스케줄링해 주는 것이 주요 기능이에요.`,
    ],
    links: {
      github: "https://github.com/gxxrxn/Ontheway",
      video: "http://swfestival2021.kr/univ/exclncDtl?univId=28",
    },
  },
};

export default PROJECTS;
