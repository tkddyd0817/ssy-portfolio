"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectAccordionProps } from "@/sections/types/Project";

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const collapsedHeight = 120;
  const expandedHeight = 320;
  const gap = 4;

  const containerHeight =
    collapsedHeight * projects.length +
    (expandedHeight - collapsedHeight) +
    gap * (projects.length - 1);

  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto mt-10 select-none"
      style={{ height: containerHeight }}
      layout
    >
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        let top = index * (collapsedHeight + gap);
        if (activeIndex !== null && index > activeIndex) {
          top += expandedHeight - collapsedHeight;
        }

        return (
          <motion.div
            key={project.name}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`absolute left-0 right-0 cursor-pointer rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl bg-gradient-to-b  ${
              isActive
                ? "from-cyan-500 to-blue-600 text-gray-900 shadow-2xl z-30"
                : "from-gray-900 to-gray-800 text-gray-300 shadow-md z-10"
            } flex flex-col px-6 py-4 overflow-hidden`}
            style={{ top }}
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
                {String(index + 1).padStart(2, "0")}/
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
    </motion.div>
  );
}
