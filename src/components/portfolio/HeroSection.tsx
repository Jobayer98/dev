import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { PortfolioButton } from "@/components/ui/button-variants";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent rounded-full blur-2xl opacity-30 animate-spin-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-screen py-20 lg:py-0">
          {/* Hero Content */}
          <div
            className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <p
                  className="text-base sm:text-lg text-muted-foreground font-space animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Hello, I'm
                </p>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-space text-gradient-primary animate-fade-in leading-tight"
                  style={{ animationDelay: "0.4s" }}
                >
                  Jobayer Rahman
                </h1>
                <h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground animate-fade-in leading-relaxed"
                  style={{ animationDelay: "0.6s" }}
                >
                  Full Stack Engineer
                </h2>
              </div>

              <p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed"
                style={{ animationDelay: "0.8s" }}
              >
                Crafting digital experiences that blend cutting-edge technology
                with beautiful design. Specializing in React, TypeScript, and
                modern web technologies.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in pt-2"
                style={{ animationDelay: "1s" }}
              >
                <PortfolioButton
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("portfolio")}
                  className="group w-full sm:w-auto"
                >
                  View My Work
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </PortfolioButton>

                <PortfolioButton
                  variant="hero-outline"
                  size="xl"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto"
                >
                  Get In Touch
                </PortfolioButton>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in pt-2"
                style={{ animationDelay: "1.2s" }}
              >
                <a
                  href="https://github.com"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-smooth"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-smooth"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-smooth"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="/resume.pdf"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-smooth"
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={heroPortrait}
                  alt="Jobayer Rahman - FullStack Engineer"
                  className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white/20 shadow-neon-strong hover:scale-105 transition-transform duration-smooth"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-smooth" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;