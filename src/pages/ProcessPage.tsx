import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Search, PenTool, Code, Rocket, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discovery & Consultation",
      description: "We start with a detailed discussion to understand your vision, goals, target audience, and project requirements.",
      details: ["Initial meeting to discuss your project", "Understanding your business goals", "Identifying target audience", "Defining project scope and timeline"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      number: "02",
      icon: <Search className="w-8 h-8" />,
      title: "Research & Planning",
      description: "Deep dive into market research, competitor analysis, and creating a strategic roadmap for your project.",
      details: ["Market and competitor analysis", "User research and personas", "Technical architecture planning", "Project timeline and milestones"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      icon: <PenTool className="w-8 h-8" />,
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
      details: ["Wireframe creation", "UI/UX design mockups", "Interactive prototypes", "Design review and iterations"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      number: "04",
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Bringing designs to life with clean, efficient code using modern technologies and best practices.",
      details: ["Frontend development", "Backend integration", "Database setup", "Third-party integrations"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      number: "05",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Testing & QA",
      description: "Rigorous testing to ensure everything works flawlessly across all devices and browsers.",
      details: ["Cross-browser testing", "Mobile responsiveness", "Performance optimization", "Security audits"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      number: "06",
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support to ensure long-term success.",
      details: ["Production deployment", "Performance monitoring", "Ongoing maintenance", "Feature updates"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  ];

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-6 months." },
    { q: "What's your communication process?", a: "I provide regular updates through your preferred channel (Slack, Email, or calls) with weekly progress reports and demos." },
    { q: "Do you offer post-launch support?", a: "Yes! All projects include a support period, and I offer ongoing maintenance packages for long-term partnerships." },
    { q: "What if I need changes during development?", a: "I follow an agile approach, so changes can be incorporated during development. Major scope changes may affect timeline and cost." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container">
            {/* Header */}
            <AnimatedSection className="text-center mb-20">
              <p className="text-primary text-sm uppercase tracking-widest mb-4">How I Work</p>
              <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                My <span className="text-primary">Process</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-xl max-w-2xl mx-auto" delay={100}>
                A structured approach to deliver exceptional results on time and within budget
              </AnimatedText>
            </AnimatedSection>

            {/* Process Steps */}
            <div className="relative mb-24">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />
              
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <AnimatedSection key={i} className="relative" delay={i * 75}>
                    {/* Step Number Badge */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl z-10 hidden lg:flex">
                      {step.number}
                    </div>
                    
                    <div className="lg:ml-24 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-8 lg:p-10">
                          <div className="lg:hidden flex items-center gap-3 mb-4">
                            <span className="text-primary font-bold text-lg">{step.number}</span>
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              {step.icon}
                            </div>
                          </div>
                          <div className="hidden lg:flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all">
                              {step.icon}
                            </div>
                          </div>
                          <AnimatedText as="h2" className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</AnimatedText>
                          <AnimatedText as="p" className="mb-6" delay={50}>{step.description}</AnimatedText>
                          <ul className="space-y-2">
                            {step.details.map((detail, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <AnimatedSection className="max-w-3xl mx-auto mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked <span className="text-primary">Questions</span>
              </AnimatedText>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <AnimatedSection key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" delay={i * 75}>
                    <AnimatedText as="h3" className="font-bold text-lg mb-2">{faq.q}</AnimatedText>
                    <AnimatedText as="p" delay={25}>{faq.a}</AnimatedText>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12">
              <AnimatedText as="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </AnimatedText>
              <AnimatedText as="p" className="mb-8 max-w-xl mx-auto" delay={50}>
                Let's discuss your ideas and create something amazing together
              </AnimatedText>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Get In Touch <ArrowUpRight className="w-5 h-5" />
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

export default ProcessPage;
