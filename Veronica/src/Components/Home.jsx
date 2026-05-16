import { useState, useEffect } from "react";
import BGVideo from "../assets/BGVideo.mp4";
import "./Styles/Home.css";

export default function Home() {
  const fullText = "Get the right technology today to reach more customers tomorrow. Our team handles the code so your company can scale without limits.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // 1. Determine speed: Typing speed (40ms) vs Deleting speed (15ms - faster)
    let speed = isDeleting ? 15 : 40;

    // 2. If text is fully typed, pause for 3 seconds before starting to delete
    if (!isDeleting && displayedText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timeout);
    }

    // 3. If text is completely deleted, pause for 1 second before starting to type again
    if (isDeleting && displayedText === "") {
      const timeout = setTimeout(() => setIsDeleting(false), 1000);
      return () => clearTimeout(timeout);
    }

    // 4. The main animation clock loop
    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward: add next character
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      } else {
        // Deleting backward: remove last character
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }
    }, speed);

    return () => clearTimeout(handleTyping);
  }, [displayedText, isDeleting]); // Runs every time the text or mode changes

  return (
    <div className="homeMain">
    <div className="homeContainer">
      <video className="heroVideo" autoPlay loop muted playsInline>
        <source src={BGVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="videoOverlay" />

      <div className="heroContent">
        <h1 className="heroTitle">Scale Faster, Go Digital</h1>
        
        <p className="heroSubtitle">
          {displayedText}
          <span className="typingCursor">|</span>
        </p>
        
        <button className="heroBtn">Get in Touch</button>
      </div>
    </div>
    <h1>212</h1>
    </div>
    
  );
}
