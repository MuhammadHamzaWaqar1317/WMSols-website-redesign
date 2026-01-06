import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@wmsols.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Tech Avenue",
    description: "San Francisco, CA 94102",
  },
];

const benefits = [
  { icon: Clock, text: "Quick response within 24 hours" },
  { icon: MessageCircle, text: "Free initial consultation" },
  { icon: CheckCircle2, text: "No commitment required" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to
              hear from you. Reach out and let's explore how we can work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-4">
                  Why reach out?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit.text} className="flex items-center gap-3">
                      <benefit.icon size={18} className="text-accent" />
                      <span className="text-sm text-foreground/80">
                        {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`lg:col-span-3 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-accent mb-4" />
            <h3 className="font-heading text-xl font-semibold">
              Visit Our Office
            </h3>
            <p className="text-muted-foreground">
              123 Tech Avenue, San Francisco, CA 94102
            </p>
          </div>
        </div>
        {/* You could add a real map integration here */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </section>
    </Layout>
  );
}
