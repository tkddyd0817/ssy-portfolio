import { motion } from "framer-motion";

export default function Initials() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex"
    >
      {["신", "상", "용"].map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            },
          }}
          className="text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(90,90,255,0.15)]"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
