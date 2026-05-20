import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "../SliderContent";
import "./SelectionCarousel.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProcessSlider() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const pinWrap = containerRef.current.querySelector(".pin-wrap");
    const isMobile = window.innerWidth <= 767;
    const totalScroll = pinWrap.scrollWidth - window.innerWidth;

    gsap.to(pinWrap, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: "#sectionPin",
        pin: true,
        scrub: isMobile ? 0.5 : 1, 
        start: "top top",
        end: () => `+=${isMobile ? totalScroll : pinWrap.scrollWidth}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div className="horizontalScrollContainer" ref={containerRef}>
      <section id="sectionPin">
        <div className="pin-wrap">
          
          <div className="processMainHeadingCard">
            <h2>Your Roadmap to Innovation:</h2>
            <h3> How We Hire</h3>
          </div>

          {processSteps.map((card) => (
            <div className="processSlideStepItem" key={card.step}>
              <div className="slideImageWrapper">
                <img src={card.image} alt={card.title} className="slideImage" />
                <span className="stepNumberIndicator">0{card.step}</span>
              </div>
              <div className="slideTextMeta">
                <h3 className="slideTitle">{card.title}</h3>
                <p className="slideDescription">{card.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
