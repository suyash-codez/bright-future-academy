import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-secondary-blue tracking-widest uppercase mb-1 md:mb-2">
            Get In Touch
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue mb-3 md:mb-4">
            Start Your Journey Today
          </h3>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            Have questions? Want to enroll? Reach out to us via Call or WhatsApp, and we'll be happy to assist you.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto"
        >
          {/* Contact Details Card */}
          <motion.div variants={itemVariants} className="bg-background-gray rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-center space-y-5 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex justify-center items-center text-primary-blue shadow-sm">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-500">Phone</p>
                <a href="tel:9340093120" className="text-base md:text-xl font-bold text-text-dark hover:text-primary-blue transition-colors">
                  +91 9340093120
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex justify-center items-center text-primary-blue shadow-sm">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-500">Email</p>
                <a href="mailto:avnij561@gmail.com" className="text-base md:text-xl font-bold text-text-dark hover:text-primary-blue transition-colors">
                  avnij561@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex justify-center items-center text-primary-blue shadow-sm">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-500">Location</p>
                <p className="text-base md:text-xl font-bold text-text-dark">
                  Bright Future Academy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Action CTA Card */}
          <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-primary-blue rounded-2xl md:rounded-3xl p-5 md:p-8 text-white shadow-2xl flex flex-col justify-center items-center text-center space-y-4 md:space-y-6 relative overflow-hidden">
             {/* Decor */}
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full pointer-events-none"
            ></motion.div>
            <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
               transition={{ duration: 6, repeat: Infinity, delay: 1 }}
               className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-tr-full pointer-events-none"
            ></motion.div>
            
            <h4 className="text-xl md:text-2xl font-bold z-10">Quick Connect</h4>
            <p className="text-blue-100 z-10 mb-1 md:mb-2 text-sm md:text-base">Drop us a message on WhatsApp for instant replies regarding batch capacity and fees.</p>
            
            <motion.a
              href="https://wa.me/919340093120"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="z-10 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 md:px-6 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-opacity-90 transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>

            <motion.a
              href="tel:9340093120"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-10 w-full flex items-center justify-center gap-2 bg-white text-primary-blue px-5 py-3 md:px-6 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call Directly
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
