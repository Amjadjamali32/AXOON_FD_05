import ContactForm from "../sections/ContactForm";
import HeroSection from "../sections/HeroSection";
import PortfolioSection from "../sections/PortfolioSection";
import SkillsSection from "../sections/SkillsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
