import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background-gray font-sans text-text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
