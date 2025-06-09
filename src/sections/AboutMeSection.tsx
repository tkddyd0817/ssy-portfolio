import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-blue-200 dark:text-gray-200 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 w-full">
        {/* 프로필 + 버튼 */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img
            src="/profile.jpg"
            alt="신상용 프로필"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow"
          />
          <div className="flex gap-2 sm:gap-4 mt-4">
            <a
              href="https://github.com/tkddyd0817"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 text-gray-900 dark:text-white font-semibold text-xs sm:text-sm hover:bg-gray-200 transition-colors duration-200"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:tkddyd1259@gmail.com"
              className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 text-blue-800 font-semibold text-xs sm:text-sm hover:bg-blue-200 transition-colors duration-200"
            >
              <FaEnvelope /> 이메일
            </a>
          </div>
        </div>
        {/* 소개글 + 스택 */}
        <div className="flex-1 w-full">
          <div className="text-sm sm:text-base leading-relaxed text-gray-100 dark:text-gray-200 whitespace-pre-line mb-4 text-center md:text-left">
            {`저는 "내가 좋아하는 일이 뭘까?"라는 고민 끝에 개발이라는 새로운 분야에 도전하게 되었습니다.
비전공자임에도 불구하고, 체계적인 커리큘럼의 부트캠프를 수료하며 매일 꾸준히 학습하고, 실제 서비스를 만드는 프로젝트에 적극적으로 참여했습니다.
무한스크롤 기능과 React Hook Form, Zod를 활용한 폼 검증을 처음 접했음에도 불구하고
문서와 레퍼런스를 참고하여 빠르게 습득했고,
기한 내에 안정적으로 해당 기능들을 구현하여 팀원들에게 신뢰를 얻었습니다.
저의 강점은 타인의 감정을 잘 이해하고, 원만한 관계를 형성하는 소통 능력입니다.
예를 들어, 프로젝트 진행 중 팀원 간의 의견 차이가 있었을 때, 각자의 입장을 경청하고 중재하여 모두가 만족할 수 있는 방향으로 조율한 경험이 있습니다.
이러한 경험을 바탕으로, 앞으로도 실무에서 팀원들과 적극적으로 소통하며 함께 성장하고,
팀의 목표 달성에 기여하는 개발자가 되고 싶습니다.`}
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-2">
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-blue-100 text-blue-800 font-semibold text-xs sm:text-sm">
              <SiReact className="text-blue-500" /> React
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 text-gray-900 dark:text-white font-semibold text-xs sm:text-sm">
              <SiNextdotjs className="text-gray-900 dark:text-white" /> Next.js
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-blue-100 text-blue-800 font-semibold text-xs sm:text-sm">
              <SiTypescript className="text-blue-700" /> TypeScript
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-cyan-100 text-cyan-800 font-semibold text-xs sm:text-sm">
              <SiTailwindcss className="text-cyan-400" /> Tailwind CSS
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-yellow-100 text-yellow-800 font-semibold text-xs sm:text-sm">
              <SiJavascript className="text-yellow-500" /> JavaScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


