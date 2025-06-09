신상용 포트폴리오 (Next.js/React 기반)
신상용의 프론트엔드 포트폴리오는 최신 Next.js(App Router)와 React, TypeScript, Tailwind CSS, 다양한 애니메이션 라이브러리, 풀페이지 스크롤 등
실무에서 자주 쓰이는 기술을 총망라하여 구현한 개인 포트폴리오 웹사이트입니다.

🗂️ 프로젝트 구조 및 주요 파일 설명
my-app/
├── .next/ # Next.js 빌드 산출물 (자동 생성, 직접 수정 X)
├── node_modules/ # 설치된 npm 패키지 (자동 생성)
├── public/ # 정적 파일(이미지, 폰트, favicon 등)
│ └── ...jpg/png/svg # 프로젝트/프로필 이미지 등
├── src/
│ ├── app/ # Next.js App Router 엔트리 (라우팅, 레이아웃, 글로벌 스타일)
│ │ ├── favicon.ico # 파비콘
│ │ ├── globals.css # 전체 스타일
│ │ ├── layout.tsx # 전체 레이아웃(공통 헤더/푸터 등)
│ │ └── page.tsx # 메인 페이지 엔트리
│ ├── data/ # 주요 데이터(프로젝트, 경험, 히어로 이미지 등)
│ │ ├── experiences.ts # 경험/이력 데이터
│ │ ├── herolImages.ts # 히어로 섹션 이미지 데이터
│ │ └── projects.ts # 프로젝트 데이터
│ ├── intro/ # 인트로(로딩) 관련 컴포넌트
│ │ ├── components/
│ │ │ ├── BatteryIcon.tsx
│ │ │ ├── Description.tsx
│ │ │ ├── Initials.tsx
│ │ │ ├── LoadingIndicator.tsx
│ │ │ └── LoadingMessage.tsx
│ │ └── IntroSplash.tsx # 인트로 스플래시 전체
│ ├── sections/ # 주요 섹션별 컴포넌트 및 타입
│ │ ├── components/
│ │ │ ├── HeroImageSlider.tsx # 히어로 이미지 슬라이더
│ │ │ ├── ProjectAccordion.tsx # 프로젝트 아코디언
│ │ │ └── ScrollToTopButton.tsx # 스크롤 업 버튼
│ │ ├── types/ # 타입 정의 (타입스크립트)
│ │ │ ├── emoji.ts
│ │ │ ├── experience.ts
│ │ │ ├── HeroImageSliderProps.ts
│ │ │ ├── HeroSectionProps.ts
│ │ │ ├── Project.ts
│ │ │ └── ScrollToTopButtonProps.ts
│ │ ├── AboutMeSection.tsx # 자기소개 섹션
│ │ ├── AnimatedEmojiBackground.tsx # 배경 이모지 애니메이션
│ │ ├── ExperienceSection.tsx # 경험/이력 섹션
│ │ └── HeroSection.tsx # 히어로(메인) 섹션
├── .gitignore
├── eslint.config.mjs # ESLint 설정
├── next.config.ts # Next.js 설정
├── package.json # 프로젝트 의존성/스크립트
├── postcss.config.mjs # PostCSS 설정
├── react-fullpage.d.ts # 풀페이지 타입 선언(커스텀)
├── README.md # 프로젝트 설명서(이 파일)
├── tsconfig.json # TypeScript 설정
└── yarn.lock # yarn 패키지 lock 파일



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

