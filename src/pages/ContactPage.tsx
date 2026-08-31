import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { toast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const budgets = ["$500 - $1K", "$1K - $5K", "$5K - $10K", "$10K+"];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nipabiswas702@gmail.com", href: "mailto:nipabiswas702@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "+880 1318-476188", href: "https://wa.me/8801873617978" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Bangladesh", href: "#" },
    { icon: <Clock className="w-5 h-5" />, label: "Availability", value: "Mon - Fri, 9AM - 6PM IST", href: "#" }
  ];

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Arghya360" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/arghyabiswas360" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/share/184q9MGMky/" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/codehub360" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Budget: ${selectedBudget || "Not specified"}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:nipabiswas702@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email app will open with the message ready to send.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary text-sm uppercase tracking-widest mb-4">Get In Touch</p>
              <AnimatedText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Let's <span className="text-primary">Connect</span>
              </AnimatedText>
              <AnimatedText as="p" className="text-xl max-w-2xl mx-auto" delay={100}>
                Have a project in mind? Let's discuss how I can help bring your vision to life.
              </AnimatedText>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8">
                <AnimatedSection className="bg-card border border-border rounded-2xl p-8 lg:p-10">
                  <AnimatedText as="h2" className="text-2xl font-bold mb-6">Send a Message</AnimatedText>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe" 
                          className="bg-background" 
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Your Email</label>
                        <Input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com" 
                          className="bg-background" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                      <Input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+880 1XXXXXXXXX" 
                        className="bg-background" 
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Project Budget</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                              selectedBudget === budget
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background border-border hover:border-primary/50'
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Your Message</label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..." 
                        className="bg-background min-h-[150px]" 
                      />
                    </div>
                    <Button size="lg" className="w-full gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </AnimatedSection>

                {/* Why Work With Me */}
                <AnimatedSection className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8" delay={150}>
                  <AnimatedText as="h3" className="text-xl font-bold mb-5">Why Work With Me</AnimatedText>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Fast Delivery</p>
                        <p className="text-xs text-muted-foreground">On-time, every time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">24/7 Support</p>
                        <p className="text-xs text-muted-foreground">Always available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Global Clients</p>
                        <p className="text-xs text-muted-foreground">Work across time zones</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Send className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Clean Code</p>
                        <p className="text-xs text-muted-foreground">Scalable & maintainable</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <AnimatedSection delay={100}>
                  <AnimatedText as="h2" className="text-2xl font-bold mb-6">Contact Information</AnimatedText>
                  <div className="space-y-4">
                    {contactInfo.map((info, i) => (
                      <AnimatedSection
                        key={i}
                        delay={i * 50}
                      >
                        <a
                          href={info.href}
                          className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <AnimatedText as="p" className="font-medium">{info.value}</AnimatedText>
                          </div>
                        </a>
                      </AnimatedSection>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <AnimatedText as="h3" className="text-xl font-bold mb-4">Follow Me</AnimatedText>
                  <div className="flex gap-3">
                    {socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-primary/50 transition-all"
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Quick Response */}
                <AnimatedSection className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6" delay={250}>
                  <AnimatedText as="h3" className="text-xl font-bold mb-2">Quick Response Guaranteed</AnimatedText>
                  <AnimatedText as="p" className="mb-4" delay={25}>
                    I typically respond within 24 hours. For urgent inquiries, feel free to call directly.
                  </AnimatedText>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Average response time: 4 hours</span>
                  </div>
                </AnimatedSection>

                {/* Map Placeholder */}
                <AnimatedSection className="aspect-video bg-card border border-border rounded-2xl overflow-hidden relative" delay={300}>
                  <img
                    src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=400&fit=crop"
                    alt="Location"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium">Bangladesh</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
