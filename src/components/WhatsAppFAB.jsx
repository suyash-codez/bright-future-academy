import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919340093120?text=Hello%2C%20I%20want%20to%20know%20about%20admission%20in%20Bright%20Future%20Academy."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Ping animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
