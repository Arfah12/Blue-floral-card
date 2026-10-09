import { useEffect, useRef, useState } from "react";

function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold]);

  return {
    elementRef,
    isVisible,
  };
}

export default useScrollAnimation;