import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

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
