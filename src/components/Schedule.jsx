import { motion } from "framer-motion";
import { Clock, Sun, Moon } from "lucide-react";

export default function Schedule() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="timing" className="py-12 md:py-20 bg-primary-blue relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
        >
          <div className="md:w-1/2">
            <h2 className="text-base md:text-xl font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" /> Schedule
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-2 md:mb-4">
              Flexible Timings
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We offer batches that fit seamlessly into school hours, providing sufficient time for self-study and rest.
            </p>
          </div>

          <div className="md:w-1/2 w-full space-y-4">
            <motion.div 
               whileHover={{ scale: 1.05, x: -10 }}
               className="bg-blue-50 border border-blue-100 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-11 h-11 md:w-14 md:h-14 bg-white rounded-lg md:rounded-xl shadow-sm flex flex-shrink-0 items-center justify-center text-amber-500"
              >
                <Sun className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
              <div>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Morning Batch</p>
                <p className="text-lg md:text-2xl font-bold text-primary-blue">7:00 AM – 9:00 AM</p>
              </div>
            </motion.div>

            <motion.div 
               whileHover={{ scale: 1.05, x: -10 }}
               className="bg-indigo-50 border border-indigo-100 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
             >
              <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-11 h-11 md:w-14 md:h-14 bg-white rounded-lg md:rounded-xl shadow-sm flex flex-shrink-0 items-center justify-center text-indigo-600">
                <Moon className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
              <div>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Evening Batch</p>
                <p className="text-lg md:text-2xl font-bold text-indigo-900">5:00 PM – 8:00 PM</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
