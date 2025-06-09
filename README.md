신상용 포트폴리오 (Next.js/React 기반)
신상용의 프론트엔드 포트폴리오는 최신 Next.js(App Router)와 React, TypeScript, Tailwind CSS, 다양한 애니메이션 라이브러리, 풀페이지 스크롤 등
실무에서 자주 쓰이는 기술을 총망라하여 구현한 개인 포트폴리오 웹사이트입니다.

🗂️ 프로젝트 구조 및 주요 파일 설명
Runtime Error


ChunkLoadError: Loading chunk app/page failed.
(error: http://localhost:3000/_next/static/chunks/app/page.js)

Call Stack
13

Show 8 ignore-listed frame(s)
__webpack_require__.f.j
.next/static/chunks/webpack.js (858:29)
<unknown>
.next/static/chunks/webpack.js (153:40)
Array.reduce
<anonymous> (0:0)
__webpack_require__.e
.next/static/chunks/webpack.js (152:67)
fn.e
.next/static/chunks/webpack.js (389:50)

이 에러는 Next.js(혹은 Webpack 기반 프론트엔드 앱)에서
코드 스플리팅된 JS 청크 파일(여기서는 app/page.js)을
브라우저가 정상적으로 불러오지 못할 때 발생하는 대표적인 에러입니다.
원인 정리
개발 서버가 재시작되었거나, 빌드가 바뀌었을 때
브라우저는 예전 JS 청크 파일을 캐싱하고 있는데,
서버는 새로운 빌드로 바뀌어서 해당 파일이 더 이상 존재하지 않음
→ 404 Not Found로 JS 파일을 못 불러옴
빌드/배포 중간에 파일이 손상되거나 누락된 경우
예: Vercel 등에서 배포 중간에 파일이 완전히 업로드되지 않음
브라우저 캐시 문제
오래된 JS 파일을 캐싱하고 있어서 새 빌드와 충돌
네트워크 문제
로컬 개발 환경에서 서버가 꺼졌다가 다시 켜진 경우 등
해결 방법
1. 브라우저 강력 새로고침 (캐시 무시)
Windows: Ctrl + F5
Mac: Cmd + Shift + R
또는 개발자도구(F12) → 우클릭 → "Empty Cache and Hard Reload"
2. 로컬 개발 서버 재시작
Apply
Run
dev
서버를 완전히 껐다가 다시 켜세요.
3. .next 폴더 삭제 후 재빌드
Apply
Run
dev
.next 폴더가 깨졌을 때도 이런 문제가 발생할 수 있습니다.
4. 배포 환경(Vercel 등)에서 발생한다면
Vercel에서 "Redeploy" 버튼을 눌러 다시 배포하세요.
배포가 끝난 후 브라우저 캐시를 비우고 새로고침
5. 라우팅/코드 스플리팅 관련 코드 확인
동적 import, lazy loading 등에서 경로가 잘못되었거나
빌드 시점에 파일이 누락된 경우도 드물게 있음
요약
90% 이상은 "브라우저 캐시 + 서버 재시작"으로 해결됩니다.
그래도 안 되면 .next 폴더 삭제 후 재빌드, 배포 재시도
배포 환경에서는 "Redeploy" 후 새로고침
이렇게 해도 문제가 계속된다면,
추가로 발생하는 에러 메시지나 상황을 알려주시면
더 구체적으로 도와드릴 수 있습니다!
import React from "react";

export default function BatteryIcon({ fill }: { fill: string }) {
  return (
    <svg
      data-slot="icon"
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="100%"
      height="100%"
    >
      <path d="M4.75 8a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-9.5Z"></path>
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M1 7.25A2.25 2.25 0 0 1 3.25 5h12.5A2.25 2.25 0 0 1 18 7.25v1.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v1.085A2.25 2.25 0 0 1 15.75 15H3.25A2.25 2.25 0 0 1 1 12.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75H3.25Z"
      ></path>
    </svg>
  );
}

import { motion } from "framer-motion";

export default function Description() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="text-2xl font-medium text-gray-300"
    >
      Frontend Developer
    </motion.span>
  );
}

import { motion } from "framer-motion";

export default function Initials() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex"
    >
      {["신", "상", "용"].map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            },
          }}
          className="text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(90,90,255,0.15)]"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import BatteryIcon from "./BatteryIcon";

export default function LoadingIndicator({ chargeLevel }: { chargeLevel: number }) {
  let fill = "#22c55e"; // green-500
  if (chargeLevel < 30) fill = "#f43f5e"; // red-500
  else if (chargeLevel < 70) fill = "#facc15"; // yellow-400

  return (
    <div className="relative w-32 h-16">
      <BatteryIcon fill="#e5e7eb" />
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${chargeLevel}%`,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <BatteryIcon fill={fill} />
      </div>
      <motion.span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {chargeLevel}%
      </motion.span>
    </div>
  );
}


import { motion } from "framer-motion";

export default function LoadingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ delay: 1.5, duration: 0.7 }}
      className="mt-10 text-base text-gray-500 dark:text-gray-400 tracking-wide"
    >
      포트폴리오에 입장 중...
    </motion.div>
  );
}


import Description from "@/intro/components/Description";
import Initials from "@/intro/components/Initials";
import LoadingIndicator from "@/intro/components/LoadingIndicator";
import LoadingMessage from "@/intro/components/LoadingMessage";
import React, { useState, useEffect } from "react";


export default function IntroSplash() {
  const [chargeLevel, setChargeLevel] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (chargeLevel < 100 && !isComplete) {
      const intervalId = setInterval(() => {
        setChargeLevel((prevLevel) => (prevLevel < 100 ? prevLevel + 1 : 100));
      }, 30);

      return () => clearInterval(intervalId);
    } else {
      setIsComplete(true);
      // TODO: 스플래시 화면 닫고, 포트폴리오 페이지 보여주는 로직
    }
  }, [chargeLevel, isComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-900 dark:bg-black text-white">
      <LoadingIndicator chargeLevel={chargeLevel} />
      <Initials />
      <Description />
      <LoadingMessage />
    </div>
  );
}


const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <IntroSplash />;

이렇게 인트로 페이지를 만들어서 사용중인데 왜 모바일 화면으로 보면 출력되는속도가 느려지는거야???

아주 좋은 질문입니다!
인트로(스플래시) 화면에서 모바일에서만 로딩 속도가 느려지는 현상의 원인과 해결법을 꼼꼼하게 설명드릴게요.
1. 현재 인트로 로직의 구조
IntroSplash는 chargeLevel(0~100%)을 30ms마다 1씩 증가시켜 100%까지 채움
→ 총 3초(= 30ms × 100) 동안 애니메이션 진행
동시에, Home 컴포넌트에서
setTimeout(() => setShowIntro(false), 3000)
→ 3초 후에 인트로를 닫고 본문을 보여줌
2. 모바일에서 느려지는 이유
1) requestAnimationFrame/interval의 실제 동작
모바일(특히 저사양 기기, 브라우저, 백그라운드 탭 등)에서는
setInterval, setTimeout, 애니메이션 프레임이
CPU/메모리 상황에 따라 느려질 수 있습니다.
30ms마다 1씩 증가시키는 setInterval이
실제로는 30ms보다 더 느리게 실행될 수 있습니다.
2) 렌더링/애니메이션 부하
GSAP, Framer Motion, SVG 등
여러 애니메이션이 동시에 동작하면
모바일에서 렌더링이 느려질 수 있습니다.
3) 브라우저/OS의 최적화
모바일 브라우저는 배터리 절약, 리소스 절약을 위해
setInterval, setTimeout을 느리게 실행할 수 있습니다.
3. 실제 현상
PC에서는 3초 내에 chargeLevel이 100%에 도달
모바일에서는 setInterval이 느려져서
3초가 지나도 chargeLevel이 100%에 도달하지 못함
→ 인트로가 더 오래 남아있거나, 애니메이션이 끊김
4. 해결 방법
A. setTimeout만 사용해서 인트로 종료 제어
chargeLevel과 상관없이
3초 후에 무조건 인트로를 닫도록 처리
B. chargeLevel 증가 속도 보정
setInterval 대신 requestAnimationFrame을 사용하거나
Date.now()로 실제 경과 시간을 기준으로 chargeLevel을 계산
C. chargeLevel과 showIntro를 완전히 분리
chargeLevel은 애니메이션용,
showIntro는 3초 후 무조건 false로
5. 실전 코드 예시 (모바일에서도 일정하게 동작)
Apply
}
그리고 Home에서:
Apply
;
6. 정리
모바일에서 setInterval/setTimeout이 느려지는 것은
브라우저/OS의 최적화 정책 때문입니다.
경과 시간(Date.now()) 기반으로 chargeLevel을 계산하면
PC/모바일 모두에서 일정한 속도로 인트로가 사라집니다.
인트로 종료(showIntro=false)는 3초 후 무조건 실행하는 것이 UX에 더 좋습니다.
이렇게 개선하면 모바일에서도 인트로가 일정한 속도로 자연스럽게 사라집니다!
추가로 궁금한 점이 있으면 언제든 질문해 주세요.
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
import ScrollToTopButton from "@/sections/components/ScrollToTopButton";
import IntroSplash from "@/intro/IntroSplash";
import { useEffect, useState } from "react";
import heroImages from "@/data/heroImages";
import projects from "@/data/projects";
import experiences from "@/data/experiences";


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <IntroSplash />;

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
        <FullpageNavigation />  {/* // ← 이 부분이 오른쪽 도트 네비게이션입니다! */}
        <FullPageSections>
          {/* 이목을 끌어주는 최상단섹션 */}
          <FullpageSection style={{ height: "100vh" }}>
            <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-tr from-[#181828] via-[#23243a] to-[#0a0a1a]">
              <AnimatedEmojiBackground density={2} />

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
                프로젝트
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
                  {`저의 포트폴리오를 찾아주셔서 감사합니다! 🙌
하루하루 더 발전 하는 프론트엔드 개발자 가 되겠습니다.
tkddyd1259@gmail.com 📧 언제든지 편하게 연락 주세요! 😊`}
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
      <ScrollToTopButton />
    </div>
  );
}

이컴포넌트가 모바일 화면(아이폰 12프로)으로 봤을때 한섹션이이 보이는게 아니라 다른 섹션부분이 보이네??

아주 좋은 관찰입니다!
모바일(특히 아이폰 12 프로)에서 한 섹션만 꽉 차게 보여야 하는데,
여러 섹션이 동시에 보이는 현상은
풀페이지(Fullpage) 레이아웃에서 자주 발생하는 문제입니다.
원인 분석
1. height: 100vh / h-screen의 한계
모바일 브라우저(특히 iOS Safari)는
100vh 또는 h-screen이
주소창/하단바를 포함한 전체 높이로 계산됩니다.
실제로는 화면에 보이는 영역보다 더 크거나 작게 렌더링되어
스크롤이 생기고,
여러 섹션이 동시에 보일 수 있습니다.
2. 풀페이지 라이브러리의 모바일 대응 미흡
@ap.cx/react-fullpage 등 일부 라이브러리는
PC 기준으로만 동작하고
모바일 뷰포트 변화(주소창 숨김/표시 등)에
완벽하게 대응하지 못할 수 있습니다.
3. 섹션 내부의 padding/margin/gap 등
내부 여백이 많으면
한 섹션이 화면을 꽉 채우지 못하고
아래 섹션이 일부 보일 수 있습니다.
해결 방법
1. height: 100vh 대신 JS로 동적 높이 적용
모바일에서 100vh 대신
window.innerHeight를 사용해
실제 보이는 높이만큼 섹션 높이를 동적으로 설정
예시 (커스텀 훅 사용):
Apply
>
2. 섹션 내부 여백/간격 줄이기
모바일에서 pt-16, mb-6, gap-8 등
여백이 너무 크면 한 섹션이 화면을 다 못 채움
→ 반응형으로 여백을 줄이세요.
3. 풀페이지 라이브러리의 모바일 옵션 확인
라이브러리에서 모바일 대응 옵션이 있는지 확인
(예: autoScrolling, fitToSection 등)
4. Tailwind 반응형 유틸리티 적극 활용
모바일에서만 여백/폰트/간격을 줄이기
(예: pt-4 sm:pt-16, mb-2 sm:mb-6 등)
실전 적용 예시
Apply
>
정리
모바일에서 여러 섹션이 보이는 이유:
100vh/h-screen의 한계 + 내부 여백 + 라이브러리 모바일 대응 미흡
해결법:
window.innerHeight로 동적 높이 적용
내부 여백/간격 반응형으로 줄이기
라이브러리 모바일 옵션 확인
이렇게 적용하면 아이폰 12 프로 등 모바일에서도
한 번에 한 섹션만 꽉 차게 보이게 만들 수 있습니다!
적용 중 궁금한 점이 있으면 언제든 질문해 주세요.
// 1. 커스텀 훅 추가
function useMobileVH() {
  const [vh, setVh] = useState('100vh');
  useEffect(() => {
    function updateVh() {
      setVh(`${window.innerHeight}px`);
    }
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);
  return vh;
}

// 2. 각 섹션에 적용
const vh = useMobileVH();

<FullpageSection style={{ height: vh }}>
  <section className="...">
    {/* ... */}
  </section>
</FullpageSection> 이걸따로 컴포넌트로 만들어서 분리해야돼??

아주 좋은 질문입니다!
꼭 별도의 컴포넌트로 분리할 필요는 없습니다.
하지만,
여러 곳(여러 Section)에서 반복적으로 사용할 예정이라면
아래처럼 커스텀 훅(useMobileVH)은 한 번만 정의해두고,
각 섹션에서 const vh = useMobileVH();로 불러와서
style={{ height: vh }}로 적용하면 됩니다.
1. 커스텀 훅은 한 번만 정의
예시:
src/hooks/useMobileVH.ts
Apply
}
2. 각 섹션에서 훅을 불러와서 사용
Apply
}
3. 컴포넌트로 분리하는 경우
만약 매번 style, className, children을 반복해서 작성하는 게 귀찮다면
아래처럼 래퍼 컴포넌트로 만들어서
내부에서 훅을 사용하게 할 수도 있습니다.
Apply
}
사용 예시:
Apply
>
4. 정리
훅은 한 번만 정의하고,
여러 섹션에서 불러와서 사용하면 됩니다.
컴포넌트로 분리하는 것은 선택사항입니다.
(코드가 더 깔끔해지고 싶을 때만!)
즉, 꼭 분리할 필요는 없고,
여러 곳에서 반복 사용한다면 분리해두면 관리가 더 편해집니다!
신상용 포트폴리오 (Next.js/React 기반)
신상용의 프론트엔드 포트폴리오는 최신 Next.js(App Router)와 React, TypeScript, Tailwind CSS, 다양한 애니메이션 라이브러리, 풀페이지 스크롤 등
실무에서 자주 쓰이는 기술을 총망라하여 구현한 개인 포트폴리오 웹사이트입니다.

🗂️ 프로젝트 구조 및 주요 파일 설명
my-app/
├── .next/ # Next.js 빌드 산출물 (자동 생성, 직접 수정 X)
├── node_modules/ # 설치된 npm 패키지 (자동 생성)
├── public/ # 정적 파일(이미지, 폰트, favicon 등)
│ └── ...jpg/png/svg # 프로젝트/프로필 이미지 등
├── src/
│ ├── app/ # Next.js App Router 엔트리 (라우팅, 레이아웃, 글로벌 스타일)
│ │ ├── favicon.ico # 파비콘
│ │ ├── globals.css # 전체 스타일
│ │ ├── layout.tsx # 전체 레이아웃(공통 헤더/푸터 등)
│ │ └── page.tsx # 메인 페이지 엔트리
│ ├── data/ # 주요 데이터(프로젝트, 경험, 히어로 이미지 등)
│ │ ├── experiences.ts # 경험/이력 데이터
│ │ ├── herolImages.ts # 히어로 섹션 이미지 데이터
│ │ └── projects.ts # 프로젝트 데이터
│ ├── intro/ # 인트로(로딩) 관련 컴포넌트
│ │ ├── components/
│ │ │ ├── BatteryIcon.tsx
│ │ │ ├── Description.tsx
│ │ │ ├── Initials.tsx
│ │ │ ├── LoadingIndicator.tsx
│ │ │ └── LoadingMessage.tsx
│ │ └── IntroSplash.tsx # 인트로 스플래시 전체
│ ├── sections/ # 주요 섹션별 컴포넌트 및 타입
│ │ ├── components/
│ │ │ ├── HeroImageSlider.tsx # 히어로 이미지 슬라이더
│ │ │ ├── ProjectAccordion.tsx # 프로젝트 아코디언
│ │ │ └── ScrollToTopButton.tsx # 스크롤 업 버튼
│ │ ├── types/ # 타입 정의 (타입스크립트)
│ │ │ ├── emoji.ts
│ │ │ ├── experience.ts
│ │ │ ├── HeroImageSliderProps.ts
│ │ │ ├── HeroSectionProps.ts
│ │ │ ├── Project.ts
│ │ │ └── ScrollToTopButtonProps.ts
│ │ ├── AboutMeSection.tsx # 자기소개 섹션
│ │ ├── AnimatedEmojiBackground.tsx # 배경 이모지 애니메이션
│ │ ├── ExperienceSection.tsx # 경험/이력 섹션
│ │ └── HeroSection.tsx # 히어로(메인) 섹션
├── .gitignore
├── eslint.config.mjs # ESLint 설정
├── next.config.ts # Next.js 설정
├── package.json # 프로젝트 의존성/스크립트
├── postcss.config.mjs # PostCSS 설정
├── react-fullpage.d.ts # 풀페이지 타입 선언(커스텀)
├── README.md # 프로젝트 설명서(이 파일)
├── tsconfig.json # TypeScript 설정
└── yarn.lock # yarn 패키지 lock 파일

🛠️ 주요 기술 스택 및 라이브러리
Next.js (App Router, SSR/SSG 지원)
React 18
TypeScript (타입 안전성)
Tailwind CSS (유틸리티 퍼스트 CSS 프레임워크)
Framer Motion (컴포넌트 애니메이션)
GSAP (고급 애니메이션, 이모지 배경)
@ap.cx/react-fullpage (풀페이지 스크롤)
ESLint, Prettier (코드 품질/포맷팅)
PostCSS (CSS 전처리)
Vercel (배포)

🧩 주요 기능 및 커스텀 포인트
인트로 스플래시: 로딩 시 애니메이션/이니셜/메시지 등 표시
풀페이지 스크롤: 각 섹션이 한 화면에 꽉 차게 스크롤
히어로 이미지 슬라이더: Swiper 기반 자동/수동 슬라이드
프로젝트 아코디언: 프로젝트별 상세정보를 아코디언 UI로 표시
경험/이력 섹션: 주요 경험/수상/교육 등 타임라인 형태로 표시
이모지 배경 애니메이션: GSAP으로 부드럽게 움직이는 이모지 배경
스크롤 업 버튼: 하단에서 빠르게 상단으로 이동
타입스크립트 기반 타입 안전성: 모든 데이터/컴포넌트에 타입 적용
반응형 디자인: 모바일/PC 모두 최적화

⚡️ 실행 및 개발 방법
의존성 설치
Apply
Run
install
개발 서버 실행
Apply
Run
dev
브라우저에서 확인
Apply
3000
코드 수정 시 자동 리로드

🚀 배포 방법 (Vercel 기준)
GitHub에 코드 push
Vercel에 로그인 → New Project → GitHub 저장소 선택
빌드 명령어/출력 디렉토리 기본값(Next.js 자동 인식)
[Deploy] 클릭 → 배포 완료 후
https://프로젝트명.vercel.app에서 확인
main 브랜치에 push하면 자동으로 재배포
환경변수 필요시 Vercel 대시보드에서 추가

📝 각 주요 파일/폴더 상세 설명
src/app/layout.tsx
전체 레이아웃(공통 헤더/푸터, 메타태그 등)
src/app/page.tsx
메인 페이지 엔트리(모든 섹션/컴포넌트 조립)
src/data/
프로젝트, 경험, 히어로 이미지 등 데이터 소스 (타입스크립트 객체)
src/intro/
인트로(로딩) 관련 컴포넌트 및 메시지
src/sections/components/
각 섹션별 서브 컴포넌트(슬라이더, 아코디언, 버튼 등)
src/sections/types/
데이터/컴포넌트 타입 정의 (타입스크립트)
src/sections/AboutMeSection.tsx
자기소개/스킬/특기 등 소개
src/sections/AnimatedEmojiBackground.tsx
배경 이모지 애니메이션(GSAP)
src/sections/ExperienceSection.tsx
경험/이력/수상 등 타임라인
src/sections/HeroSection.tsx
메인 히어로 섹션(슬라이더 포함)
public/
정적 파일(이미지, favicon 등)
react-fullpage.d.ts
풀페이지 라이브러리 타입 선언(필요시 직접 작성)

🧑‍💻 개발/운영 팁
타입스크립트 타입을 꼭 맞춰서 데이터/컴포넌트 작성
풀페이지 라이브러리(children, Section 등) 사용 시 undefined 반환 주의
배포 후 main 브랜치에 push하면 자동으로 재배포됨
Vercel 환경변수는 대시보드에서 관리
코드 품질 유지: ESLint/Prettier 적용

💬 문의/기여
이메일: tkddyd1259@gmail.com
GitHub: https://github.com/tkddyd0817
이슈/PR: 언제든 환영합니다!
이 프로젝트는 신상용의 성장과 경험, 기술적 열정을 담은 포트폴리오입니다.
코드/구조/배포/운영 등 궁금한 점이 있으면 언제든 문의해 주세요!

리드미에 들어가는내용인데 이름이 들어가도 괜찮을까??

네, 포트폴리오 README에 본인의 이름(신상용)이 들어가는 것은
전혀 문제 없고, 오히려 적극적으로 권장되는 부분입니다!
이유
포트폴리오의 소유자/저자 명시
오픈소스, 포트폴리오, 개인 프로젝트에서는
README에 본인의 이름, 이메일, GitHub 주소 등을
명확히 적는 것이 일반적입니다.
구직/네트워킹/브랜딩 효과
포트폴리오를 보는 사람(채용 담당자, 동료 개발자 등)이
누구의 작업물인지 바로 알 수 있습니다.
연락처, GitHub, 블로그 등도 함께 적으면
네트워킹에 도움이 됩니다.
저작권/기여자 명시
오픈소스 관점에서도
저작자, 기여자, 문의처를 명확히 하는 것이 좋습니다.
실제 예시
많은 개발자 포트폴리오, 오픈소스 프로젝트의 README에는
아래와 같이 이름/이메일/연락처가 들어갑니다.
Apply
tkddyd0817
주의할 점
이메일, 연락처 등 공개가 부담스럽다면
이메일만 적거나, GitHub/블로그 등만 적어도 무방합니다.
회사 내부 프로젝트, 민감한 정보가 포함된 경우에는
이름/연락처 공개를 신중히 결정해야 합니다.
포트폴리오/개인 프로젝트는 이름을 넣는 것이 표준입니다.
결론
포트폴리오 README에 이름을 넣는 것은 매우 자연스럽고 권장되는 일입니다.
오히려 이름, 이메일, GitHub, 블로그 등
연락 가능한 정보를 명확히 적어두는 것이
신뢰도와 브랜딩에 도움이 됩니다.
추가로, README에 들어가는 자기소개/연락처/브랜딩 문구 등
더 멋지게 다듬고 싶다면 언제든 요청해 주세요!
신상용 포트폴리오 (Next.js/React 기반)
신상용의 프론트엔드 포트폴리오는 최신 Next.js(App Router)와 React, TypeScript, Tailwind CSS, 다양한 애니메이션 라이브러리, 풀페이지 스크롤 등
실무에서 자주 쓰이는 기술을 총망라하여 구현한 개인 포트폴리오 웹사이트입니다.

🗂️ 프로젝트 구조 및 주요 파일 설명
my-app/
├── .next/ # Next.js 빌드 산출물 (자동 생성, 직접 수정 X)
├── node_modules/ # 설치된 npm 패키지 (자동 생성)
├── public/ # 정적 파일(이미지, 폰트, favicon 등)
│ └── ...jpg/png/svg # 프로젝트/프로필 이미지 등
├── src/
│ ├── app/ # Next.js App Router 엔트리 (라우팅, 레이아웃, 글로벌 스타일)
│ │ ├── favicon.ico # 파비콘
│ │ ├── globals.css # 전체 스타일
│ │ ├── layout.tsx # 전체 레이아웃(공통 헤더/푸터 등)
│ │ └── page.tsx # 메인 페이지 엔트리
│ ├── data/ # 주요 데이터(프로젝트, 경험, 히어로 이미지 등)
│ │ ├── experiences.ts # 경험/이력 데이터
│ │ ├── herolImages.ts # 히어로 섹션 이미지 데이터
│ │ └── projects.ts # 프로젝트 데이터
│ ├── intro/ # 인트로(로딩) 관련 컴포넌트
│ │ ├── components/
│ │ │ ├── BatteryIcon.tsx
│ │ │ ├── Description.tsx
│ │ │ ├── Initials.tsx
│ │ │ ├── LoadingIndicator.tsx
│ │ │ └── LoadingMessage.tsx
│ │ └── IntroSplash.tsx # 인트로 스플래시 전체
│ ├── sections/ # 주요 섹션별 컴포넌트 및 타입
│ │ ├── components/
│ │ │ ├── HeroImageSlider.tsx # 히어로 이미지 슬라이더
│ │ │ ├── ProjectAccordion.tsx # 프로젝트 아코디언
│ │ │ └── ScrollToTopButton.tsx # 스크롤 업 버튼
│ │ ├── types/ # 타입 정의 (타입스크립트)
│ │ │ ├── emoji.ts
│ │ │ ├── experience.ts
│ │ │ ├── HeroImageSliderProps.ts
│ │ │ ├── HeroSectionProps.ts
│ │ │ ├── Project.ts
│ │ │ └── ScrollToTopButtonProps.ts
│ │ ├── AboutMeSection.tsx # 자기소개 섹션
│ │ ├── AnimatedEmojiBackground.tsx # 배경 이모지 애니메이션
│ │ ├── ExperienceSection.tsx # 경험/이력 섹션
│ │ └── HeroSection.tsx # 히어로(메인) 섹션
├── .gitignore
├── eslint.config.mjs # ESLint 설정
├── next.config.ts # Next.js 설정
├── package.json # 프로젝트 의존성/스크립트
├── postcss.config.mjs # PostCSS 설정
├── react-fullpage.d.ts # 풀페이지 타입 선언(커스텀)
├── README.md # 프로젝트 설명서(이 파일)
├── tsconfig.json # TypeScript 설정
└── yarn.lock # yarn 패키지 lock 파일

🛠️ 주요 기술 스택 및 라이브러리
Next.js (App Router, SSR/SSG 지원)
React 18
TypeScript (타입 안전성)
Tailwind CSS (유틸리티 퍼스트 CSS 프레임워크)
Framer Motion (컴포넌트 애니메이션)
GSAP (고급 애니메이션, 이모지 배경)
@ap.cx/react-fullpage (풀페이지 스크롤)
ESLint, Prettier (코드 품질/포맷팅)
PostCSS (CSS 전처리)
Vercel (배포)

🧩 주요 기능 및 커스텀 포인트
인트로 스플래시: 로딩 시 애니메이션/이니셜/메시지 등 표시
풀페이지 스크롤: 각 섹션이 한 화면에 꽉 차게 스크롤
히어로 이미지 슬라이더: Swiper 기반 자동/수동 슬라이드
프로젝트 아코디언: 프로젝트별 상세정보를 아코디언 UI로 표시
경험/이력 섹션: 주요 경험/수상/교육 등 타임라인 형태로 표시
이모지 배경 애니메이션: GSAP으로 부드럽게 움직이는 이모지 배경
스크롤 업 버튼: 하단에서 빠르게 상단으로 이동
타입스크립트 기반 타입 안전성: 모든 데이터/컴포넌트에 타입 적용
반응형 디자인: 모바일/PC 모두 최적화

⚡️ 실행 및 개발 방법
의존성 설치
Apply
Run
install
개발 서버 실행
Apply
Run
dev
브라우저에서 확인
Apply
3000
코드 수정 시 자동 리로드

🚀 배포 방법 (Vercel 기준)
GitHub에 코드 push
Vercel에 로그인 → New Project → GitHub 저장소 선택
빌드 명령어/출력 디렉토리 기본값(Next.js 자동 인식)
[Deploy] 클릭 → 배포 완료 후
https://프로젝트명.vercel.app에서 확인
main 브랜치에 push하면 자동으로 재배포
환경변수 필요시 Vercel 대시보드에서 추가

📝 각 주요 파일/폴더 상세 설명
src/app/layout.tsx
전체 레이아웃(공통 헤더/푸터, 메타태그 등)
src/app/page.tsx
메인 페이지 엔트리(모든 섹션/컴포넌트 조립)
src/data/
프로젝트, 경험, 히어로 이미지 등 데이터 소스 (타입스크립트 객체)
src/intro/
인트로(로딩) 관련 컴포넌트 및 메시지
src/sections/components/
각 섹션별 서브 컴포넌트(슬라이더, 아코디언, 버튼 등)
src/sections/types/
데이터/컴포넌트 타입 정의 (타입스크립트)
src/sections/AboutMeSection.tsx
자기소개/스킬/특기 등 소개
src/sections/AnimatedEmojiBackground.tsx
배경 이모지 애니메이션(GSAP)
src/sections/ExperienceSection.tsx
경험/이력/수상 등 타임라인
src/sections/HeroSection.tsx
메인 히어로 섹션(슬라이더 포함)
public/
정적 파일(이미지, favicon 등)
react-fullpage.d.ts
풀페이지 라이브러리 타입 선언(필요시 직접 작성)

🧑‍💻 개발/운영 팁
타입스크립트 타입을 꼭 맞춰서 데이터/컴포넌트 작성
풀페이지 라이브러리(children, Section 등) 사용 시 undefined 반환 주의
배포 후 main 브랜치에 push하면 자동으로 재배포됨
Vercel 환경변수는 대시보드에서 관리
코드 품질 유지: ESLint/Prettier 적용

💬 문의/기여
이메일: tkddyd1259@gmail.com
GitHub: https://github.com/tkddyd0817
이슈/PR: 언제든 환영합니다!
이 프로젝트는 신상용의 성장과 경험, 기술적 열정을 담은 포트폴리오입니다.
코드/구조/배포/운영 등 궁금한 점이 있으면 언제든 문의해 주세요!


리드미내용인데 파일 경로 부분있잔아 브랜치에 푸시했는데 왜 사진처럼 형태가 무너져서 보일까??

아주 좋은 질문입니다!
README.md에서 폴더/파일 구조(트리 구조)가 사진처럼 형태가 무너져서 보이는 이유는
마크다운(Markdown)에서 코드 블록(```)이나 적절한 서식을 사용하지 않았기 때문입니다.
1. 문제의 원인
마크다운에서 트리 구조, 폴더 구조, 코드 등은
반드시 코드 블록(```) 또는 들여쓰기(4칸)로 감싸야
줄바꿈/공백/라인이 깨지지 않고 예쁘게 보입니다.
그냥 텍스트로 적으면
GitHub, Vercel, Notion 등에서
공백이 무시되고,
줄이 맞지 않게 보입니다.
2. 해결 방법: 코드 블록 사용
아래처럼
트리 구조 부분을 코드 블록(```)으로 감싸세요.
Apply
설명
my-app/
├── .next/ # Next.js 빌드 산출물 (자동 생성, 직접 수정 X)
├── node_modules/ # 설치된 npm 패키지 (자동 생성)
├── public/ # 정적 파일(이미지, 폰트, favicon 등)
│ └── ...jpg/png/svg # 프로젝트/프로필 이미지 등
├── src/
│ ├── app/ # Next.js App Router 엔트리 (라우팅, 레이아웃, 글로벌 스타일)
│ │ ├── favicon.ico # 파비콘
│ │ ├── globals.css # 전체 스타일
│ │ ├── layout.tsx # 전체 레이아웃(공통 헤더/푸터 등)
│ │ └── page.tsx # 메인 페이지 엔트리
│ ├── data/ # 주요 데이터(프로젝트, 경험, 히어로 이미지 등)
│ │ ├── experiences.ts # 경험/이력 데이터
│ │ ├── herolImages.ts # 히어로 섹션 이미지 데이터
│ │ └── projects.ts # 프로젝트 데이터
│ ├── intro/ # 인트로(로딩) 관련 컴포넌트
│ │ ├── components/
│ │ │ ├── BatteryIcon.tsx
│ │ │ ├── Description.tsx
│ │ │ ├── Initials.tsx
│ │ │ ├── LoadingIndicator.tsx
│ │ │ └── LoadingMessage.tsx
│ │ └── IntroSplash.tsx # 인트로 스플래시 전체
│ ├── sections/ # 주요 섹션별 컴포넌트 및 타입
│ │ ├── components/
│ │ │ ├── HeroImageSlider.tsx # 히어로 이미지 슬라이더
│ │ │ ├── ProjectAccordion.tsx # 프로젝트 아코디언
│ │ │ └── ScrollToTopButton.tsx # 스크롤 업 버튼
│ │ ├── types/ # 타입 정의 (타입스크립트)
│ │ │ ├── emoji.ts
│ │ │ ├── experience.ts
│ │ │ ├── HeroImageSliderProps.ts
│ │ │ ├── HeroSectionProps.ts
│ │ │ ├── Project.ts
│ │ │ └── ScrollToTopButtonProps.ts
│ │ ├── AboutMeSection.tsx # 자기소개 섹션
│ │ ├── AnimatedEmojiBackground.tsx # 배경 이모지 애니메이션
│ │ ├── ExperienceSection.tsx # 경험/이력 섹션
│ │ └── HeroSection.tsx # 히어로(메인) 섹션
├── .gitignore
├── eslint.config.mjs # ESLint 설정
├── next.config.ts # Next.js 설정
├── package.json # 프로젝트 의존성/스크립트
├── postcss.config.mjs # PostCSS 설정
├── react-fullpage.d.ts # 풀페이지 타입 선언(커스텀)
├── README.md # 프로젝트 설명서(이 파일)
├── tsconfig.json # TypeScript 설정
└── yarn.lock # yarn 패키지 lock 파일

🛠️ 주요 기술 스택 및 라이브러리
Next.js (App Router, SSR/SSG 지원)
React 18
TypeScript (타입 안전성)
Tailwind CSS (유틸리티 퍼스트 CSS 프레임워크)
Framer Motion (컴포넌트 애니메이션)
GSAP (고급 애니메이션, 이모지 배경)
@ap.cx/react-fullpage (풀페이지 스크롤)
ESLint, Prettier (코드 품질/포맷팅)
PostCSS (CSS 전처리)
Vercel (배포)

🧩 주요 기능 및 커스텀 포인트
인트로 스플래시: 로딩 시 애니메이션/이니셜/메시지 등 표시
풀페이지 스크롤: 각 섹션이 한 화면에 꽉 차게 스크롤
히어로 이미지 슬라이더: Swiper 기반 자동/수동 슬라이드
프로젝트 아코디언: 프로젝트별 상세정보를 아코디언 UI로 표시
경험/이력 섹션: 주요 경험/수상/교육 등 타임라인 형태로 표시
이모지 배경 애니메이션: GSAP으로 부드럽게 움직이는 이모지 배경
스크롤 업 버튼: 하단에서 빠르게 상단으로 이동
타입스크립트 기반 타입 안전성: 모든 데이터/컴포넌트에 타입 적용
반응형 디자인: 모바일/PC 모두 최적화

⚡️ 실행 및 개발 방법
의존성 설치
Apply
Run
install
개발 서버 실행
Apply
Run
dev
브라우저에서 확인
Apply
3000
코드 수정 시 자동 리로드

🚀 배포 방법 (Vercel 기준)
GitHub에 코드 push
Vercel에 로그인 → New Project → GitHub 저장소 선택
빌드 명령어/출력 디렉토리 기본값(Next.js 자동 인식)
[Deploy] 클릭 → 배포 완료 후
https://프로젝트명.vercel.app에서 확인
main 브랜치에 push하면 자동으로 재배포
환경변수 필요시 Vercel 대시보드에서 추가

📝 각 주요 파일/폴더 상세 설명
src/app/layout.tsx
전체 레이아웃(공통 헤더/푸터, 메타태그 등)
src/app/page.tsx
메인 페이지 엔트리(모든 섹션/컴포넌트 조립)
src/data/
프로젝트, 경험, 히어로 이미지 등 데이터 소스 (타입스크립트 객체)
src/intro/
인트로(로딩) 관련 컴포넌트 및 메시지
src/sections/components/
각 섹션별 서브 컴포넌트(슬라이더, 아코디언, 버튼 등)
src/sections/types/
데이터/컴포넌트 타입 정의 (타입스크립트)
src/sections/AboutMeSection.tsx
자기소개/스킬/특기 등 소개
src/sections/AnimatedEmojiBackground.tsx
배경 이모지 애니메이션(GSAP)
src/sections/ExperienceSection.tsx
경험/이력/수상 등 타임라인
src/sections/HeroSection.tsx
메인 히어로 섹션(슬라이더 포함)
public/
정적 파일(이미지, favicon 등)
react-fullpage.d.ts
풀페이지 라이브러리 타입 선언(필요시 직접 작성)

🧑‍💻 개발/운영 팁
타입스크립트 타입을 꼭 맞춰서 데이터/컴포넌트 작성
풀페이지 라이브러리(children, Section 등) 사용 시 undefined 반환 주의
배포 후 main 브랜치에 push하면 자동으로 재배포됨
Vercel 환경변수는 대시보드에서 관리
코드 품질 유지: ESLint/Prettier 적용

💬 문의/기여
이메일: tkddyd1259@gmail.com
GitHub: https://github.com/tkddyd0817
이슈/PR: 언제든 환영합니다!
이 프로젝트는 신상용의 성장과 경험, 기술적 열정을 담은 포트폴리오입니다.
코드/구조/배포/운영 등 궁금한 점이 있으면 언제든 문의해 주세요!
