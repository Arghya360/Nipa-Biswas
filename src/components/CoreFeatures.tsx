import { ArrowRight, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

// Google Icon SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
];

const CoreFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a] border-b border-zinc-800/60">
      <div className="container relative z-10">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column */}
          <AnimatedSection className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                <span className="text-[#ccff00] text-sm">✻</span>
                <span>Our Core Features</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight">
              Smart digital strategy that deliver real results
            </h2>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection
            className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6 pt-2"
            delay={150}
          >
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md lg:text-left">
              We combine creativity, technology, and strategic thinking to deliver
              digital solutions that help businesses grow and succeed online.
            </p>
            <Button
              asChild
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold rounded-full px-6 py-5 h-auto text-sm group shadow-[0_0_20px_rgba(204,255,0,0.25)] transition-all"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <span>Contact Us</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </div>
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Top 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Seamless Collaboration with Orbital Icons */}
          <AnimatedSection
            className="bg-[#171717] border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#ccff00]/40 transition-all min-h-[300px] md:min-h-[320px]"
            delay={100}
          >
            {/* Orbital concentric arcs graphic */}
            <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 260 130" fill="none">
                {/* Arc 1 */}
                <path
                  d="M 20 125 A 110 110 0 0 1 240 125"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Arc 2 */}
                <path
                  d="M 55 125 A 75 75 0 0 1 205 125"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                />
                {/* Arc 3 */}
                <path
                  d="M 90 125 A 40 40 0 0 1 170 125"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Orbiting Logo 1: Purple Arrow */}
              <div className="absolute left-7 top-2 w-7 h-7 rounded-lg bg-zinc-900 border border-purple-500/40 flex items-center justify-center shadow-lg">
                <span className="text-purple-400 font-bold text-xs">❯</span>
              </div>

              {/* Orbiting Logo 2: Asana 3 dots */}
              <div className="absolute left-[45%] top-1.5 w-6 h-6 rounded-full bg-zinc-900 border border-rose-500/40 flex items-center justify-center shadow-lg">
                <div className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                </div>
              </div>

              {/* Orbiting Logo 3: Trello */}
              <div className="absolute right-7 top-2 w-6 h-6 rounded-lg bg-[#0079BF] flex items-center justify-center shadow-lg">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-2.5 bg-white rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                </div>
              </div>

              {/* Orbiting Logo 4: Upwork Green */}
              <div className="absolute left-14 bottom-1 w-7 h-7 rounded-full bg-zinc-900 border border-green-500/40 flex items-center justify-center shadow-lg">
                <span className="text-emerald-400 font-bold text-[10px]">up</span>
              </div>

              {/* Orbiting Logo 5: Slack */}
              <div className="absolute right-14 bottom-1 w-7 h-7 rounded-lg bg-zinc-900 border border-amber-500/40 flex items-center justify-center shadow-lg">
                <span className="text-amber-400 font-bold text-[11px]">#</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-1.5 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">Seamless Collaboration</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We combine creativity, technology, and strategic thinking to deliver
                digital solutions that help businesses.
              </p>
            </div>
          </AnimatedSection>

          {/* Card 2: Center Photo of Collaborating Women */}
          <AnimatedSection
            className="rounded-3xl overflow-hidden h-[260px] md:h-[280px] bg-zinc-900 border border-zinc-800/80 group self-center w-full"
            delay={200}
          >
            <img
              src="/Digital Experience.jpg"
              alt="Digital Experience"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </AnimatedSection>

          {/* Card 3: 5+ Years Experiences */}
          <AnimatedSection
            className="bg-[#171717] border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#ccff00]/40 transition-all min-h-[300px] md:min-h-[320px]"
            delay={300}
          >
            <div className="space-y-3">
              {/* Icon */}
              <div className="relative w-10 h-10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <circle cx="17" cy="11" r="3" />
                </svg>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#ccff00]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-1">
                5+ Years Experiences
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We combine creativity, technology, and strategic thinking to deliver
                high-performing digital solutions that help modern businesses scale,
                connect with their audience, and achieve long-term success.
              </p>
            </div>

            <div className="pt-4">
              <div className="border-t border-zinc-800/80 pt-4">
                <span className="inline-block bg-zinc-800/70 border border-zinc-700/40 text-zinc-300 text-xs px-3.5 py-1.5 rounded-md font-medium">
                  Industry Expertise
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom 2 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Review & Quote */}
          <AnimatedSection
            className="lg:col-span-8 bg-[#171717] border border-zinc-800/80 rounded-3xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            delay={400}
          >
            {/* Left Rating Block */}
            <div className="space-y-2 shrink-0">
              <div className="flex items-center -space-x-2.5">
                {avatars.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Customer"
                    className="w-9 h-9 rounded-full border-2 border-zinc-900 object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <GoogleIcon />
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-sm">4.9/5</span>
                  <div className="flex text-[#ccff00] text-sm">
                    {"★★★★★"}
                  </div>
                </div>
              </div>
              <p className="text-zinc-500 text-xs">Based on 2500 reviews</p>
            </div>

            {/* Right Quote Block */}
            <div className="sm:border-l sm:border-zinc-800/80 sm:pl-8">
              <p className="text-zinc-200 text-sm sm:text-base italic leading-relaxed">
                “ Innovation, creativity & strategy come together to build digital
                solution that truly make an impact. ”
              </p>
            </div>
          </AnimatedSection>

          {/* Card 2: Contact Us */}
          <AnimatedSection
            className="lg:col-span-4 bg-[#171717] border border-zinc-800/80 rounded-3xl p-7 flex flex-col justify-between hover:border-[#ccff00]/40 transition-all group"
            delay={450}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ccff00]">
                  <Headset className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Contact Us</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Have a project in mind or need expert digital solutions for business?
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#ccff00] group-hover:underline"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
