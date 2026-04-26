import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What classes do you teach?",
    a: "We teach Accounts for Class 11 and Class 12 (CBSE). Both offline and online (Zoom) batches are available.",
  },
  {
    q: "What is the batch size?",
    a: "We keep small batches of 15–20 students so that every student gets personal attention and their doubts are cleared properly.",
  },
  {
    q: "Is a free demo class available?",
    a: "Yes! We offer a free demo class so students and parents can experience the teaching style before joining. Just WhatsApp us to book one.",
  },
  {
    q: "What are the batch timings?",
    a: "Morning batch: 7:00 AM – 9:00 AM and Evening batch: 5:00 PM – 8:00 PM. You can choose whichever suits your schedule.",
  },
  {
    q: "How are fees structured?",
    a: "Fees are affordable and can be discussed over call or WhatsApp. We believe quality education should be accessible to all.",
  },
  {
    q: "Do you conduct regular tests?",
    a: "Yes, we have weekly chapter tests and monthly full-syllabus tests. Detailed feedback is given to every student after each test.",
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-sm md:text-base text-text-dark">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-secondary-blue" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 text-sm md:text-[15px] leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-12 md:py-20 bg-background-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
            FAQs
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-3 md:mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            Common questions parents and students ask us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
