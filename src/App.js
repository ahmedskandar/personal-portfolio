import HeroSection from "./components/hero-section/HeroSection";
import SkillsSection from "./components/skill-section/SkillsSection";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import AboutMe from "./components/about-section/AboutMe";
import ContactMe from "./components/contact-section/ContactMe";
import Footer from "./components/footer-section/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <main>
        <SkillsSection />
        <ProjectsSection />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
