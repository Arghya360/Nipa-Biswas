import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container relative z-10">
            {/* Back Button */}
            <AnimatedSection className="mb-8">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-6">
                <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                  {service.subtitle}
                </span>
                <AnimatedText
                  as="h1"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  {service.title}
                </AnimatedText>
                <AnimatedText as="p" className="text-lg max-w-lg" delay={100}>
                  {service.longDescription}
                </AnimatedText>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button className="gap-2" asChild>
                    <Link to="/contact">
                      Start a Project <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/contact">Free Consultation</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                What's Included
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Key <span className="text-primary">Features</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, i) => (
                <AnimatedSection
                  key={feature}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                  delay={i * 75}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature}</h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                How It Works
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                My <span className="text-primary">Process</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, i) => (
                <AnimatedSection
                  key={step.step}
                  className="relative"
                  delay={i * 100}
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all">
                    <div className="text-5xl font-bold text-primary/15 mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 z-10">
                      <ChevronRight className="w-6 h-6 text-primary/40" />
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                Why Choose This Service
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Key <span className="text-primary">Benefits</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, i) => (
                <AnimatedSection
                  key={benefit.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all text-center"
                  delay={i * 75}
                >
                  <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        {service.portfolioProjects && service.portfolioProjects.length > 0 && (
          <section className="py-24">
            <div className="container">
              <AnimatedSection className="text-center mb-16">
                <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                  My Work
                </span>
                <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                  Featured <span className="text-primary">Projects</span>
                </AnimatedText>
                <AnimatedText as="p" className="text-muted-foreground mt-4 max-w-2xl mx-auto" delay={50}>
                  Here are some of the projects I've delivered in this space — each crafted with attention to detail and a focus on results.
                </AnimatedText>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.portfolioProjects.map((project, i) => (
                  <AnimatedSection
                    key={project.title}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                    delay={i * 100}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                Tech Stack
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Technologies <span className="text-primary">Used</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, i) => (
                <AnimatedSection
                  key={tech}
                  className="bg-card border border-border rounded-full px-6 py-3 text-sm font-medium hover:border-primary/50 transition-all"
                  delay={i * 50}
                >
                  {tech}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold">
                Other <span className="text-primary">Services</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related, i) => (
                <AnimatedSection key={related.slug} delay={i * 100}>
                  <Link
                    to={`/services/${related.slug}`}
                    className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group h-full"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={related.heroImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{related.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center">
              <div className="bg-card border border-border rounded-2xl p-12 md:p-16 max-w-3xl mx-auto">
                <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </AnimatedText>
                <AnimatedText as="p" className="text-muted-foreground mb-8 max-w-md mx-auto" delay={50}>
                  Let's discuss your project and find the perfect solution for your needs.
                </AnimatedText>
                <Button className="gap-2" size="lg" asChild>
                  <Link to="/contact">
                    Contact Me <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
