import HeroImageSlider from "@/sections/components/HeroImageSlider";
import React from "react";


interface HeroSectionProps {
  images: { src: string; alt: string }[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-200">
        신상용 의 포트폴리오
      </h1>
      <div className="text-lg text-cyan-300 mb-4 font-semibold">
        프론트엔드 개발자 | tkddyd1259@gmail.com
      </div>
      <div className="w-full flex justify-center mb-6">
        <HeroImageSlider images={images} />
      </div>
      <div className="text-xl md:text-2xl text-blue-200 text-center max-w-xl">
        안녕하세요! 🙋‍♂️ 새로운 기능이라면 일단 도전! 호기심을 결과로
        증명하는 개발자 신상용입니다.
      </div>
    </section>
  );
}
