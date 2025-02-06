import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Qualifications from "../components/Qualifications/Qualifications";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Skills from "../components/Skills/Skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}
