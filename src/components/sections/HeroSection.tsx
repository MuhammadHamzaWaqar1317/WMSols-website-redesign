import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-wide relative z-10 text-center py-20 pt-32">
        {/* Badge */}
        <div className="animate-on-scroll opacity-0 stagger-1">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-8 backdrop-blur-sm border border-primary-foreground/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Building the Future of Digital
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-on-scroll opacity-0 stagger-2 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-5xl mx-auto leading-tight mb-6">
          We Build Digital Experiences That{" "}
          <span className="text-gradient">Matter</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-on-scroll opacity-0 stagger-3 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          From concept to deployment, we craft innovative software solutions
          that help businesses transform, scale, and thrive in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/portfolio" className="group">
              View Portfolio
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact" className="group">
              <Play size={18} className="mr-1" />
              Get in Touch
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-on-scroll opacity-0 stagger-5 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
