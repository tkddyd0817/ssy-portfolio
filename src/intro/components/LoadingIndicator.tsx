import React from "react";
import { motion } from "framer-motion";
import BatteryIcon from "./BatteryIcon";

export default function LoadingIndicator({ chargeLevel }: { chargeLevel: number }) {
  let fill = "#22c55e"; // green-500
  if (chargeLevel < 30) fill = "#f43f5e"; // red-500
  else if (chargeLevel < 70) fill = "#facc15"; // yellow-400

  return (
    <div className="relative w-32 h-16">
      <BatteryIcon fill="#e5e7eb" />
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${chargeLevel}%`,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <BatteryIcon fill={fill} />
      </div>
      <motion.span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {chargeLevel}%
      </motion.span>
    </div>
  );
}
