import useScrollAnimation from "../../hooks/useScrollAnimation";

import "./FadeIn.css";

function FadeIn({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`
        animation-wrapper
        ${animation}
        ${isVisible ? "is-visible" : ""}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;