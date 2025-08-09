import { useEffect, useRef, useState } from "react";
import "./Spacer.css";

function Spacer() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="spacer">
      <p
        ref={textRef}
        className={`spacer__text ${isVisible ? "spacer__text--visible" : ""}`}
      >
        <span className="spacer__text--band">Band van alle</span>{" "}
        <span className="spacer__text--markten">markten</span>
      </p>
    </section>
  );
}

export default Spacer;
