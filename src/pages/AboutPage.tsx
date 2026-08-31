import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowDownRight, Phone } from "lucide-react";
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

// Logoipsum SVGs
const LogoipsumSunburst = () => (
  <div className="flex items-center gap-3">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="6" fill="#ccff00" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect
          key={i}
          x="18.5"
          y="3"
          width="3"
          height="8"
          rx="1.5"
          fill="#ccff00"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
    </svg>
    <span className="text-xl font-bold tracking-tight text-white">Logoipsum</span>
  </div>
);

const LogoipsumWaves = () => (
  <div className="flex items-center gap-3">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <path
        d="M6 14C12 8 20 8 26 14C30 18 34 18 38 14"
        stroke="#ccff00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M6 21C12 15 20 15 26 21C30 25 34 25 38 21"
        stroke="#ccff00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M6 28C12 22 20 22 26 28C30 32 34 32 38 28"
        stroke="#ccff00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
    <span className="text-xl font-bold tracking-tight text-white">Logoipsum</span>
  </div>
);

const LogoipsumLightning = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-[#ccff00] flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tight text-white">Logoipsum</span>
  </div>
);

const LogoipsumPetals = () => (
  <div className="flex items-center gap-3">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="11" r="5" fill="#ccff00" />
      <circle cx="20" cy="29" r="5" fill="#ccff00" />
      <circle cx="11" cy="20" r="5" fill="#ccff00" />
      <circle cx="29" cy="20" r="5" fill="#ccff00" />
      <circle cx="20" cy="20" r="2.5" fill="#121212" />
    </svg>
    <span className="text-xl font-bold tracking-tight text-white">Logoipsum</span>
  </div>
);

const LogoipsumDrop = () => (
  <div className="flex items-center gap-3">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 6C13.5 12 9 17.5 9 24C9 30.5 14 35 20 35C26 35 31 30.5 31 24C31 17.5 26.5 12 20 6Z"
        fill="#ccff00"
      />
      <circle cx="20" cy="23" r="6" fill="#121212" />
    </svg>
    <span className="text-xl font-bold tracking-tight text-white">Logoipsum</span>
  </div>
);

// High-resolution user avatars
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#ccff00] selection:text-black">
      <Header />

      <main className="pt-24 pb-20">
        {/* =========================================================================
            SECTION 1: HERO / ABOUT US (Screenshot 3)
           ========================================================================= */}
        <section className="relative pt-12 pb-24 overflow-hidden border-b border-zinc-800/60">
          {/* Subtle background glow & decorative mark */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ccff00]/5 blur-[140px] pointer-events-none rounded-full" />
          
          <div className="container relative z-10">
            {/* Top Badge with dot */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300">
                <span className="text-[#ccff00] text-sm">✻</span>
                <span>About Us</span>
              </div>
            </div>

            {/* Main Headline */}
            <AnimatedSection className="max-w-5xl mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight">
                Dedicated expert working together to create impactful digital solutions and results
              </h1>
            </AnimatedSection>

            {/* Two-Column Stats & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
              {/* Left Column: 25 Years Stat */}
              <AnimatedSection className="lg:col-span-6 space-y-4" delay={100}>
                <div className="flex items-baseline gap-3">
                  <span className="text-8xl sm:text-9xl md:text-[140px] font-extrabold text-white tracking-tighter leading-none">
                    5
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-white self-start pt-3">
                    Year
                  </span>
                </div>
                <div>
                  <span className="inline-block bg-[#ccff00] text-black font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.25)]">
                    Digital Experience
                  </span>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed pt-2">
                  Years of Professional Experience in Digital Strategy, Design, and Marketing
                </p>
              </AnimatedSection>

              {/* Right Column: Narrative & Ratings + Rotating Stamp */}
              <AnimatedSection className="lg:col-span-6 space-y-8 flex flex-col justify-between" delay={200}>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
                  We help businesses build a strong and impactful digital presence through creative strategies and innovative solutions tailored to their goals.
                </p>

                <div className="flex flex-wrap items-center gap-8 pt-4">
                  {/* Rotating Circular Contact Stamp */}
                  <Link
                    to="/contact"
                    className="relative group w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center cursor-pointer select-none shrink-0"
                    title="Contact Us"
                  >
                    <svg
                      className="w-full h-full animate-[spin_12s_linear_infinite]"
                      viewBox="0 0 100 100"
                    >
                      <path
                        id="contactPath"
                        d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        fill="none"
                      />
                      <text className="text-[9px] fill-zinc-300 uppercase tracking-[2.6px] font-medium">
                        <textPath href="#contactPath">
                          ✻ Contact Us ✻ Contact Us ✻
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 m-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ccff00] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                      <ArrowDownRight className="w-5 h-5 text-black" />
                    </div>
                  </Link>

                  {/* Google Reviews Stack */}
                  <div className="space-y-2">
                    <div className="flex items-center -space-x-2.5">
                      {avatars.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="Reviewer avatar"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-zinc-900 object-cover"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <GoogleIcon />
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-sm sm:text-base">4.9/5</span>
                        <div className="flex text-[#ccff00] text-sm">
                          {"★★★★★"}
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs">Based on 2500 reviews</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Bottom: Trusted Brands Strip */}
            <AnimatedSection className="pt-12 border-t border-zinc-800/80" delay={300}>
              <p className="text-center text-xs uppercase tracking-widest text-zinc-400 font-medium mb-8">
                Powered by Trusted Brand Partnerships
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
                <LogoipsumSunburst />
                <LogoipsumWaves />
                <LogoipsumLightning />
                <LogoipsumPetals />
                <LogoipsumDrop />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: OUR BENEFITS (Screenshot 4)
           ========================================================================= */}
        <section className="py-24 relative overflow-hidden border-b border-zinc-800/60">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Lime Circle with Portrait & Floating 20K+ Reviews Card */}
              <AnimatedSection className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                  {/* Big Lime Circle Background */}
                  <div className="w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-[#ccff00] flex items-end justify-center overflow-hidden shadow-[0_0_60px_rgba(204,255,0,0.2)]">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                      alt="Expert Team Member"
                      className="w-full h-full object-cover object-top scale-105"
                    />
                  </div>

                  {/* Floating Reviews Card */}
                  <div className="absolute -bottom-4 right-0 sm:right-2 bg-[#181818]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-2.5 min-w-[200px]">
                    <div className="flex items-center -space-x-2">
                      {avatars.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="Customer"
                          className="w-8 h-8 rounded-full border-2 border-[#181818] object-cover"
                        />
                      ))}
                    </div>
                    <div className="flex text-[#ccff00] text-sm tracking-wide">
                      {"★★★★★"}
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                      More Than 20K+ Reviews
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Column: Benefits Content */}
              <AnimatedSection className="lg:col-span-7 space-y-8" delay={150}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                  <span className="text-[#ccff00] text-sm">✻</span>
                  <span>Our Benefits</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Partnering with us drives real business growth
                </h2>

                {/* Subtitle */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  By partnering with us, you gain access to strategic expertise, creative solutions, and data-driven insights that help your business grow faster.
                </p>

                {/* Benefits List */}
                <div className="space-y-6 pt-2">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/60 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">Accelerated Business Growth</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        We implement data-driven strategies and innovative solutions that help your business grow faster while delivering clear.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/60 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">Tailored Solutions for Long-Term Success</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Our customized approach ensures your business gets solution designed specifically for your goals, supporting sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Us Button */}
                <div className="pt-2">
                  <Button
                    asChild
                    className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold rounded-full px-6 py-6 h-auto text-base group shadow-[0_0_25px_rgba(204,255,0,0.3)] transition-all"
                  >
                    <Link to="/contact" className="flex items-center gap-3">
                      <span>Contact Us</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHAT DRIVES US (Screenshot 1)
           ========================================================================= */}
        <section className="py-24 relative overflow-hidden border-b border-zinc-800/60">
          <div className="container relative z-10">
            {/* Header with dot indicator */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                <span className="text-[#ccff00] text-sm">✻</span>
                <span>What Drives Us</span>
              </div>
            </div>

            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Our purpose & direction
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                From strategy to execution, we focus on driving impactful outcomes that support your business expansion and long-term success.
              </p>
            </AnimatedSection>

            {/* 3 Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Card 1: Our Mission */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ccff00]/40 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all group"
                delay={100}
              >
                <div className="space-y-4">
                  {/* Icon with lime accent circle */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 group-hover:scale-105 transition-transform"
                    >
                      <path d="m12 19 7-7 3 3-7 7-3-3z" />
                      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                      <path d="m2 2 7.586 7.586" />
                      <circle cx="11" cy="11" r="2" />
                    </svg>
                    <span className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#ccff00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">Our Mission</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our mission is to empower businesses with innovative digital solutions.
                  </p>
                </div>
                <div className="pt-8">
                  <div className="border-t border-zinc-800/80 pt-6">
                    <span className="inline-block bg-zinc-800/70 border border-zinc-700/40 text-zinc-300 text-xs px-3.5 py-1.5 rounded-md font-medium">
                      Growth Mindset
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 2: Our Vision */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ccff00]/40 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all group"
                delay={200}
              >
                <div className="space-y-4">
                  {/* Icon with lime accent circle */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 group-hover:scale-105 transition-transform"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#ccff00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">Our Vision</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our vision is to become a leading digital agency known for innovation.
                  </p>
                </div>
                <div className="pt-8">
                  <div className="border-t border-zinc-800/80 pt-6">
                    <span className="inline-block bg-zinc-800/70 border border-zinc-700/40 text-zinc-300 text-xs px-3.5 py-1.5 rounded-md font-medium">
                      Collaboration
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 3: Our Values */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ccff00]/40 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all group"
                delay={300}
              >
                <div className="space-y-4">
                  {/* Icon with lime accent circle */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 group-hover:scale-105 transition-transform"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#ccff00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">Our Values</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our values are rooted in creativity, integrity, and innovation.
                  </p>
                </div>
                <div className="pt-8">
                  <div className="border-t border-zinc-800/80 pt-6">
                    <span className="inline-block bg-zinc-800/70 border border-zinc-700/40 text-zinc-300 text-xs px-3.5 py-1.5 rounded-md font-medium">
                      Innovation
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Pill Tags Row */}
            <AnimatedSection className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12" delay={400}>
              {[
                "Paid Advertising",
                "Brand Strategy",
                "Audience Targeting",
                "Custom Digital Solution",
              ].map((tag, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-[#1c1c1c] border border-zinc-800/90 text-zinc-200 text-sm font-medium flex items-center gap-2 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-[#ccff00] text-base font-bold">✻</span>
                  <span>{tag}</span>
                </div>
              ))}
            </AnimatedSection>

            {/* Bottom Floating CTA Capsule Bar */}
            <AnimatedSection className="flex justify-center" delay={450}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#181818] border border-zinc-800/90 shadow-xl">
                <div className="flex items-center -space-x-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                    alt="Agent"
                    className="w-7 h-7 rounded-full border border-zinc-700 object-cover"
                  />
                  <div className="w-7 h-7 rounded-full bg-[#ccff00] flex items-center justify-center shadow-md">
                    <Phone className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>
                <span className="text-zinc-300 text-xs sm:text-sm">
                  Let's make something great work together.{" "}
                  <Link
                    to="/contact"
                    className="text-[#ccff00] underline hover:text-[#b8e600] font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR PROCESS (Screenshot 2)
           ========================================================================= */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10">
            {/* Header Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              {/* Left Column */}
              <AnimatedSection className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                    <span className="text-[#ccff00] text-sm">✻</span>
                    <span>Our Process</span>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  creative strategy & smart execution for growth
                </h2>
              </AnimatedSection>

              {/* Right Column */}
              <AnimatedSection className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6 pt-2" delay={150}>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md lg:text-left">
                  This process allows us deliver high quality digital solutions that help business connect with their audience and achieve real results.
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

            {/* 4 Process Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {/* Step .01 */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-7 relative overflow-hidden min-h-[310px] flex flex-col justify-between group hover:border-[#ccff00]/40 transition-all shadow-lg"
                delay={100}
              >
                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-105 transition-transform"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
                  </div>
                  <div className="pt-2">
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Research
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Research & Strategic Discovery Phase
                    </h3>
                  </div>
                </div>
                {/* Large Watermark Number */}
                <div className="text-right select-none">
                  <span className="text-5xl sm:text-6xl font-extrabold text-zinc-800/80 group-hover:text-zinc-700 transition-colors">
                    .01
                  </span>
                </div>
              </AnimatedSection>

              {/* Step .02 */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-7 relative overflow-hidden min-h-[310px] flex flex-col justify-between group hover:border-[#ccff00]/40 transition-all shadow-lg"
                delay={200}
              >
                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-105 transition-transform"
                    >
                      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                      <path d="M9 21h6" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
                  </div>
                  <div className="pt-2">
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Strategy
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Customized Strategy Development
                    </h3>
                  </div>
                </div>
                {/* Large Watermark Number */}
                <div className="text-right select-none">
                  <span className="text-5xl sm:text-6xl font-extrabold text-zinc-800/80 group-hover:text-zinc-700 transition-colors">
                    .02
                  </span>
                </div>
              </AnimatedSection>

              {/* Step .03 */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-7 relative overflow-hidden min-h-[310px] flex flex-col justify-between group hover:border-[#ccff00]/40 transition-all shadow-lg"
                delay={300}
              >
                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-105 transition-transform"
                    >
                      <path d="m18 2 4 4-14 14H4v-4L18 2z" />
                      <path d="m14.5 5.5 4 4" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
                  </div>
                  <div className="pt-2">
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Creative Solutions
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Creative Design & Development
                    </h3>
                  </div>
                </div>
                {/* Large Watermark Number */}
                <div className="text-right select-none">
                  <span className="text-5xl sm:text-6xl font-extrabold text-zinc-800/80 group-hover:text-zinc-700 transition-colors">
                    .03
                  </span>
                </div>
              </AnimatedSection>

              {/* Step .04 */}
              <AnimatedSection
                className="bg-[#171717] border border-zinc-800/80 rounded-2xl p-7 relative overflow-hidden min-h-[310px] flex flex-col justify-between group hover:border-[#ccff00]/40 transition-all shadow-lg"
                delay={400}
              >
                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div className="relative w-12 h-12">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-105 transition-transform"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#ccff00]" />
                  </div>
                  <div className="pt-2">
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Project Launch
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Launch & Growth Optimization
                    </h3>
                  </div>
                </div>
                {/* Large Watermark Number */}
                <div className="text-right select-none">
                  <span className="text-5xl sm:text-6xl font-extrabold text-zinc-800/80 group-hover:text-zinc-700 transition-colors">
                    .04
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* Bottom Footer Stats & Tagline */}
            <AnimatedSection className="text-center space-y-3 pt-6" delay={450}>
              <p className="text-zinc-400 text-sm font-medium">
                Helping Brands Connect, Grow, and Succeed in the Modern Digital World
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-zinc-300">
                  Trusted By <strong className="text-white font-bold">58,900+</strong> Users
                </span>
                <span className="text-[#ccff00] text-sm tracking-wide">★★★★★</span>
                <span className="text-white font-bold">4.9/5</span>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
