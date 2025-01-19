import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Qualifications from "../components/Qualifications/Qualifications";
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
    </>
  );
}
