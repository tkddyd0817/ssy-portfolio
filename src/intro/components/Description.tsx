import { motion } from "framer-motion";

export default function Description() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="text-2xl font-medium text-gray-300"
    >
      Frontend Developer
    </motion.span>
  );
}
