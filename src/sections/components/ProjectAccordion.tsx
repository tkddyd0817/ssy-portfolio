"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectAccordionProps } from "@/sections/types/Project";
import usePagination from "@/hooks/usePagination";

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {
    currentItems: pagedProjects,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    startButtonIndex,
    maxButtonsToShow,
  } = usePagination(projects, 4);

  const collapsedHeight = 120;
  const expandedHeight = 320;
  // const gap = 4;

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 select-none">
      {pagedProjects.map((project, index) => {
        // 전체 projects의 index를 계산해야 activeIndex가 정상 동작
        const realIndex = (currentPage - 1) * 4 + index;
        const isActive = realIndex === activeIndex;

        return (
          <motion.div
            key={project.name}
            onMouseEnter={() => setActiveIndex(realIndex)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`mb-4 cursor-pointer rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl bg-gradient-to-b  ${
              isActive
                ? "from-cyan-500 to-blue-600 text-gray-900 shadow-2xl z-30"
                : "from-gray-900 to-gray-800 text-gray-300 shadow-md z-10"
            } flex flex-col px-6 py-4 overflow-hidden`}
            layout
            initial={false}
            animate={{
              height: isActive ? expandedHeight : collapsedHeight,
              scale: isActive ? 1 : 0.95,
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* 제목 + 링크 (항상 보이도록) */}
            <div className="flex justify-between items-center h-[80px]">
              <h3
                className={`text-2xl font-extrabold ${
                  isActive ? "text-gray-900" : "text-gray-300"
                }`}
              >
                {project.name}
              </h3>
              <span
                className={`text-xl font-semibold ${
                  isActive ? "text-gray-900" : "text-gray-300"
                }`}
              >
                {String(realIndex + 1).padStart(2, "0")}/
              </span>
            </div>

            <div className="flex gap-[5px] font-semibold">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline bg-black text-white rounded-full px-3 py-1 text-xs"
              >
                Github
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline bg-blue-600 text-white rounded-full px-3 py-1 text-xs"
              >
                서비스
              </a>
            </div>

            {/* 펼쳐진 카드 내용 */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-900 overflow-y-auto max-h-[200px]"
                >
                  <p className="text-sm font-medium">{project.period}</p>
                  <p className="mt-4 text-base">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* 페이지네이션 UI */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
        >
          <span aria-hidden="true">←</span> 이전
        </button>
        {/* 페이지 번호 버튼 */}
        {Array.from({
          length: Math.min(maxButtonsToShow, totalPages - startButtonIndex),
        }).map((_, i) => {
          const pageNum = startButtonIndex + i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNum
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
        >
          다음 <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
