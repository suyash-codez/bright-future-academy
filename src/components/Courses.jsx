import { motion } from "framer-motion";
import { BookMarked, Calculator, ChevronRight } from "lucide-react";

export default function Courses() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const courses = [
    {
      title: "Class 11 Accounts",
      icon: <BookMarked className="w-10 h-10 text-white" />,
      description: "Build a rock-solid foundation in accounting basics, journal entries, and ledgers.",
      features: ["Complete Syllabus Coverage", "Basic Concepts Clarity", "Practice Assignments"],
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Class 12 Accounts",
      icon: <Calculator className="w-10 h-10 text-white" />,
      description: "Advanced topics, partnership, and company accounts aimed at board exam perfection.",
      features: ["Board Exam Strategy", "Past Year Papers Solution", "Cash Flow & Ratios Mastery"],
      color: "from-indigo-600 to-indigo-400"
    }
  ];

  return (
    <section id="courses" className="py-12 md:py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
            Our Programs
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-3 md:mb-4">
            Curriculum Designed for Success
          </h3>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            Choose the right batch tailored to strengthen your core concepts and maximize your scores.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group cursor-pointer"
            >
              <div className={`h-24 md:h-32 bg-gradient-to-r ${course.color} relative overflow-hidden flex items-center p-5 md:p-8`}>
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="absolute top-0 right-0 p-4 opacity-20"
                >
                  {course.icon}
                </motion.div>
                <h4 className="text-xl md:text-2xl font-bold text-white relative z-10">{course.title}</h4>
              </div>
              
              <div className="p-5 md:p-8 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg leading-relaxed">
                  {course.description}
                </p>
                
                <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-text-dark font-medium text-sm md:text-base">
                      <div className="w-2 h-2 rounded-full bg-secondary-blue"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl bg-gray-50 text-primary-blue font-bold text-sm md:text-base border-2 border-transparent group-hover:border-primary-blue group-hover:bg-white transition-all"
                >
                  Join Batch
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
