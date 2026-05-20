import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "../SliderContent";
import "./SelectionCarousel.css";

// Register ScrollTrigger securely with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProcessSlider() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const pinWrap = containerRef.current.querySelector(".pin-wrap");
    
    // 🚚 Calculate total sliding path length dynamically
    const totalHorizontalScrollAmount = pinWrap.scrollWidth - window.innerWidth;

    gsap.to(pinWrap, {
      x: -totalHorizontalScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: "#sectionPin",
        pin: true,
        scrub: 1, // Smooth linear catching delay
        start: "top top",
        end: () => `+=${pinWrap.scrollWidth}`, // Adjusts tracking duration directly to component sizes
        invalidateOnRefresh: true, // Fixes display snapping during window resizing
      }
    });
  }, { scope: containerRef });

  return (
    <div className="horizontalScrollContainer" ref={containerRef}>
      {/* 🚀 INTRO SECTION */}
      <section className="introSection" data-bgcolor="#bcb8ad" data-textcolor="#032f35">
        <div className="introContent">
          <h1 className="mainHeroTitle">
            <span>Candidate</span> <span>Selection</span> <span>Process</span>
          </h1>
          <p className="subHeroDesc">Driven smoothly with modern hardware accelerated frontend animation tracks.</p>
        </div>
      </section>

      {/* ⚓ THE FIXED PINNING HORIZONTAL TRACK */}
      <section id="sectionPin">
        <div className="pin-wrap">
          
          {/* Introductory Heading Card inside the horizontal stream */}
          <div className="processMainHeadingCard">
            <h2>Discover how we discover elite backend and ERP engineering talent.</h2>
          </div>

          {/* Map your process steps dynamically */}
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

      {/* 🏁 OUTRO SUMMARY CARD */}
      <section className="outroSection" data-bgcolor="#e3857a" data-textcolor="#f1dba7">
        <div className="outroContent">
          <h2>Ready to transform your tech stack?</h2>
          <h2 className="credit">
            <a href="https://veronicatechexpo.com" target="_blank" rel="noreferrer">
              Veronica Tech
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
}
