import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

export function GlowingCard({
  children,
  className,
  containerClassName,
  delay = 0,
}: GlowingCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  // Intersection observer for reveal animation
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/50 bg-card p-px transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          className
        )}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--accent) / 0.15), transparent 40%)`,
          }}
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(var(--accent) / 0.4), transparent 40%)`,
            mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
        {children}
      </div>
    </div>
  );
}
