import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { getProjectBySlug, projectsData } from "@/data/projectsData";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container relative z-10">
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
                  {project.category}
                </span>
                <AnimatedText
                  as="h1"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  {project.title}
                </AnimatedText>
                <AnimatedText as="p" className="text-lg text-muted-foreground max-w-lg" delay={100}>
                  {project.subtitle}
                </AnimatedText>
                <AnimatedText as="p" className="leading-relaxed max-w-lg" delay={150}>
                  {project.longDescription}
                </AnimatedText>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button className="gap-2" asChild>
                    <Link to="/contact">
                      Start Similar Project <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to={`/services/${project.relatedServiceSlug}`}>
                      View Service
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                What I Built
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Key <span className="text-primary">Features</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <AnimatedSection
                  key={feature}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  delay={i * 75}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature}</h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots / Demo Works */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                Project Showcase
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Demo <span className="text-primary">Screenshots</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-muted-foreground mt-4 max-w-2xl mx-auto" delay={50}>
                A closer look at the key screens and interfaces I designed and developed for this project.
              </AnimatedText>
            </AnimatedSection>

            <div className="space-y-20">
              {project.screenshots.map((shot, i) => (
                <AnimatedSection
                  key={shot.title}
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center`}
                  delay={i * 100}
                >
                  <div className="w-full md:w-3/5">
                    <div className="rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 group">
                      <img
                        src={shot.image}
                        alt={shot.title}
                        className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/5 space-y-4">
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                      Screen {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold">{shot.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {shot.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                Built With
              </span>
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mt-4">
                Technologies <span className="text-primary">Used</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, i) => (
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

        {/* Related Projects */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold">
                Other <span className="text-primary">Projects</span>
              </AnimatedText>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related, i) => (
                <AnimatedSection key={related.slug} delay={i * 100}>
                  <Link
                    to={`/projects/${related.slug}`}
                    className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group h-full"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={related.heroImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                      {related.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{related.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <AnimatedSection className="text-center">
              <div className="bg-card border border-border rounded-2xl p-12 md:p-16 max-w-3xl mx-auto">
                <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
                  Want Something Similar?
                </AnimatedText>
                <AnimatedText as="p" className="text-muted-foreground mb-8 max-w-md mx-auto" delay={50}>
                  Let's discuss your project and create something amazing together.
                </AnimatedText>
                <Button className="gap-2" size="lg" asChild>
                  <Link to="/contact">
                    Get in Touch <ArrowUpRight className="w-4 h-4" />
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

export default ProjectDetailPage;
