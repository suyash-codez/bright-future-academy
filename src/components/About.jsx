import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, User } from "lucide-react";

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const teachingStyles = [
    "Easy & Simplified explanations",
    "Regular mock tests & evaluation",
    "One-to-one personal doubt solving",
    "Focus on board exam strategy",
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Illustration/Image Side */}
          <motion.div variants={itemVariants} className="relative mt-4 lg:mt-0">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square max-w-[250px] md:max-w-md mx-auto relative rounded-2xl md:rounded-3xl overflow-hidden bg-blue-50 shadow-xl md:shadow-2xl p-6 md:p-8 flex items-center justify-center cursor-pointer hover:shadow-blue-200/50 transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-secondary-blue/5"></div>
              {/* If user provides image, replace this User icon */}
              <User className="w-28 h-28 md:w-48 md:h-48 text-primary-blue/30" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-4 -right-2 lg:right-0 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 z-10 cursor-pointer"
            >
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-text-dark text-sm md:text-base">100%</p>
                <p className="text-[10px] md:text-xs text-gray-500 font-semibold">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
              About The Educator
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-4 md:mb-6">
              Learn from <span className="text-secondary-blue">Avni Joshi</span>
            </h3>
            <p className="text-sm md:text-lg text-gray-600 mb-5 md:mb-8 leading-relaxed">
              With a deep passion for teaching, Avni simplifies the logic of accounting, replacing rote memorization with crystal-clear concepts to ensure students excel in Class 11 and 12 boards.
            </p>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-bold text-lg md:text-xl text-text-dark mb-3 md:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary-blue" />
                Teaching Style
              </h4>
              {teachingStyles.map((style, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 10, cursor: "pointer" }}
                  className="flex items-center gap-2.5 md:gap-3 bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-100 shadow-sm transition-colors hover:bg-blue-50 hover:border-blue-100"
                >
                  <motion.div 
                     animate={{ rotate: [0, 15, -15, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: index * 0.5 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary-blue flex-shrink-0" />
                  </motion.div>
                  <span className="font-medium text-gray-700 text-sm md:text-base">{style}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
