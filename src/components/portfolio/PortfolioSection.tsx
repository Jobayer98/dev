import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { PortfolioButton } from "@/components/ui/button-variants";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAiPlatform from "@/assets/project-ai-platform.jpg";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, interactive charts, and customizable reporting features.",
    image: projectDashboard,
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web Application",
    github: "https://github.com",
    live: "https://project-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Modern e-commerce platform with intuitive shopping experience, secure payments, and advanced product filtering.",
    image: projectEcommerce,
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    category: "Mobile Application",
    github: "https://github.com",
    live: "https://app-store.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Platform",
    description: "Machine learning platform for data analysis with predictive modeling, automated insights, and collaborative workflows.",
    image: projectAiPlatform,
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "AI/ML Platform",
    github: "https://github.com",
    live: "https://ai-demo.com",
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`group glass-card p-4 sm:p-6 hover:shadow-neon-strong transition-all duration-smooth transform hover:-translate-y-2 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-smooth group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-smooth ${isHovered ? 'opacity-20' : ''}`} />
        
        {/* Overlay Buttons - Hidden on mobile, shown on hover for desktop */}
        <div className={`absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 transition-opacity duration-smooth ${isHovered ? 'opacity-100' : 'opacity-0'} hidden sm:flex`}>
          <PortfolioButton variant="glass" size="sm" onClick={() => window.open(project.live, '_blank')}>
            <Eye className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Live Demo</span>
          </PortfolioButton>
          <PortfolioButton variant="neon" size="sm" onClick={() => window.open(project.github, '_blank')}>
            <Github className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Code</span>
          </PortfolioButton>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs sm:text-sm text-primary font-medium px-2 sm:px-3 py-1 bg-primary/20 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs text-secondary font-medium px-2 py-1 bg-secondary/20 rounded-full animate-glow-pulse">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-gradient-primary group-hover:text-gradient-secondary transition-all duration-smooth">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md hover:bg-accent/20 hover:text-accent transition-colors duration-smooth"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons - Always visible on mobile */}
        <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
          <PortfolioButton
            variant="hero"
            size="sm"
            onClick={() => window.open(project.live, '_blank')}
            className="flex-1 text-xs sm:text-sm"
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            View Project
          </PortfolioButton>
          <PortfolioButton
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.github, '_blank')}
            className="px-2 sm:px-4"
          >
            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
          </PortfolioButton>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-secondary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-gradient-primary mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A selection of my recent work showcasing different skills and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <PortfolioButton variant="hero-outline" size="lg" className="w-full sm:w-auto">
            View All Projects
          </PortfolioButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;