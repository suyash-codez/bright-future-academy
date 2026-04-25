import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, ChevronRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 bg-background-gray">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-secondary-blue font-semibold text-xs md:text-sm border border-blue-100 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              Class 11–12 Accounts Coaching
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-blue tracking-tight mb-4 md:mb-8 leading-tight"
          >
            Learn Smart, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-500">
              Score Better.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 md:mb-10 max-w-2xl text-center leading-relaxed px-2"
          >
            Welcome to <span className="font-semibold text-text-dark">Bright Future Academy</span>. We simplify complex accounting concepts to help you build a strong foundation and achieve top scores in your board exams.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 bg-primary-blue text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,58,138,0.4)]"
            >
              Enroll Now
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/919340093120"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="group flex items-center justify-center gap-2 bg-white text-text-dark border-2 border-gray-200 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:border-[#25D366] hover:text-[#25D366] transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Chat
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
