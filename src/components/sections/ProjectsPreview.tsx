import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featuredProjects = [
  {
    id: 1,
    title: "HealthTech Dashboard",
    category: "Healthcare",
    description:
      "A comprehensive patient management system with real-time analytics and secure data handling.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Retail",
    description:
      "Scalable online marketplace with advanced search, inventory management, and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 3,
    title: "FinanceFlow App",
    category: "Finance",
    description:
      "Mobile-first financial tracking application with AI-powered insights and budget recommendations.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Python", "AWS"],
  },
];

export function ProjectsPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding gradient-subtle">
      <div className="container-wide">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Featured Projects
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="self-start md:self-auto"
          >
            <Link to="/projects" className="group">
              View All Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`#`}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <span className="text-primary-foreground flex items-center gap-1 text-sm font-medium">
                    View Case Study <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-accent text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
