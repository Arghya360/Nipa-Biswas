import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Arghya360", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arghyabiswas360", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/share/184q9MGMky/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/codehub360", label: "Instagram" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Section */}
      <AnimatedSection className="container py-16 border-b border-border">
        <div className="max-w-4xl">
          <AnimatedText as="p" className="uppercase tracking-wider text-sm mb-4">
            Get Started a Projects?
          </AnimatedText>
          <AnimatedText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold" delay={100}>
            LET'S WORK <span className="text-muted-foreground">TOGETHER</span>
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Footer Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact Me
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/8801873617978"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +880 1873617978 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:codehub0792@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  codehub0792@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Location
            </h3>
            <p className="text-muted-foreground text-sm">
              Based in Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Copyright © {currentYear} <span className="text-primary">Nipa Biswas</span>. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(72,100%,56%,0.4)]"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
