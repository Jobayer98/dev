import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { PortfolioButton } from "@/components/ui/button-variants";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Alex's work exceeded our expectations. The attention to detail and technical expertise resulted in a product that not only looks amazing but performs flawlessly. Highly recommended!",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Alex was a game-changer for our startup. The modern design and seamless functionality helped us secure our Series A funding. Professional, creative, and reliable.",
    rating: 5,
    project: "Investment Dashboard"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The website Alex created for us increased our conversion rate by 300%. The user experience is intuitive and the design perfectly captures our brand identity. Outstanding work!",
    rating: 5,
    project: "Agency Website"
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Alex delivered a complex financial platform ahead of schedule with exceptional code quality. The scalable architecture supports our growing user base perfectly. A true professional.",
    rating: 5,
    project: "Financial Platform"
  },
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) => {
  return (
    <div className={`glass-card p-6 sm:p-8 transition-all duration-smooth ${isActive ? 'shadow-neon scale-100 sm:scale-105' : 'scale-95 opacity-60'}`}>
      {/* Quote Icon */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-primary/20 rounded-full">
          <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4 sm:mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-center text-muted-foreground mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base">
        "{testimonial.content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex flex-col items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/20 mb-3 sm:mb-4 object-cover"
        />
        <h4 className="font-semibold text-gradient-primary mb-1 text-sm sm:text-base">{testimonial.name}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground mb-1">{testimonial.role}</p>
        <p className="text-xs sm:text-sm text-secondary">{testimonial.company}</p>
        <div className="mt-2 px-2 sm:px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
          {testimonial.project}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-gradient-primary mb-3 sm:mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            What clients say about working with me
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
          {/* Carousel Container */}
          <div className="relative px-4 sm:px-8 lg:px-16">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prevTestimonial}
              className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 p-3 glass-card rounded-full hover:shadow-neon transition-all duration-smooth"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <button
              onClick={nextTestimonial}
              className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 p-3 glass-card rounded-full hover:shadow-neon transition-all duration-smooth"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Testimonial Cards */}
            <div className="relative min-h-[350px] sm:min-h-[400px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 transform translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 transform -translate-x-full' 
                        : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} isActive={index === currentIndex} />
                </div>
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex lg:hidden justify-center gap-4 mt-4">
              <button
                onClick={prevTestimonial}
                className="p-3 glass-card rounded-full hover:shadow-neon transition-all duration-smooth"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 glass-card rounded-full hover:shadow-neon transition-all duration-smooth"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-smooth ${
                  index === currentIndex 
                    ? 'bg-primary shadow-neon' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <PortfolioButton
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </PortfolioButton>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
          <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-gradient-secondary mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Join these satisfied clients and let's create something amazing together.
            </p>
            <PortfolioButton 
              variant="hero" 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Let's Work Together
            </PortfolioButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;