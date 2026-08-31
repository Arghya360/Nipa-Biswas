import { ArrowUpRight, MapPin, Download, Smile, Users, RefreshCw, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const About = () => {
  const stats = [
    {
      number: "120",
      suffix: "+",
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "PROUDLY SERVING HAPPY CLIENTS",
      subtitle: "WHO TRUST MY CREATIVITY."
    },
    {
      number: "90",
      suffix: "%",
      icon: <RefreshCw className="w-5 h-5 text-primary" />,
      title: "CLIENTS RETURN WITH FRESH IDEAS",
      subtitle: "AND NEW PROJECTS."
    },
    {
      number: "07",
      suffix: "+",
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "BRINGING YEARS OF EXPERTISE IN",
      subtitle: "CRAFTING DIGITAL EXPERIENCES."
    },
    {
      number: "250",
      suffix: "+",
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: "A TRACK RECORD OF SUCCESSFUL",
      subtitle: "PROJECTS DELIVERED"
    }
  ];

  const philosophy = [
    {
      title: "PERFECTION",
      highlight: "PERFEC",
      rest: "TION",
      description: "Perfection isn't just a goal, it's a journey. Each step refined with care and focus. From concept to final execution, excellence guides every decision.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=250&fit=crop"
    },
    {
      title: "INNOVATIVE",
      highlight: "INNOVA",
      rest: "TIVE",
      description: "Perfection isn't just a goal, it's a journey. Each step refined with care and focus. From concept to final execution, excellence guides every decision.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      title: "EXPERTISE",
      highlight: "EXPER",
      rest: "TISE",
      description: "Perfection isn't just a goal, it's a journey. Each step refined with care and focus. From concept to final execution, excellence guides every decision.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AnimatedText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              About
            </AnimatedText>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center">
              <Smile className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <AnimatedText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              Me
            </AnimatedText>
          </div>
          
          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">BASED IN INDIA,</span>
            <button className="text-primary hover:underline flex items-center gap-1">
              DOWNLOAD RESUME
              <Download className="w-3 h-3" />
            </button>
          </div>
        </AnimatedSection>

        {/* Main Intro Text */}
        <AnimatedSection className="max-w-5xl mx-auto text-center mb-12" delay={100}>
          <AnimatedText as="p" className="text-lg md:text-xl lg:text-2xl leading-relaxed uppercase tracking-wide">
            <span className="text-primary">✦</span> Hey! <span className="text-primary font-semibold italic">I'm Nipa Biswas.</span> I believe design is more than just visuals it's a language that tells stories, sparks emotions, and leaves a lasting impression. From crafting seamless digital experiences to bringing ideas to life through illustrations, I merge creativity with precision to shape work that truly connects and inspires.
          </AnimatedText>
        </AnimatedSection>

        {/* Hero Image */}
        <AnimatedSection className="max-w-4xl mx-auto mb-16" delay={200}>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=900&h=500&fit=crop"
              alt="Developer workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
              delay={index * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</span>
                  <span className="text-2xl md:text-3xl text-primary">{stat.suffix}</span>
                </div>
                {stat.icon}
              </div>
              <AnimatedText as="p" className="text-xs uppercase tracking-wider leading-relaxed">
                {stat.title}<br />
                {stat.subtitle}
              </AnimatedText>
            </AnimatedSection>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          {/* Section Header */}
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <AnimatedText as="h3" className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase italic leading-tight max-w-md">
              My Approach to Design and the Philosophy Behind It
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">-</span> CREATIVE DESIGN
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">-</span> EXPERT DEVELOPMENT
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">-</span> MASTERFUL EXECUTION
                </li>
              </ul>
              <Button variant="outline" className="gap-2 uppercase text-xs tracking-wider hover:bg-primary hover:text-background hover:border-primary [&:hover_svg]:text-background">
                Let's Talk About Project
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Philosophy Cards */}
          <div className="space-y-6">
            {philosophy.map((item, index) => (
              <AnimatedSection
                key={index}
                className="border-t border-border py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                delay={index * 150}
              >
                <div className="lg:col-span-3">
                  <AnimatedText as="h4" className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                    <span className="text-primary">{item.highlight}</span>
                    <span>{item.rest}</span>
                  </AnimatedText>
                </div>
                <div className="lg:col-span-5">
                  <AnimatedText as="p" className="text-sm leading-relaxed uppercase tracking-wide" delay={50}>
                    <span className="text-primary">Perfection</span> isn't just a goal, it's a journey. Each step refined with care and <span className="text-primary">focus</span>. From concept to final execution, excellence guides every decision.
                  </AnimatedText>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
