import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

// 6 Core Skill Feature Cards
const coreSkillCards = [
  {
    id: "01",
    hasDot: true,
    title: "Website Design & Development",
    description:
      "We combine creativity, strategy and technology deliver digital services that help businesses.",
    tags: ["Web Design", "Responsive Design"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
        <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
  {
    id: "02",
    hasDot: false,
    title: "Search Engine Optimization",
    description:
      "Our SEO services help businesses improve their visibility on search engines.",
    tags: ["Website Ranking", "Organic Growth"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="m9 10 2 2 4-4" />
        </svg>
        <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
  {
    id: "03",
    hasDot: false,
    title: "Social Media Marketing",
    description:
      "We help brands grow their social presence through creative content.",
    tags: ["Social Media", "Online Campaigns"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M12 7.5a1.5 1.5 0 0 0-1.5 1.5c0 1.5 1.5 2.5 1.5 2.5s1.5-1 1.5-2.5a1.5 1.5 0 0 0-1.5-1.5z" />
        </svg>
        <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
  {
    id: "04",
    hasDot: false,
    title: "Branding & Identity Design",
    description:
      "We craft unique brand identities that reflect your vision and create a strong.",
    tags: ["Branding", "Logo Design"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
        <span className="absolute bottom-0 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
  {
    id: "05",
    hasDot: false,
    title: "Mobile App Design",
    description:
      "We build user-friendly mobile application that deliver smooth performance.",
    tags: ["Mobile UI", "App Development"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span className="absolute bottom-0 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
  {
    id: "06",
    hasDot: false,
    title: "Content Marketing & Strategy",
    description:
      "We create valuable content that attracts your audience, builds trust, and drives.",
    tags: ["Content", "Marketing"],
    renderIcon: () => (
      <div className="relative w-12 h-12">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <path d="M3 18h18" />
          <path d="M18 10l3-3m0 0l-3-3m3 3H12" />
        </svg>
        <span className="absolute bottom-0 -left-1 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
      </div>
    ),
  },
];

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
    { name: "Social Media Marketing", icon: "/icon/Social Media Marketing.png", level: 90, category: "Digital Marketing" },
    { name: "Search Engine Optimization (SEO)", icon: "/icon/(SEO).png", level: 88, category: "Digital Marketing" },
    { name: "Search Engine Marketing (SEM)", icon: "/icon/SEM.png", level: 85, category: "Digital Marketing" },
    { name: "Google Ads", icon: "/icon/Google Ads.png", level: 87, category: "Digital Marketing" },
    { name: "Facebook Ads", icon: "/icon/Facebook Ads.png", level: 88, category: "Digital Marketing" },
    { name: "Instagram Marketing", icon: "/icon/Instagram Marketing.png", level: 89, category: "Digital Marketing" },
    { name: "Content Marketing", icon: "/icon/Content Marketing.png", level: 85, category: "Digital Marketing" },
    { name: "Email Marketing", icon: "/icon/Email Marketing.png", level: 84, category: "Digital Marketing" },
    { name: "Lead Generation", icon: "/icon/(SEO).png", level: 86, category: "Digital Marketing" },
    { name: "Google Analytics", icon: "/icon/Google Ads.png", level: 90, category: "Digital Marketing" },
    { name: "Keyword Research", icon: "/icon/(SEO).png", level: 88, category: "Digital Marketing" },
    { name: "Content Strategy", icon: "/icon/Content Marketing.png", level: 87, category: "Digital Marketing" },
  ];

  const categories = ["Digital Marketing", "Frontend", "Backend", "Database", "Mobile", "Tools", "Design"];

  const certifications = [
    { title: "React Developer Certification", issuer: "Meta", year: "2024" },
    { title: "Full Stack Web Development", issuer: "Coursera", year: "2023" },
    { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#ccff00] selection:text-black">
      <Header />
      <main className="pt-24 pb-20">
        <section className="py-12">
          <div className="container">
            {/* Header for Tech Stack at Top */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-[#ccff00] text-sm uppercase tracking-widest mb-4 font-semibold">
                Tech Stack
              </p>
              <AnimatedText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-[#ccff00]">Skills</span> & Expertise
              </AnimatedText>
              <AnimatedText as="p" className="text-zinc-400 text-lg max-w-2xl mx-auto" delay={100}>
                Mastering modern technologies to build exceptional digital experiences
              </AnimatedText>
            </AnimatedSection>

            {/* Top 6-Card Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {coreSkillCards.map((card, index) => (
                <AnimatedSection
                  key={card.id}
                  className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#ccff00]/40 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all group"
                  delay={index * 75}
                >
                  <div className="space-y-4">
                    {/* Header of card: Icon + Number badge */}
                    <div className="flex items-center justify-between">
                      {card.renderIcon()}
                      <div className="flex items-center gap-2">
                        {card.hasDot && (
                          <span className="w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_8px_#ccff00]" />
                        )}
                        <span className="text-zinc-400 font-mono text-sm font-semibold tracking-wider">
                          {"{ "}{card.id}{" }"}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white pt-2 leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Divider & Tags */}
                  <div className="pt-8">
                    <div className="border-t border-zinc-800/80 pt-5 flex flex-wrap gap-2.5">
                      {card.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="inline-block bg-zinc-800/70 border border-zinc-700/40 text-zinc-300 text-xs px-3.5 py-1.5 rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Skills by Category */}
            {categories.map((category, catIndex) => {
              const categorySkills = techStack.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;
              return (
                <AnimatedSection key={category} className="mb-16" delay={catIndex * 50}>
                  <AnimatedText as="h2" className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#ccff00]" />
                    {category}
                  </AnimatedText>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill, i) => (
                      <AnimatedSection
                        key={skill.name}
                        className="bg-[#171717] border border-zinc-800 rounded-xl p-6 hover:border-[#ccff00]/40 transition-all group"
                        delay={i * 50}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <AnimatedText as="h3" className="font-bold text-white text-sm sm:text-base">{skill.name}</AnimatedText>
                            <p className="text-[#ccff00] text-sm font-semibold">{skill.level}%</p>
                          </div>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#ccff00] rounded-full transition-all duration-1000"
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
            <div className="mb-24 py-10 bg-[#171717] border-y border-zinc-800 overflow-hidden rounded-2xl">
              <div className="flex gap-12 animate-marquee">
                {[...techStack, ...techStack].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 shrink-0">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <span className="text-lg font-medium whitespace-nowrap text-zinc-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <AnimatedSection className="mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
                Certifications & <span className="text-[#ccff00]">Achievements</span>
              </AnimatedText>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, i) => (
                  <AnimatedSection key={i} className="bg-[#171717] border border-zinc-800 rounded-xl p-6 hover:border-[#ccff00]/40 transition-all" delay={i * 75}>
                    <div className="w-12 h-12 rounded-lg bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] mb-4">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <AnimatedText as="h3" className="font-bold mb-1 text-white">{cert.title}</AnimatedText>
                    <AnimatedText as="p" className="text-sm text-zinc-400" delay={25}>{cert.issuer}</AnimatedText>
                    <p className="text-[#ccff00] text-sm mt-2 font-semibold">{cert.year}</p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="text-center bg-[#171717] border border-zinc-800 rounded-2xl p-12">
              <AnimatedText as="h3" className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Got a project in mind?
              </AnimatedText>
              <AnimatedText as="p" className="mb-8 max-w-xl mx-auto text-zinc-400" delay={50}>
                Let's discuss how my skills can help bring your vision to life
              </AnimatedText>
              <Button size="lg" className="gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold rounded-full px-8 py-6 h-auto" asChild>
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
