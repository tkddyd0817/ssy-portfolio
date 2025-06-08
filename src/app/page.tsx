"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Head from "next/head";
import clsx from "clsx";
import AnimatedEmojiBackground from "@/sections/AnimatedEmojiBackground";
import HeroSection from "@/sections/HeroSection";
import AboutMeSection from "@/sections/AboutMeSection";
import ProjectAccordion from "@/sections/components/ProjectAccordion";
import ExperienceSection from "@/sections/ExperienceSection";

const heroImages = [
  { src: "/project1.jpg", alt: "프로젝트1" },
  { src: "/project2.jpg", alt: "프로젝트2" },
  { src: "/project3.jpg", alt: "프로젝트3" },
  { src: "/project4.jpg", alt: "프로젝트4" },
];

const projects = [
  {
    name: "HOLO",
    period: "2024.12 - 2025.02",
    desc: `● 프로젝트 소개: 1인가구를 위한 정보 제공 서비스, '나 HOLO 산다!'라는 슬로건에 맞게 1인가구, 자취생의 편리한 생활을 지원\n● 사용한 기술스택: Next.js, TypeScript, React, TanstackQuery, Zustand, Supabase, TailWind CSS, React Hook Form, zod, vercel, KakaoMap, Javascript, Open AI, Navigator, 청년정책API`,
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "TanstackQuery",
      "Zustand",
      "Supabase",
      "TailWind CSS",
      "React Hook Form",
      "zod",
      "vercel",
      "KakaoMap",
      "Javascript",
      "Open AI",
      "Navigator",
      "청년정책API",
    ],
    role: [
      "회원가입, 로그인, 소셜로그인, 마이페이지",
      "react-hook-form과 zod를 활용한 폼 관리로 유저의 회원가입 및 로그인 양식 실시간 유효성 검사",
      "소셜 로그인(Google, Kakao, Github): Supabase를 활용한 OAuth 2.0 인증",
      "TanstackQuery의 낙관적 업데이트 적용으로 게시물/프로필 정보 즉각 피드백 제공",
      "supabase.auth.signOut()을 통한 인증 세션 해제 및 로그아웃 기능 제공",
      "Supabase Admin API와 SERVICE_ROLE_KEY를 활용한 안전한 계정 삭제 (서버 환경 한정)",
      "스켈레톤 UI로 UX 편의성 및 사용자 경험 최적화",
    ],
    troubleshooting: [
      "모달 오작동 및 전역 상태관리로 인한 다른 모달 덮어쓰기: 각 모달에 타입 지정, React Query 상태 관리, 컨테이너-프레젠테이셔널 패턴 적용",
      "소셜 로그인 후 성공 모달이 즉시 표시되지 않음: useEffect 위치 이동, 의존성 배열 재검토로 필요한 상태 변화에만 반응하도록 수정",
    ],
    github: "https://github.com/tkddyd0817/HOLO",
    link: "https://holo-psi.vercel.app",
    images: ["/project1.jpg"],
  },
  {
    name: "Horoscope-Project(배포 중단상태입니다.)",
    period: "2024.12 - 2025.02",
    desc: `● 프로젝트 소개: 점성술과 별자리를 통해 일상에 재미와 통찰을 더하는 것을 목표로 합니다. 사용자는 오늘의 운세와 별자리 정보를 확인하고, 궁합과 덕담을 통해 사람들과 소통하며 자신만의 특별한 경험을 만들어갈 수 있습니다.\n● 사용한 기술스택: Next.js, TypeScript, React, TanstackQuery, Zustand, Supabase, TailWind CSS, vercel, ReactDayPicker`,
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "TanstackQuery",
      "Zustand",
      "Supabase",
      "TailWind CSS",
      "vercel",
      "ReactDayPicker",
    ],
    role: [
      "캘린더 폼을 이용한 유저의 별자리 정보와 일일/신년 운세 조회 및 저장 기능 구현",
      "react-day-picker로 사용자의 생년월일 입력 → 별자리 ID 계산 후 운세 페이지 이동",
      "Supabase로 테이블 데이터 조회 및 별자리 ID에 맞는 신년/일일 운세 출력",
      "선택한 운세를 Supabase에 저장, 저장 성공 시 공유 페이지(/share-result)로 리다이렉션",
    ],
    troubleshooting: [],
    github: "https://github.com/tkddyd0817/Horoscope-Project",
    link: "https://horoscope-project-abgu-git-dev-noonsaes-projects.vercel.app/",
    images: ["/project2.jpg"],
  },
  {
    name: "Riot-info",
    period: "2024.12 - 2024.12",
    desc: `● 프로젝트 소개: Riot사의 리그오브레전드 API를 활용하여 정보 제공 앱 만들기\n● 사용한 기술스택: Next.js, React, Typescript, Zustand, TanstackQuery, TailWind CSS, vercel`,
    stack: [
      "Next.js",
      "React",
      "Typescript",
      "Zustand",
      "TanstackQuery",
      "TailWind CSS",
      "vercel",
    ],
    role: [
      "리그오브레전드의 아이템/챔피언/로테이션 정보 제공",
      "스크롤에 반응하는 업버튼 구현",
      "3초마다 이미지가 변경되는 이미지 슬라이더 구현",
      "로테이션 컴포넌트에 Tanstack Query 상태관리 적용",
      "앱에 음악 추가(재생/일시정지/트랙 전환)",
    ],
    troubleshooting: [
      "하이드레이션 미스매치 에러: layout.tsx의 html 태그에 suppressHydrationWarning 속성 추가로 해결",
    ],
    github: "https://github.com/tkddyd0817/Riot-info",
    link: "https://riot-info-ssy.vercel.app/",
    images: ["/project3.jpg"],
  },
  {
    name: "서식여지도(배포 중단상태입니다.)",
    period: "2024.11 - 2024.12",
    desc: `● 프로젝트 소개: 서울을 방문하는 사람들에게 한국관광공사가 지정한 신뢰할 수 있는 맛집 정보를 제공합니다. 지도에서 맛집 정보를 제공받고 이미 방문했던 사람들의 리뷰를 확인하며 서울의 다양한 맛집을 탐방할 수 있습니다.\n● 사용한 기술스택: React, Zustand, TanstackQuery, Styled-components, Supabase, vercel, react-intersection-observer, React-Icon`,
    stack: [
      "React",
      "Zustand",
      "TanstackQuery",
      "Styled-components",
      "Supabase",
      "vercel",
      "react-intersection-observer",
      "React-Icon",
    ],
    role: [
      "Supabase API로 식당 평점 및 별점 매기는 커뮤니티 페이지",
      "useInfiniteQuery와 useInView로 무한 스크롤 구현",
      "React-Icon으로 식당 별점 기능 구현",
      "댓글 CRUD 기능",
      "스크롤 업버튼 구현",
    ],
    troubleshooting: [],
    github: "https://github.com/kangrankyu/outsourcing",
    link: "https://outsourcing-olive.vercel.app/",
    images: ["/project4.jpg"],
  },
];

const experiences = [
  {
    name: "바로인턴 프론트엔드 인턴",
    period: "2025.05 ~ 2025.06",
    desc: "실무 중심의 다양한 프로젝트에 참여하며 프론트엔드 역량을 키웠습니다.",
  },
  {
    name: "스파르타코딩클럽 내일배움캠프 React 7기 수료",
    period: "2024.09 ~ 2025.02",
    desc: "프론트엔드 개발에 필요한 JavaScript, React, Next.js 등 실무 기술을 9 to 9 집중 부트캠프에서 프로젝트와 함께 학습했습니다.",
  },
  {
    name: "내일배움캠프 최종 프로젝트 대상 & 성실상 수상",
    period: "2025.02",
    desc: `- Next.js, TypeScript, Supabase, TanstackQuery, Zustand 등을 활용한 최종 팀 프로젝트 'HOLO'에서 대상 수상
- TIL(오늘의 학습) 부분 2번째로 많은 양을 작성하여 성실상 수상`,
  },
];

export default function Home() {
  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        "bg-gradient-to-tr from-[#181828] via-[#23243a] to-[#0a0a1a] ",
        "text-white"
      )}
    >
      <Head>
        <title>신상용 의 포트폴리오</title>
      </Head>
      <Fullpage>
        <FullpageNavigation />{" "}
        {/* // ← 이 부분이 오른쪽 도트 네비게이션입니다! */}
        <FullPageSections>
          {/* 이목을 끌어주는 최상단섹션 */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-tr from-[#181828] via-[#23243a] to-[#0a0a1a]">
              <AnimatedEmojiBackground />

              <AnimatedEmojiBackground />

              {/* 중앙 텍스트 오버레이 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center">
                  Welcome! 👋
                  <span className="block text-blue-200 mt-1">
                    신상용의 프론트엔드 포트폴리오
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-200 text-center max-w-lg">
                  이 페이지는 저의 성장, 경험, 그리고 기술에 대한 열정을
                  담았습니다.
                </p>
              </div>
            </section>
          </FullpageSection>
          {/* Hero Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
              <HeroSection images={heroImages} />
            </section>
          </FullpageSection>
          {/* About Me Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
              <AboutMeSection />
            </section>
          </FullpageSection>
          {/* Projects Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full pt-16">
              <h2 className="text-2xl font-semibold  text-blue-200 mb-6">
                프로젝트{" "}
                <span className="text-base font-normal text-gray-400">
                  {projects.length}개
                </span>
              </h2>
              <ProjectAccordion projects={projects} />
            </section>
          </FullpageSection>
          {/* Experience Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="flex flex-col items-center justify-center h-full">
              <ExperienceSection experiences={experiences} />
            </section>
            
          </FullpageSection>
          {/* Footer Section */}
          <FullpageSection style={{ height: "100vh" }}>
            <footer className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-cyan-500 to-blue-600">
              <div className="max-w-4xl mx-auto px-4 text-center text-gray-800">
                <p className="text-2xl leading-relaxed whitespace-pre-line">
                  {/* <p className="text-lg leading-relaxed whitespace-pre-line"> */}
                  {`저의 포트폴리오를 찾아주셔서 감사합니다! 🙌
하루하루 더 발전 하는 프론트엔드 개발자 가 되겠습니다.
tkddyd1259@gmail.com 📧 언제든지 편하게 연락 주세요! 😊`}
                  {/* {`저의 포트폴리오 를 열람해 주셔서 감사합니다.
           하루하루 더 발전하고 싶은  개발자, 신상용입니다.`} */}
                </p>
                <div className="mt-8 flex justify-center gap-8 text-gray-800 font-semibold">
                  <a
                    href="mailto:tkddyd1259@gmail.com"
                    className="hover:underline"
                  >
                    이메일
                  </a>
                  <a
                    href="https://github.com/tkddyd0817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://tkddyd0817.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    블로그
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-700">© 2025</div>
              </div>
            </footer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
