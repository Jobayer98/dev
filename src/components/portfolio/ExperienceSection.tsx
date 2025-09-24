import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Cloud,
  GitBranch,
  Layers,
  Settings
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechForward Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead development of modern web applications using React, TypeScript, and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
    achievements: [
      "Increased application performance by 40% through optimization",
      "Led a team of 5 developers on major product releases",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    current: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Creative Solutions",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences. Specialized in React ecosystem and modern CSS frameworks.",
    achievements: [
      "Built 15+ production applications serving 100k+ users",
      "Reduced bundle size by 50% through code splitting",
      "Established component library used across multiple projects"
    ],
    technologies: ["React", "JavaScript", "Sass", "Figma", "Redux"],
    current: false,
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupHub",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Started career developing websites and web applications for various clients. Gained experience in full-stack development and agile methodologies.",
    achievements: [
      "Completed 25+ client projects with 98% satisfaction rate",
      "Learned modern development stack and best practices",
      "Contributed to open-source projects and community"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
];

const techIcons = {
  React: Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  "Node.js": Database,
  HTML: Globe,
  CSS: Palette,
  Sass: Palette,
  PHP: Database,
  AWS: Cloud,
  PostgreSQL: Database,
  MySQL: Database,
  Redux: Layers,
  Figma: Palette,
};

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
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
      className={`relative transition-all duration-1000 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {/* Timeline Line - Hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-primary" />
      
      {/* Timeline Dot - Hidden on mobile, visible on lg+ */}
      <div className={`hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
        experience.current ? 'bg-primary border-primary shadow-neon animate-glow-pulse' : 'bg-background border-primary'
      }`} />

      {/* Content Card - Mobile first layout */}
      <div className={`glass-card p-4 sm:p-6 hover:shadow-neon transition-all duration-smooth ${
        index % 2 === 0 ? 'lg:mr-1/2 lg:ml-8' : 'lg:ml-1/2 lg:mr-8'
      }`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gradient-primary mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-secondary font-medium mb-2 flex-wrap">
              <span className="text-sm sm:text-base">{experience.company}</span>
              {experience.current && (
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full animate-pulse">
                  Current
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end text-xs sm:text-sm text-muted-foreground gap-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-accent mb-2 sm:mb-3">Key Achievements:</h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-accent mb-2 sm:mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {experience.technologies.map((tech) => {
              const IconComponent = techIcons[tech as keyof typeof techIcons] || Settings;
              return (
                <div
                  key={tech}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-smooth"
                >
                  <IconComponent className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
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
    <section id="experience" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-gradient-primary mb-3 sm:mb-4">
            Experience & Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            My professional journey in web development and design
          </p>
        </div>

        {/* Timeline - Mobile friendly */}
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;