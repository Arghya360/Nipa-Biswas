import { ReactNode, CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  delay?: number;
}

const AnimatedText = ({
  children,
  className = "",
  as: Component = "p",
  delay = 0,
}: AnimatedTextProps) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.3,
    rootMargin: "-10% 0px -10% 0px",
  });

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={ref as React.RefObject<any>}
      className={`scroll-animate-text ${isVisible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default AnimatedText;
