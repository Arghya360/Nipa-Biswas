import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const processSteps = [
  {
    number: "01",
    title: "Requirement Gathering",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity. Project structure.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop",
  },
  {
    number: "02",
    title: "Planning & Research",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity. Project structure.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&h=400&fit=crop",
  },
  {
    number: "03",
    title: "Development Phase",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity. Project structure.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop",
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description: "I offer a range of professional services designed to meet your business needs with precision and creativity. Project structure.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop",
  },
];

const WorkProcess = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div className="section-subtitle">Work Process</div>
          <AnimatedText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            A Clear Process to Build{" "}
            <span className="highlight-text">Seamless Web Solutions</span>
          </AnimatedText>
        </AnimatedSection>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              className="group relative"
              delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {step.number}
                  </span>
                  <AnimatedText as="h3" className="text-lg md:text-xl font-bold uppercase">
                    {step.title.split(" ").map((word, i) => (
                      <span key={i} className="block leading-tight">
                        {word}
                      </span>
                    ))}
                  </AnimatedText>
                </div>
                <AnimatedText as="p" className="text-sm" delay={50}>
                  {step.description}
                </AnimatedText>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
