import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary-blue to-indigo-800 relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium mb-4 md:mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Seats Available
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Book a Free Demo Class Today
          </h2>
          <p className="text-blue-200 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
            Pehle experience karo, phir decide karo. No pressure — just come,
            learn, and see the difference yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://wa.me/919340093120?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20at%20Bright%20Future%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm md:text-base shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Demo via WhatsApp
            </motion.a>
            <motion.a
              href="tel:9340093120"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm md:text-base hover:bg-white/25 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
