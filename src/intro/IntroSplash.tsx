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
