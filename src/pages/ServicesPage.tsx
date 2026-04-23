import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Code, Palette, Smartphone, Globe, Database, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      number: "01",
      title: "Web Development",
      slug: "web-development",
      description: "Building fast, responsive, and scalable websites using modern technologies like React, Next.js, and TypeScript.",
      features: ["Custom Web Applications", "E-commerce Solutions", "CMS Integration", "API Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      number: "02",
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      number: "03",
      title: "Mobile Development",
      slug: "mobile-development",
      description: "Developing cross-platform mobile applications with Flutter and React Native for iOS and Android.",
      features: ["Cross-Platform Apps", "Native Performance", "Push Notifications", "Offline Support"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "04",
      title: "SEO Optimization",
      slug: "seo-optimization",
      description: "Optimizing websites for search engines to improve visibility, traffic, and conversions.",
      features: ["Technical SEO", "Content Strategy", "Performance Audit", "Analytics Setup"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop"
    },
    {
      icon: <Database className="w-8 h-8" />,
      number: "05",
      title: "Backend Development",
      slug: "backend-development",
      description: "Building robust server-side applications with Node.js, Python, and cloud services.",
      features: ["REST APIs", "GraphQL", "Database Design", "Cloud Deployment"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "06",
      title: "DevOps & Deployment",
      slug: "devops-deployment",
      description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure for seamless deployments.",
      features: ["Docker & Kubernetes", "AWS/GCP/Azure", "CI/CD Pipelines", "Monitoring"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop"
    }
  ];

  const pricing = [
    { name: "Basic", price: "$500", description: "Perfect for small projects", features: ["Single Page Website", "Responsive Design", "Basic SEO", "1 Month Support"] },
    { name: "Professional", price: "$2,000", description: "For growing businesses", features: ["Multi-page Website", "Custom Design", "Advanced SEO", "3 Months Support", "CMS Integration"], popular: true },
    { name: "Enterprise", price: "Custom", description: "For large scale projects", features: ["Full Web Application", "Custom Features", "Priority Support", "Ongoing Maintenance", "Dedicated Manager"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container">
            {/* Header */}
            <AnimatedSection className="text-center mb-20">
              <p className="text-primary text-sm uppercase tracking-widest mb-4">What I Offer</p>
              <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                My <span className="text-primary">Services</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-xl max-w-2xl mx-auto" delay={100}>
                Comprehensive web development solutions tailored to your business needs
              </AnimatedText>
            </AnimatedSection>

            {/* Services Grid */}
            <div className="space-y-8 mb-24">
              {services.map((service, i) => (
                <AnimatedSection
                  key={i}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                  delay={i * 75}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all">
                          {service.icon}
                        </div>
                        <span className="text-5xl font-bold text-muted-foreground/20">{service.number}</span>
                      </div>
                      <AnimatedText as="h2" className="text-3xl font-bold mb-4">{service.title}</AnimatedText>
                      <AnimatedText as="p" className="mb-6" delay={50}>{service.description}</AnimatedText>
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-fit gap-2 group-hover:bg-primary group-hover:text-background group-hover:border-primary [&_svg]:group-hover:text-background transition-all" asChild>
                        <Link to={`/services/${service.slug}`}>
                          Learn More <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent lg:block hidden" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Pricing */}
            <AnimatedSection className="mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-4">
                Transparent <span className="text-primary">Pricing</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-center mb-12 max-w-xl mx-auto" delay={50}>
                Choose a plan that fits your needs. All plans include free consultation.
              </AnimatedText>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((plan, i) => (
                  <AnimatedSection
                    key={i}
                    className={`bg-card border rounded-2xl p-8 relative ${plan.popular ? 'border-primary' : 'border-border'}`}
                    delay={i * 100}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <AnimatedText as="h3" className="text-xl font-bold mb-2">{plan.name}</AnimatedText>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <AnimatedText as="p" className="text-sm mb-6" delay={25}>{plan.description}</AnimatedText>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
