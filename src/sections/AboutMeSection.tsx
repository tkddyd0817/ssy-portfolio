import React from "react";
import { FaGithub, FaEnvelope, FaDatabase } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
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
            {`“새로운 도전, 빠른 성장, 그리고 팀과의 시너지.”

비전공자에서 개발자로, 저는 부트캠프를 통해 매일 성장하는 법을 배웠습니다.
무한스크롤, Redux Toolkit, React Hook Form, Zod 등 처음 접하는 기술도 스스로 학습해 직접 구현했고,
프로젝트에서는 팀원 간의 갈등을 조율하며 모두가 만족하는 결과를 이끌어냈습니다.

저는 기술과 소통, 두 가지 모두에 강점이 있습니다.
앞으로도 팀과 함께 성장하며, 변화를 두려워하지 않는 개발자가 되겠습니다.`}
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
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-purple-100 text-purple-800 font-semibold text-xs sm:text-sm">
              <SiRedux className="text-purple-500" /> Redux Toolkit
            </span>
            {/* localStorage */}
            <span className="flex items-center gap-1 px-3 py-1 rounded bg-orange-100 text-orange-800 font-semibold text-xs sm:text-sm">
              <FaDatabase className="text-orange-500" /> localStorage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
