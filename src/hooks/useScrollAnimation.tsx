import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] => {
  const { 
    threshold = 0.2, 
    rootMargin = "-10% 0px -10% 0px",
    triggerOnce = false 
  } = options;
  
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (triggerOnce && hasTriggered.current) return;
          
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              hasTriggered.current = true;
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

export default useScrollAnimation;
