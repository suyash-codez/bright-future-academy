import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show loader (simulate loading assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background-gray font-sans text-text-dark">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => {}} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Courses />
            <WhyChooseUs />
            <FAQ />
            <Testimonials />
            <Schedule />
            <CTABanner />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFAB />
        </>
      )}
    </div>
  );
}

export default App;
