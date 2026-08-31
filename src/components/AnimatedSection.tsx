import { ReactNode, CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: AnimatedSectionProps) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "-5% 0px -5% 0px",
  });

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={ref}
      className={`scroll-animate-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
