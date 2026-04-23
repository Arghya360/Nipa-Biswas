import { Play, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-12 h-12 border-2 border-primary/30 rotate-45 animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-2">
              <AnimatedText as="p" className="text-lg" delay={100}>
                Hi, <span className="text-primary">I am</span> <span className="text-foreground font-semibold">Nipa Biswas</span>
              </AnimatedText>
              <AnimatedText as="p" className="uppercase tracking-wider text-sm" delay={200}>
                Digital Marketer
              </AnimatedText>
            </div>

            <AnimatedText as="h1" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" delay={300}>
              SHAPE THE FUTURE{" "}
              <span className="block">
                WITH <span className="highlight-text">DATA-DRIVEN</span>
              </span>
              <span className="text-gradient">MARKETING STRATEGIES</span>
            </AnimatedText>

            <AnimatedText as="p" className="max-w-lg text-lg" delay={400}>
              We're a team of forward-thinking marketers working globally with leading brands. We believe real growth happens when you challenge the norm, embrace creativity, and turn insights into impactful campaigns.
            </AnimatedText>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 group">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors fill-current" />
                </div>
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  Show Reel
                </span>
              </button>
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 rounded-full blur-2xl" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] rounded-full overflow-hidden border-4 border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <img
                  src="/main%20pictrure.jpeg"
                  alt="Nipa Biswas - Digital Marketer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-card border border-border rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-[10px] sm:text-xs font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Years</p>
                    <p className="text-xs sm:text-sm font-semibold">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
