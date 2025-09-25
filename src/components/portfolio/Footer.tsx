import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/10 py-8 sm:py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold font-space text-gradient-primary mb-2">
              Jobayer Rahman
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Full Stack Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
            {[
              { name: "Home", href: "#hero" },
              { name: "About", href: "#about" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Experience", href: "#experience" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-smooth hover:scale-105 transform px-2 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.href.slice(1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs sm:max-w-md h-px bg-gradient-primary opacity-30" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              <span>© {currentYear} Jobayer Rahman. Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse" />
              <span>and lots of coffee.</span>
            </div>

            {/* <div className="text-xs opacity-75">
              Built with React, TypeScript & Tailwind CSS
            </div> */}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 sm:p-3 glass-card rounded-full hover:shadow-neon transition-all duration-smooth hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;