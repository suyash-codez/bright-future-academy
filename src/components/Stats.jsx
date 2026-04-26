import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, BookOpen, Clock } from "lucide-react";

function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: <Users className="w-6 h-6" />, value: 500, suffix: "+", label: "Students Taught" },
  { icon: <Award className="w-6 h-6" />, value: 95, suffix: "%", label: "Board Results" },
  { icon: <BookOpen className="w-6 h-6" />, value: 5, suffix: "+", label: "Years Experience" },
  { icon: <Clock className="w-6 h-6" />, value: 1000, suffix: "+", label: "Hours of Teaching" },
];

export default function Stats() {
  return (
    <section className="py-10 md:py-14 bg-primary-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-blue-200 text-xs md:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
