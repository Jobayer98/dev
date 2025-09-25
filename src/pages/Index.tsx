import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
