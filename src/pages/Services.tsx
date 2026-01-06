import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Database,
  Shield,
  Rocket,
  BarChart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "API development & integration",
      "Performance optimization",
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences.",
    features: [
      "iOS & Android development",
      "React Native applications",
      "Flutter development",
      "Mobile UI/UX design",
      "App store optimization",
    ],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "Automate workflows and business processes using AI-driven solutions and intelligent systems.",
    features: [
      "Workflow automation with AI",
      "Chatbots & virtual assistants",
      "AI-powered data processing",
      "Document & email automation",
      "Custom AI integrations",
    ],
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for digital transformation.",
    features: [
      "Cloud architecture design",
      "AWS, Azure, GCP solutions",
      "DevOps & CI/CD pipelines",
      "Containerization with Docker/K8s",
      "Serverless applications",
    ],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, beautiful interfaces.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Visual design systems",
      "Interaction design",
      "Accessibility compliance",
    ],
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Robust database solutions designed for performance and security.",
    features: [
      "Database design & modeling",
      "SQL & NoSQL solutions",
      "Data migration services",
      "Query optimization",
      "Backup & recovery planning",
    ],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description:
      "Strategic consulting to align technology with business goals.",
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "Product strategy",
      "Market analysis",
      "Innovation workshops",
    ],
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with advanced analytics.",
    features: [
      "Business intelligence",
      "Data visualization",
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting",
    ],
    color: "bg-teal-500/10 text-teal-600",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              From concept to deployment, we provide end-to-end services to help
              your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-accent shrink-0"
                          />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's discuss your project requirements and find the perfect
            solution for your business.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact" className="group">
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
