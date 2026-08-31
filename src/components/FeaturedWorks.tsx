import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  "All",
  "Branding & Identity",
  "Social Media Marketing",
  "UI/UX Design",
  "Web Development",
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Growth Platform",
    category: "Web Development",
    tag: "Web Development",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    link: "/projects/e-commerce-platform",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    tag: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    link: "/projects/corporate-redesign",
  },
  {
    id: 3,
    title: "Corporate Brand Identity",
    category: "Branding & Identity",
    tag: "Branding & Identity",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
    link: "/projects/brand-identity",
  },
];

const FeaturedWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d0d] border-b border-zinc-800/60">
      <div className="container relative z-10">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <AnimatedSection className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                <span className="text-[#ccff00] text-sm">✻</span>
                <span>Our Featured Works</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight">
              Turn ideas into powerful digital experience
            </h2>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection
            className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6 pt-2"
            delay={150}
          >
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md lg:text-left">
              We combine creativity, technology, and strategic thinking to deliver
              digital solutions that help businesses grow and succeed online.
            </p>
            <Button
              asChild
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold rounded-full px-6 py-5 h-auto text-sm group shadow-[0_0_20px_rgba(204,255,0,0.25)] transition-all"
            >
              <Link to="/projects" className="flex items-center gap-3">
                <span>View Projects</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </div>
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Filter Tabs */}
        <AnimatedSection
          className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-3 mb-12"
          delay={200}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                    ? "bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </AnimatedSection>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-zinc-800/80 flex flex-col justify-end p-6 sm:p-7 transition-all duration-500 hover:border-[#ccff00]/50 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              delay={index * 100}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Content Box */}
              <div className="relative z-10 space-y-4">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
                  <span className="text-[#ccff00] text-sm font-bold">✻</span>
                  <span>{project.tag}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                {/* Divider Line & Bottom Link */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group/link hover:text-[#ccff00] transition-colors"
                  >
                    <span>Explore Work</span>
                    <div className="w-6 h-6 rounded-full bg-[#ccff00] flex items-center justify-center transition-transform group-hover/link:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </div>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Floating CTA Bar */}
        <AnimatedSection className="flex justify-center" delay={300}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#181818] border border-zinc-800/90 shadow-xl">
            <div className="flex items-center -space-x-1.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="Representative"
                className="w-7 h-7 rounded-full border border-zinc-700 object-cover"
              />
              <div className="w-7 h-7 rounded-full bg-[#ccff00] flex items-center justify-center shadow-md">
                <Phone className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
            <span className="text-zinc-300 text-xs sm:text-sm">
              Let's make something great work together.{" "}
              <Link
                to="/projects"
                className="text-[#ccff00] underline hover:text-[#b8e600] font-semibold transition-colors"
              >
                View All Projects.
              </Link>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedWorks;
