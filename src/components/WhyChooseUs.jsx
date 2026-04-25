import { motion } from "framer-motion";
import { Users, Target, ClipboardCheck, Lightbulb, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Small Batch Size",
    description:
      "We keep our batches small so every student gets the time and attention they deserve — no one gets left behind.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Personal Attention",
    description:
      "Avni Ma'am personally tracks each student's progress and ensures doubts are cleared the same day.",
  },
  {
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: "Regular Tests & Feedback",
    description:
      "Weekly chapter tests and detailed feedback help students stay on track and improve consistently.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Concept Clarity First",
    description:
      "We focus on understanding the 'why' behind every entry — not just rote learning. Concepts stick for life.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Result-Oriented Teaching",
    description:
      "Our approach is built around board exam patterns, ensuring students are exam-ready with confidence.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 md:py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-3 md:mb-4">
            What Makes Bright Future Academy Different
          </h3>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            Parents trust us because we focus on what truly matters — clear
            concepts, personal care, and real results.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow cursor-pointer flex flex-col gap-3 md:gap-4 group"
            >
              {/* Icon */}
              <motion.div
                className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-blue-50 text-secondary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors"
                whileHover={{ rotate: 10 }}
              >
                {reason.icon}
              </motion.div>

              {/* Text */}
              <h4 className="text-lg md:text-xl font-bold text-text-dark">
                {reason.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
