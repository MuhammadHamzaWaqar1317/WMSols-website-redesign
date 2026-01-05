import { Lightbulb, Heart, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our priority. We listen, understand, and deliver solutions that truly matter.",
  },
  {
    icon: Zap,
    title: "Agile & Efficient",
    description:
      "We move fast without compromising quality, adapting quickly to changing requirements.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe in transparent communication and working together as true partners.",
  },
];

export function ValuesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section-padding bg-primary text-primary-foreground overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Values That Drive Excellence
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We're not just building software we're building trust,
            relationships, and digital experiences that make a real difference.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <value.icon size={32} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
