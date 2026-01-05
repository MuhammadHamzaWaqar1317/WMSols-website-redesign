import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const portfolioProjects = [
  {
    id: 1,
    title: "TaskFlow Pro",
    category: "Full Stack",
    description:
      "A comprehensive project management tool with real-time collaboration, drag-and-drop boards, and advanced analytics.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "CryptoTracker",
    category: "MERN Stack",
    description:
      "Real-time cryptocurrency tracking dashboard with portfolio management and price alerts.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Express", "MongoDB", "Redux"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "RecipeHub",
    category: "Web App",
    description:
      "Social recipe sharing platform with meal planning, shopping lists, and nutritional information.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export function PortfolioPreview() {
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
            Developer Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            MERN Stack Craftsmanship
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated selection of full-stack projects showcasing technical
            expertise, creative problem-solving, and attention to detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
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
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
            <Link to="/portfolio" className="group">
              View Full Portfolio
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
