import React from 'react'
import { motion } from "framer-motion";
import { ExperienceSectionProps } from '@/sections/types/experience';

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-200 text-center">
        경험 및 활동
      </h2>
      <div className="w-full">
        {experiences.map((e, i) => (
          <motion.div
            key={i}
            className={`
              cursor-pointer 
              mb-4 sm:mb-8 p-3 sm:p-4 rounded-xl
              bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-800  
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              transform hover:-translate-y-1 hover:scale-105
              w-full
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <b className="text-base sm:text-lg font-bold text-white">{e.name}</b>
            <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">
              {e.period}
            </span>
            <div className="text-gray-300 text-xs sm:text-base mt-1 whitespace-pre-line">
              {e.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection

