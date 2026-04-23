import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const SkillsPage = () => {
  const techStack = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 99, category: "Frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 95, category: "Frontend" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 95, category: "Frontend" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 90, category: "Frontend" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 95, category: "Frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 88, category: "Frontend" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 95, category: "Frontend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 90, category: "Backend" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 88, category: "Backend" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 85, category: "Database" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 82, category: "Database" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: 80, category: "Mobile" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 92, category: "Tools" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 98, category: "Tools" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 85, category: "Design" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Mobile", "Tools", "Design"];

  const certifications = [
    { title: "React Developer Certification", issuer: "Meta", year: "2024" },
    { title: "Full Stack Web Development", issuer: "Coursera", year: "2023" },
    { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary text-sm uppercase tracking-widest mb-4">Tech Stack</p>
              <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                My <span className="text-primary">Skills</span> & Expertise
              </AnimatedText>
              <AnimatedText as="p" className="text-xl max-w-2xl mx-auto" delay={100}>
                Mastering modern technologies to build exceptional digital experiences
              </AnimatedText>
            </AnimatedSection>

            {/* Skills by Category */}
            {categories.map((category, catIndex) => {
              const categorySkills = techStack.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;
              return (
                <AnimatedSection key={category} className="mb-16" delay={catIndex * 50}>
                  <AnimatedText as="h2" className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    {category}
                  </AnimatedText>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill, i) => (
                      <AnimatedSection
                        key={skill.name}
                        className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                        delay={i * 50}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <AnimatedText as="h3" className="font-bold">{skill.name}</AnimatedText>
                            <p className="text-primary text-sm font-semibold">{skill.level}%</p>
                          </div>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </AnimatedSection>
              );
            })}

            {/* Tools Marquee */}
            <div className="mb-24 py-12 bg-card border-y border-border overflow-hidden">
              <div className="flex gap-12 animate-marquee">
                {[...techStack, ...techStack].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 shrink-0">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <span className="text-lg font-medium whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <AnimatedSection className="mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
                Certifications & <span className="text-primary">Achievements</span>
              </AnimatedText>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, i) => (
                  <AnimatedSection key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" delay={i * 75}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <AnimatedText as="h3" className="font-bold mb-1">{cert.title}</AnimatedText>
                    <AnimatedText as="p" className="text-sm" delay={25}>{cert.issuer}</AnimatedText>
                    <p className="text-primary text-sm mt-2">{cert.year}</p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="text-center bg-card border border-border rounded-2xl p-12">
              <AnimatedText as="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Got a project in mind?
              </AnimatedText>
              <AnimatedText as="p" className="mb-8 max-w-xl mx-auto" delay={50}>
                Let's discuss how my skills can help bring your vision to life
              </AnimatedText>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Start a Conversation <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
