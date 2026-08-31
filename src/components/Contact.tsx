import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { toast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "What's the development process like?",
    answer: "I work with HTML, CSS, JavaScript, React, Node.js, and other modern web development frameworks and tools to deliver high-quality solutions.",
  },
  {
    question: "What technologies do you work with?",
    answer: "I specialize in React, TypeScript, Node.js, Python, and various modern frameworks and tools for full-stack development.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months.",
  },
  {
    question: "Do you build responsive websites?",
    answer: "Yes, all my projects are built with mobile-first responsive design to ensure they work perfectly on all devices.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer: "Yes, I offer ongoing maintenance and support packages to keep your website running smoothly after launch.",
  },
];

const budgetOptions = ["$500", "$1000", "$2000", "$3500", "$5000+"];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ Section */}
          <AnimatedSection>
            <div className="section-subtitle mb-4">FAQ</div>
            <AnimatedText as="h2" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Frequently <span className="highlight-text">Asked Questions</span>
            </AnimatedText>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                  delay={index * 75}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-card transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={100}>
            <div className="section-subtitle mb-4">Contact Form</div>
            <AnimatedText as="h2" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Contact <span className="highlight-text">For Work</span>
            </AnimatedText>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your number"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              {/* Budget Selection */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Project Budget</p>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedBudget === budget
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="default" size="lg" className="gap-2">
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
