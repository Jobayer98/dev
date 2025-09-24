import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from "lucide-react";
import { PortfolioButton } from "@/components/ui/button-variants";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Download,
      label: "Resume",
      href: "/resume.pdf",
      color: "text-foreground hover:text-secondary"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-accent rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-gradient-primary mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 sm:p-8 hover:shadow-neon transition-all duration-smooth">
              <h3 className="text-xl sm:text-2xl font-semibold text-gradient-secondary mb-4 sm:mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass rounded-lg border-white/10 focus:border-primary focus:shadow-neon transition-all duration-smooth text-foreground placeholder-muted-foreground text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass rounded-lg border-white/10 focus:border-primary focus:shadow-neon transition-all duration-smooth text-foreground placeholder-muted-foreground text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass rounded-lg border-white/10 focus:border-primary focus:shadow-neon transition-all duration-smooth text-foreground placeholder-muted-foreground text-sm sm:text-base"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass rounded-lg border-white/10 focus:border-primary focus:shadow-neon transition-all duration-smooth text-foreground placeholder-muted-foreground resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <PortfolioButton
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </PortfolioButton>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            {/* Contact Details */}
            <div className="glass-card p-6 sm:p-8 hover:shadow-purple transition-all duration-smooth">
              <h3 className="text-xl sm:text-2xl font-semibold text-gradient-primary mb-4 sm:mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="p-2.5 sm:p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-smooth flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                        {item.href !== "#" ? (
                          <a
                            href={item.href}
                            className="text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-smooth break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 sm:p-8 hover:shadow-neon transition-all duration-smooth">
              <h3 className="text-lg sm:text-xl font-semibold text-gradient-secondary mb-4 sm:mb-6">
                Follow me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 glass rounded-lg hover:shadow-neon transition-all duration-smooth hover:scale-105 ${social.color} text-sm sm:text-base`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-4 sm:p-6 text-center hover:shadow-neon transition-all duration-smooth">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-success rounded-full animate-pulse" />
                <span className="text-success font-medium text-sm sm:text-base">Available for new projects</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Currently accepting new client work for Q1 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;