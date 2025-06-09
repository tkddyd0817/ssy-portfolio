"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { HeroImageSliderProps } from "@/sections/types/HeroImageSliderProps";

export default function HeroImageSlider({ images }: HeroImageSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      slidesPerView={1}
      className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-48 sm:h-64 md:h-96 rounded-xl shadow-lg"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 640px) 100vw, 640px"
              priority={idx === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
