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
          observer.disconnect(); // Remove this line if you want it to repeat
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="section-spacer">
      <p ref={textRef} className={`p-spacer ${isVisible ? "fade-in" : ""}`}>
        <span className="band"> Band van alle</span>{" "}
        <span className="markten">markten</span>
      </p>
    </section>
  );
}

export default Spacer;
