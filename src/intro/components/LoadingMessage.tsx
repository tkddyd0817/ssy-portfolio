import { motion } from "framer-motion";

export default function LoadingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ delay: 1.5, duration: 0.7 }}
      className="mt-10 text-base text-gray-500 dark:text-gray-400 tracking-wide"
    >
      포트폴리오에 입장 중...
    </motion.div>
  );
}
