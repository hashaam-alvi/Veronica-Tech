import { useState, useEffect, useRef } from "react";
import { processSteps } from "../SliderContent";
import "./SelectionCarousel.css";

export default function SelectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const triggers =
      containerRef.current.querySelectorAll(".scrollAnchorZone");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            const index = Number(
              entry.target.dataset.index
            );

            setActiveIndex(index);
          }

        });
      },
      {
        threshold: 0.55,
      }
    );

    triggers.forEach((trigger) => {
      observer.observe(trigger);
    });

    return () => {
      triggers.forEach((trigger) => {
        observer.unobserve(trigger);
      });
    };
  }, []);

  return (
    <section
        className="carouselSectionWrapper"
        ref={containerRef}
        style={{
            height: `${processSteps.length * 50}vh`
        }}
        >

      {/* STICKY VIEWPORT */}
      <div className="stickyDisplayContainer">

        {/* TEXT */}
        <div className="carouselTextContent">

          <span className="stepBadge">
            Step 0{processSteps[activeIndex].step}
          </span>

          <h2 className="carouselStepTitle">
            {processSteps[activeIndex].title}
          </h2>

          <p className="carouselStepDesc">
            {processSteps[activeIndex].desc}
          </p>

        </div>

        {/* GRAPHICS */}
        <div className="carouselGraphicsEngine">

          <svg
            className="vectorArrowLine leftArrow"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 10 100 Q 30 50 85 15"
              fill="none"
              stroke="#00387a"
              strokeWidth="3"
              strokeDasharray="6,4"
            />
            <polygon
              points="85,15 73,15 80,25"
              fill="#00387a"
            />
          </svg>

          {/* IMAGE FRAME */}
          <div className="circularImageFrame">

            {processSteps.map((slide, idx) => (
              <img
                key={idx}
                src={slide.image}
                alt={slide.title}
                className={`carouselGraphicAsset ${
                  idx === activeIndex
                    ? "activeSlide"
                    : ""
                }`}
              />
            ))}

          </div>

          <svg
            className="vectorArrowLine rightArrow"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 15 15 Q 70 50 90 100"
              fill="none"
              stroke="#00387a"
              strokeWidth="3"
              strokeDasharray="6,4"
            />
            <polygon
              points="90,100 89,86 79,93"
              fill="#00387a"
            />
          </svg>

        </div>
      </div>

      {/* SCROLL TRACKS */}
      <div className="scrollTriggerTracks">

        {processSteps.map((_, idx) => (
          <div
            key={idx}
            className="scrollAnchorZone"
            data-index={idx}
          />
        ))}

      </div>
    </section>
  );
}