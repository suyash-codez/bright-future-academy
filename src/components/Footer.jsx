import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark pt-16 pb-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary-blue flex items-center justify-center font-bold text-base">
                BF
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Bright Future Academy
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mt-4">
              Empowering students to excel in Class 11 and 12 Accounts through simplified teaching methods and personal attention.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Courses', 'Timing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-secondary-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9340093120" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-secondary-blue" />
                  +91 9340093120
                </a>
              </li>
              <li>
                <a href="mailto:avnij561@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-secondary-blue" />
                  avnij561@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Bright Future Academy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
