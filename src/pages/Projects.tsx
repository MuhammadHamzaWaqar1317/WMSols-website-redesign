import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    id: 1,
    title: "HealthTech Pro",
    category: "Healthcare",
    client: "MedCare Solutions",
    description:
      "A comprehensive patient management system with real-time analytics, telemedicine integration, and HIPAA-compliant data handling.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: [
      "40% faster patient onboarding",
      "99.9% uptime achieved",
      "50K+ active users",
    ],
  },
  {
    id: 2,
    title: "ShopStream Commerce",
    category: "Retail",
    client: "Fashion Forward Inc.",
    description:
      "Scalable e-commerce platform with advanced search, AI-powered recommendations, and seamless multi-currency checkout.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Stripe", "MongoDB", "Algolia"],
    results: [
      "300% increase in conversions",
      "$2M+ processed monthly",
      "Sub-second load times",
    ],
  },
  {
    id: 3,
    title: "FinanceFlow Dashboard",
    category: "Finance",
    client: "Capital Insights",
    description:
      "Enterprise financial analytics platform with real-time market data, AI-powered insights, and regulatory compliance tools.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Python", "AWS", "TensorFlow"],
    results: [
      "60% reduction in reporting time",
      "Real-time data processing",
      "SOC 2 compliant",
    ],
  },
  {
    id: 4,
    title: "EduLearn Platform",
    category: "Education",
    client: "Global Academy",
    description:
      "Interactive learning management system with video conferencing, progress tracking, and gamification elements.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vue.js", "Django", "WebRTC", "Redis"],
    results: [
      "100K+ students enrolled",
      "95% completion rate",
      "4.8★ user satisfaction",
    ],
  },
  {
    id: 5,
    title: "LogiTrack Fleet",
    category: "Logistics",
    client: "TransCargo Ltd.",
    description:
      "Real-time fleet management and logistics optimization platform with IoT integration and predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Go", "PostgreSQL", "IoT"],
    results: [
      "25% fuel cost reduction",
      "Real-time tracking",
      "Predictive maintenance",
    ],
  },
  {
    id: 6,
    title: "PropTech Manager",
    category: "Real Estate",
    client: "Urban Properties",
    description:
      "Property management platform with tenant portal, maintenance tracking, and financial reporting dashboards.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Angular", "Node.js", "MongoDB", "Stripe"],
    results: [
      "10K+ properties managed",
      "90% tenant satisfaction",
      "Automated rent collection",
    ],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Projects
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Explore how we've helped businesses across industries transform
              their digital presence and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
                    <span className="text-primary-foreground flex items-center gap-2 font-medium">
                      View Case Study <ExternalLink size={16} />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>Client:</span>
                    <span className="font-medium text-foreground">
                      {project.client}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <span className="text-xs text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's collaborate to bring your vision to life. We're excited to
            hear about your next big idea.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact" className="group">
              Start Your Project
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
