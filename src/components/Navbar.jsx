import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Timing", href: "#timing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
              BF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-primary-blue tracking-tight">
                Bright Future
              </span>
              <span className="text-xs font-semibold text-secondary-blue tracking-wider uppercase">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-text-dark font-medium hover:text-secondary-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary-blue after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9340093120"
              className="flex items-center gap-2 bg-primary-blue text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-dark focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-text-dark font-medium hover:text-primary-blue text-lg block border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:9340093120"
                className="flex items-center justify-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-full font-medium shadow-md mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
