import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowRight, Code, Palette, Smartphone, Globe, Database, Rocket, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

// Interactive Showcase Services (from design screenshot)
const interactiveServices = [
  {
    id: "4",
    number: "4. Digital Strategy & Marketing",
    title: "Digital Strategy & Marketing",
    headline:
      "Data-driven marketing strategies that accelerate growth. From multi-channel campaigns to precision audience targeting, we design campaigns that deliver measurable ROI and long-term brand equity.",
    subFeatures: [
      "Growth Strategy",
      "Paid Advertising",
      "Audience Targeting",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    number: "5. E-Commerce Solutions",
    title: "E-Commerce Solutions",
    headline:
      "End-to-end e-commerce platforms engineered for sales. We craft intuitive shopping experiences, seamless checkout flows, and high-converting storefronts built for scale.",
    subFeatures: [
      "Custom Storefronts",
      "Payment Gateways",
      "Inventory Management",
      "Performance Tuning",
      "Conversion Rate Optimization",
    ],
    slug: "e-commerce-development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    number: "6. User Research & Personas",
    title: "User Research & Personas",
    headline:
      "Deep human-centered research that uncovers real customer needs. We analyze user behaviors, test usability, and map comprehensive customer journeys to guide smart product decisions.",
    subFeatures: [
      "User Interviews",
      "Persona Development",
      "Usability Testing",
      "Journey Mapping",
      "Behavioral Analytics",
    ],
    slug: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    number: "7. Visual Identity Design",
    title: "Visual Identity Design",
    headline:
      "We go beyond logos — building complete visual identities that tell your story and reflect your values. From color palettes to typography, tone of voice to brand guidelines, we shape every element to ensure your brand stands out across every touching.",
    subFeatures: [
      "Logo design",
      "Typography & color systems",
      "Brand guidelines",
      "Art Direction",
      "Motion Identity",
    ],
    slug: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    number: "8. Stationery & Print Design",
    title: "Stationery & Print Design",
    headline:
      "Tangible brand experiences that leave lasting impressions. We design high-end business cards, packaging, promotional collateral, and editorial layouts crafted with precision print standards.",
    subFeatures: [
      "Business Collateral",
      "Packaging Design",
      "Print Specifications",
      "Brochures & Catalogs",
      "Event Materials",
    ],
    slug: "branding",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(interactiveServices[3]); // Default to Visual Identity Design

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
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "07",
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence, drive traffic, and increase conversions.",
      features: ["Social Media Marketing", "SEO & SEM", "Content Marketing", "Google & Facebook Ads"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ];

  const pricing = [
    { name: "Basic", price: "$500", description: "Perfect for small projects", features: ["Single Page Website", "Responsive Design", "Basic SEO", "1 Month Support"] },
    { name: "Professional", price: "$2,000", description: "For growing businesses", features: ["Multi-page Website", "Custom Design", "Advanced SEO", "3 Months Support", "CMS Integration"], popular: true },
    { name: "Enterprise", price: "Custom", description: "For large scale projects", features: ["Full Web Application", "Custom Features", "Priority Support", "Ongoing Maintenance", "Dedicated Manager"] }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#ccff00] selection:text-black">
      <Header />
      <main className="pt-24 pb-20">
        <section className="py-12">
          <div className="container">
            {/* Header: What I Offer */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-[#ccff00] text-sm uppercase tracking-widest mb-4 font-semibold">What I Offer</p>
              <AnimatedText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-[#ccff00]">Services</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-zinc-400 text-lg max-w-2xl mx-auto" delay={100}>
                Comprehensive web development solutions tailored to your business needs
              </AnimatedText>
            </AnimatedSection>

            {/* Interactive Showcase Section from Design Screenshot */}
            <AnimatedSection className="mb-24 bg-[#141414] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
              {/* Top Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
                    <span className="text-zinc-400 font-mono text-xs font-semibold tracking-wider">
                      {"{02} Our Services"}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    We are offering the best solutions
                  </h2>
                </div>
                <div className="lg:col-span-4 flex items-center lg:justify-end pt-2">
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
                    We offer a full range of digital services to help your brand stand out, connect, and grow.
                  </p>
                </div>
              </div>

              {/* 3-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Menu Items */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                  {interactiveServices.map((item) => {
                    const isSelected = activeService.id === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveService(item)}
                        className={`text-left text-lg sm:text-xl font-bold transition-all py-1.5 cursor-pointer block w-full ${
                          isSelected
                            ? "text-white pl-3 border-l-2 border-[#ccff00]"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {item.number}
                      </button>
                    );
                  })}
                </div>

                {/* Center Column: Active Service Box */}
                <div className="lg:col-span-4 bg-[#1b1b1b] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div className="space-y-6">
                    {/* Isometric Cube Vector */}
                    <div className="w-12 h-12 text-white">
                      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full stroke-current stroke-2">
                        <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" />
                        <path d="M24 4V24M42 14L24 24M6 14L24 24" />
                        <path d="M24 24V44M42 34L24 24M6 34L24 24" />
                      </svg>
                    </div>

                    {/* Headline Text */}
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      <strong className="text-white font-bold">{activeService.title} — </strong>
                      {activeService.headline}
                    </p>

                    {/* Capabilities with ⊹ */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      {activeService.subFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                          <span className="text-zinc-400">⊹</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="pt-8">
                    <Button
                      asChild
                      variant="outline"
                      className="bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-white rounded-full px-5 py-5 h-auto text-xs font-semibold gap-3 group"
                    >
                      <Link to={`/services/${activeService.slug}`}>
                        <div className="w-6 h-6 rounded-full bg-[#ccff00] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5 text-black" />
                        </div>
                        <span>Read more</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right Column: Hero Portrait */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 min-h-[340px] lg:min-h-0">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Detailed Services Grid */}
            <div className="space-y-8 mb-24">
              {services.map((service, i) => (
                <AnimatedSection
                  key={i}
                  className="group bg-[#171717] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#ccff00]/40 transition-all"
                  delay={i * 75}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] transition-all">
                          {service.icon}
                        </div>
                        <span className="text-5xl font-bold text-zinc-800">{service.number}</span>
                      </div>
                      <AnimatedText as="h2" className="text-3xl font-bold mb-4 text-white">{service.title}</AnimatedText>
                      <AnimatedText as="p" className="mb-6 text-zinc-400" delay={50}>{service.description}</AnimatedText>
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-fit gap-2 border-zinc-700 text-white hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all" asChild>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-transparent lg:block hidden" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Pricing */}
            <AnimatedSection className="mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Transparent <span className="text-[#ccff00]">Pricing</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-center mb-12 max-w-xl mx-auto text-zinc-400" delay={50}>
                Choose a plan that fits your needs. All plans include free consultation.
              </AnimatedText>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((plan, i) => (
                  <AnimatedSection
                    key={i}
                    className={`bg-[#171717] border rounded-2xl p-8 relative ${plan.popular ? 'border-[#ccff00]' : 'border-zinc-800'}`}
                    delay={i * 100}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black text-xs font-bold px-4 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <AnimatedText as="h3" className="text-xl font-bold mb-2 text-white">{plan.name}</AnimatedText>
                    <div className="text-4xl font-bold text-[#ccff00] mb-2">{plan.price}</div>
                    <AnimatedText as="p" className="text-sm mb-6 text-zinc-400" delay={25}>{plan.description}</AnimatedText>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-[#ccff00] text-black font-bold hover:bg-[#b8e600]' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`} asChild>
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
