import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Brain,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "Automate workflows and business processes with intelligent AI-driven solutions for efficiency and scalability.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to power your digital transformation.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, beautiful interfaces your customers will love.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Robust database solutions designed for performance, security, and seamless scaling.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital services to help your business grow,
            innovate, and stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-card rounded-2xl shadow-card card-hover border border-border/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button variant="accent" size="lg" asChild>
            <Link to="/services" className="group">
              Explore All Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
