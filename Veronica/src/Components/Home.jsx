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

  const cardsData = [
    {
      icon: "🎖️", // Replace with an icon library component if desired
      title: "Quality Services",
      desc: "Delivering innovative, reliable, and scalable technology solutions to help businesses thrive in the digital era."
    },
    {
      icon: "💡",
      title: "Valuable Ideas",
      desc: "Transforming valuable ideas into cutting-edge technology solutions that drive success."
    },
    {
      icon: "💵",
      title: "Budget Friendly",
      desc: "Smart, budget-friendly tech solutions without compromising on quality."
    },
    {
      icon: "🎧",
      title: "Suport 24/7",
      desc: "Round-the-clock support to keep your technology running seamlessly."
    }
  ];

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
    <div className="servicesSection">
        <h1>Our Motto</h1>  
        <p className="homeMoto">Our mission is to deliver reliable, tailored, and future-ready ERP and software solutions that streamline operations, enhance decision-making, and enable businesses to achieve their goals with confidence and agility.</p>
      <div className="cardsContainer">
        {cardsData.map((card, index) => (
          <div className="serviceCard" key={index}>
            <div className="cardIcon">{card.icon}</div>
            <h3 className="cardTitle">{card.title}</h3>
            <p className="cardDesc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
