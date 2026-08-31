import { Play, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(59,130,246,0))]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <AnimatedSection className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <AnimatedText 
                as="div" 
                className="inline-block"
                delay={0}
              >
                <span className="text-primary text-lg font-semibold tracking-widest uppercase">Welcome to My Portfolio</span>
              </AnimatedText>
              
              <AnimatedText 
                as="h1" 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight" 
                delay={100}
              >
                Hi, I'm <span className="text-primary">Nipa Biswas</span>
              </AnimatedText>
              
              <AnimatedText 
                as="h2" 
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient" 
                delay={200}
              >
                Full-Stack Developer & Digital Marketer
              </AnimatedText>
            </div>

            {/* Description */}
            <AnimatedText 
              as="p" 
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed" 
              delay={300}
            >
              I transform ideas into powerful digital solutions. With expertise in web development, mobile apps, and digital marketing, I help businesses grow and succeed in the digital world.
            </AnimatedText>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <AnimatedSection delay={400}>
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  <ArrowUpRight className="w-5 h-5" />
                  Get In Touch
                </Button>
              </AnimatedSection>
              
              <AnimatedSection delay={500}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 text-lg px-8 py-6 border-primary/30 hover:border-primary"
                >
                  <Play className="w-5 h-5 fill-current" />
                  View My Work
                </Button>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection className="pt-8 border-t border-border grid grid-cols-3 gap-8" delay={600}>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">30+</div>
                <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">5+</div>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <AnimatedSection delay={200} className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-full md:w-96 md:h-[500px] lg:w-full lg:h-[600px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                <img
                  src="/main%20pictrure.jpeg"
                  alt="Nipa Biswas - Full Stack Developer & Digital Marketer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Card - Skills */}
              <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-lg backdrop-blur-sm max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                      <span className="text-lg">⭐</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Featured Skills</p>
                    <p className="text-sm font-semibold">React, Node.js, Digital Marketing</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
