import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const projects = [
  {
    id: 1,
    category: "WEB DESIGN",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with seamless user experience, featuring product catalogs, secure checkout, and real-time inventory management. Built with React and integrated payment solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    projectSlug: "e-commerce-platform",
  },
  {
    id: 2,
    category: "MOBILE APP",
    title: "Fitness Tracking App",
    description:
      "A comprehensive fitness application that helps users track workouts, monitor progress, and achieve their health goals. Features include custom workout plans and real-time analytics.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    projectSlug: "fitness-tracking-app",
  },
  {
    id: 3,
    category: "BRANDING",
    title: "Luxury Brand Identity",
    description:
      "Complete brand identity design for a luxury lifestyle brand, including logo design, color palette, typography, and comprehensive brand guidelines for consistent visual communication.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
    projectSlug: "luxury-brand-identity",
  },
  {
    id: 4,
    category: "UI/UX DESIGN",
    title: "Dashboard Analytics",
    description:
      "An intuitive analytics dashboard designed for data-driven decision making. Features interactive charts, real-time updates, and customizable widgets for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    projectSlug: "dashboard-analytics",
  },
  {
    id: 5,
    category: "WEB DEVELOPMENT",
    title: "Portfolio Website",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations, responsive design, and optimized performance. Built with modern web technologies and best practices.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    projectSlug: "portfolio-website",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container">
          {/* Hero Section */}
          <AnimatedSection className="text-center mb-20">
            <span className="section-subtitle justify-center mb-4">
              PORTFOLIO
            </span>
            <AnimatedText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              My Featured <span className="text-primary">Works</span>
            </AnimatedText>
            <AnimatedText as="p" className="mt-6 max-w-2xl mx-auto text-lg" delay={100}>
              Explore my collection of projects showcasing creativity, technical expertise, and passion for exceptional design.
            </AnimatedText>
          </AnimatedSection>

          {/* Projects List */}
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 lg:gap-16 items-center group`}
                delay={index * 100}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border group-hover:border-primary/50 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg -z-10 group-hover:border-primary/40 transition-colors duration-500" />
                </div>

                {/* Project Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                    {project.category}
                  </span>
                  <AnimatedText as="h2" className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight" delay={50}>
                    {project.title}
                  </AnimatedText>
                  <AnimatedText as="p" className="leading-relaxed" delay={100}>
                    {project.description}
                  </AnimatedText>
                  <Link
                    to={`/projects/${project.projectSlug}`}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300 group/btn"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection className="mt-32 text-center" delay={200}>
            <div className="card-dark p-12 md:p-16 max-w-3xl mx-auto">
              <AnimatedText as="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Have a Project in Mind?
              </AnimatedText>
              <AnimatedText as="p" className="mb-8" delay={50}>
                Let's collaborate and bring your ideas to life with stunning design and flawless execution.
              </AnimatedText>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start a Project
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
