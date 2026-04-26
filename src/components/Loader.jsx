import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-primary-blue flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated BF Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-10"
          />
          <span className="text-4xl font-extrabold text-primary-blue relative z-0">
            BF
          </span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
