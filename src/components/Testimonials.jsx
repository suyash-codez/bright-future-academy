import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya",
    class: "Class 12",
    text: "Avni Ma'am explains every concept so clearly that I actually started enjoying Accounts. My marks improved from 55 to 88 in just a few months.",
  },
  {
    name: "Arjun",
    class: "Class 11",
    text: "I used to be scared of journal entries, but now they feel easy. The regular tests really helped me stay consistent throughout the year.",
  },
  {
    name: "Sneha",
    class: "Class 12",
    text: "What I liked most is that Ma'am never ignored anyone's doubts. Even small questions were answered patiently. My parents are really happy with my progress.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
            Student Voices
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-3 md:mb-4">
            What Our Students Say
          </h3>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            Real words from real students — here's what learning at Bright
            Future Academy feels like.
          </p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative bg-background-gray rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col gap-4 md:gap-5 cursor-pointer group"
            >
              {/* Quote Icon */}
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: index,
                }}
              >
                <Quote className="w-8 h-8 text-secondary-blue/30 group-hover:text-secondary-blue transition-colors" />
              </motion.div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] italic flex-grow">
                "{t.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-text-dark text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{t.class}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
