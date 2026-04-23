import { useEffect, useState, useRef } from "react";
import { Search, Target, Users, FileText, Mail, Network } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const skills = [
  { name: "Search Engine Optimization (SEO)", icon: Search, percentage: 95 },
  { name: "Search Engine Marketing (SEM)", icon: Target, percentage: 90 },
  { name: "Social Media Marketing (SMM)", icon: Users, percentage: 92 },
  { name: "Content Marketing", icon: FileText, percentage: 88 },
  { name: "Email Marketing", icon: Mail, percentage: 85 },
  { name: "Affiliate Marketing", icon: Network, percentage: 80 },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.percentage);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage, index]);

  return (
    <AnimatedSection
      className="card-dark p-6 hover-lift"
      delay={index * 75}
    >
      <div ref={cardRef}>

        <AnimatedText as="p" className="text-sm uppercase tracking-wide mb-3">
          {skill.name}
        </AnimatedText>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          <span className="text-primary">{progress}</span>%
        </h3>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="section-subtitle mb-4">Marketing Expertise</div>
            <AnimatedText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Delivering Value{" "}
              <span className="highlight-text">Through My Skills</span>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={400}>
          <AnimatedText as="p">
            You've got a challenge?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Let's talk
            </a>
          </AnimatedText>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
