import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div
          className={`bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how we can help bring your vision to life. Our team
              is ready to collaborate and create something extraordinary
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                asChild
              >
                <Link to="/contact" className="group">
                  Start a Conversation
                  <MessageCircle
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
                asChild
              >
                <Link to="/portfolio" className="group">
                  Explore Our Work
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
