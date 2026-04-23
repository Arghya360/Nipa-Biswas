import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, MapPin, Download, Smile, Users, RefreshCw, Clock, CheckCircle, Code, Palette, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const AboutPage = () => {
  const stats = [
    { number: "120", suffix: "+", icon: <Users className="w-5 h-5 text-primary" />, title: "HAPPY CLIENTS", subtitle: "WORLDWIDE" },
    { number: "90", suffix: "%", icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "CLIENT RETENTION", subtitle: "RATE" },
    { number: "07", suffix: "+", icon: <Clock className="w-5 h-5 text-primary" />, title: "YEARS OF", subtitle: "EXPERIENCE" },
    { number: "250", suffix: "+", icon: <CheckCircle className="w-5 h-5 text-primary" />, title: "PROJECTS", subtitle: "DELIVERED" }
  ];

  const values = [
    { icon: <Code className="w-8 h-8" />, title: "Clean Code", description: "Writing maintainable, scalable, and well-documented code that stands the test of time." },
    { icon: <Palette className="w-8 h-8" />, title: "Creative Design", description: "Crafting visually stunning interfaces that engage users and elevate brands." },
    { icon: <Zap className="w-8 h-8" />, title: "Performance", description: "Optimizing every millisecond to deliver lightning-fast user experiences." },
    { icon: <Heart className="w-8 h-8" />, title: "Passion", description: "Bringing genuine enthusiasm and dedication to every project I undertake." }
  ];

  const journey = [
    { year: "2018", title: "Started Coding", description: "Began my journey with HTML, CSS, and JavaScript" },
    { year: "2019", title: "First Freelance", description: "Completed my first professional web development project" },
    { year: "2020", title: "Full Stack", description: "Expanded skills to include backend technologies" },
    { year: "2021", title: "React Expert", description: "Specialized in React and modern frontend frameworks" },
    { year: "2022", title: "Team Lead", description: "Led development teams on enterprise projects" },
    { year: "2024", title: "Tech Consultant", description: "Advising startups on technical architecture" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container relative">
            <AnimatedSection className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                  About
                </AnimatedText>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                  <Smile className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground" />
                </div>
                <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                  Me
                </AnimatedText>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm mb-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">BASED IN INDIA</span>
                <span className="text-muted-foreground">•</span>
                <button className="text-primary hover:underline flex items-center gap-1">
                  DOWNLOAD RESUME <Download className="w-3 h-3" />
                </button>
              </div>
            </AnimatedSection>

            {/* Main Intro */}
            <AnimatedSection className="max-w-4xl mx-auto text-center mb-16" delay={100}>
              <AnimatedText as="p" className="text-xl md:text-2xl leading-relaxed">
                <span className="text-primary">✦</span> Hey! <span className="text-primary font-semibold italic">I'm Nipa Biswas.</span> A passionate web developer who transforms ideas into powerful digital experiences. With expertise in modern technologies and a keen eye for design, I build websites and applications that not only look stunning but perform flawlessly.
              </AnimatedText>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection className="max-w-4xl mx-auto mb-20" delay={150}>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-border">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=900&h=500&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-medium">Where creativity meets code</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all group" delay={i * 75}>
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}<span className="text-2xl">{stat.suffix}</span></div>
                  <AnimatedText as="p" className="text-xs uppercase tracking-wider">{stat.title}<br />{stat.subtitle}</AnimatedText>
                </AnimatedSection>
              ))}
            </div>

            {/* Values */}
            <AnimatedSection className="mb-24">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Core Values</span>
              </AnimatedText>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, i) => (
                  <AnimatedSection key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group" delay={i * 75}>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all">
                      {value.icon}
                    </div>
                    <AnimatedText as="h3" className="text-xl font-bold mb-2">{value.title}</AnimatedText>
                    <AnimatedText as="p" className="text-sm" delay={25}>{value.description}</AnimatedText>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Journey Timeline */}
            <AnimatedSection className="mb-16">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Journey</span>
              </AnimatedText>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
                <div className="space-y-8">
                  {journey.map((item, i) => (
                    <AnimatedSection key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} delay={i * 100}>
                      <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-card border border-border rounded-xl p-6 inline-block hover:border-primary/50 transition-all">
                          <span className="text-primary font-bold text-lg">{item.year}</span>
                          <AnimatedText as="h3" className="text-xl font-bold mt-1">{item.title}</AnimatedText>
                          <AnimatedText as="p" className="text-sm mt-2" delay={25}>{item.description}</AnimatedText>
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-primary shrink-0 hidden md:block" />
                      <div className="flex-1 hidden md:block" />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="text-center" delay={100}>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Let's Work Together <ArrowUpRight className="w-5 h-5" />
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

export default AboutPage;
