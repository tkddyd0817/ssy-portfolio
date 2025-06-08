"use client";
import { ScrollToTopButtonProps } from "@/sections/types/ScrollToTopButtonProps";
import  { useState, useEffect } from "react";



const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  smoothScroll = true
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smoothScroll ? "smooth" : "auto"
    });
  };

  useEffect(() => {
    // SSR 환경에서 window 객체 접근 방지
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      
      // 초기 스크롤 위치 확인
      handleScroll();
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [threshold]);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          aria-label="맨 위로 스크롤"
          className="fixed bottom-5 right-5 p-2.5 text-lg bg-blue-500 text-black 
                   border-none rounded cursor-pointer transition-opacity duration-300 
                   opacity-80 hover:opacity-100 z-50"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;




