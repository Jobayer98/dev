import { useState, useEffect, useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const skills = [
  { name: "Frontend Development", level: 95, icon: Code2, color: "primary" },
  { name: "UI/UX Design", level: 88, icon: Palette, color: "secondary" },
  { name: "Backend Development", level: 82, icon: Zap, color: "accent" },
  { name: "Team Leadership", level: 90, icon: Users, color: "primary" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(skill.level);
          }, index * 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index]);

  const Icon = skill.icon;

  return (
    <div ref={ref} className={`space-y-3 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${skill.color === 'primary' ? 'bg-primary/20 text-primary' : skill.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'}`}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-out ${
            skill.color === 'primary' ? 'bg-gradient-primary shadow-neon' :
            skill.color === 'secondary' ? 'bg-gradient-secondary shadow-purple' :
            'bg-gradient-accent shadow-neon'
          }`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-gradient-primary mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          {/* About Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 sm:p-8 hover:shadow-neon transition-all duration-smooth">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient-secondary">My Journey</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in web development and design, I've had the privilege 
                  of working with startups, agencies, and established companies to bring their digital 
                  visions to life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating performant, accessible, and visually stunning web applications 
                  using modern technologies like React, TypeScript, and Node.js. My design background 
                  allows me to bridge the gap between technical implementation and user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or mentoring aspiring developers in the community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gradient-primary">Skills & Expertise</h3>
              <div className="space-y-6 sm:space-y-8">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card p-4 sm:p-6 text-center hover:shadow-neon transition-all duration-smooth">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Projects Completed</div>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center hover:shadow-purple transition-all duration-smooth">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-secondary mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;