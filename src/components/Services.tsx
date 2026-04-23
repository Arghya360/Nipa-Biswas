import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const services = [
  {
    title: "Mobile App Development",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
    slug: "mobile-development",
  },
  {
    title: "CMS Integration",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    slug: "cms-integration",
  },
  {
    title: "Full-Stack Development",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
    slug: "full-stack-development",
  },
  {
    title: "E-Commerce Development",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    slug: "e-commerce-development",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="section-subtitle mb-4">What I Do?</div>
            <AnimatedText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Building Value with{" "}
              <span className="highlight-text">Code and Creativity</span>
            </AnimatedText>
          </div>
          <AnimatedText as="p" className="max-w-sm text-right" delay={100}>
            I offer a range of professional services designed to meet your business needs with precision and creativity.
          </AnimatedText>
        </AnimatedSection>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              className="service-item group"
              delay={index * 100}
            >
              <div className="flex-1 min-w-0">
                <AnimatedText as="h3" className="text-xl md:text-2xl font-bold uppercase group-hover:text-primary transition-colors mb-2">
                  {service.title}
                </AnimatedText>
                <AnimatedText as="p" className="text-sm hidden md:block" delay={50}>
                  {service.description}
                </AnimatedText>
              </div>

              {/* Image - Hidden on mobile, shown on hover on desktop */}
              <div className="hidden md:block w-48 h-28 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Arrow */}
              <Link
                to={`/services/${service.slug}`}
                className="w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(72,100%,56%,0.4)]"
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
