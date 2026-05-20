import { useState, useEffect } from "react";
import BGVideo from "../assets/BGVideo.mp4";
import "./Styles/Home.css";
import Slider  from "./Slider";
import {servicesCardsData , mottoCardsData} from "./SliderContent"
import CommunicationForm from "./CommunicationForm";
import Footer from "./Footer";

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

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

  const handleAboutRedirect = () => {
    window.location.href = "/about";
  };

  const handleServicesRedirect = () => {
    window.location.href = "/services";
  };


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
        
        <button className="heroBtn" onClick={handleContactRedirect}>Get in Touch</button>
      </div>
    </div>
    <div className="servicesSection1">
        <h1>Our Motto</h1>  
        <p className="homeMoto">Our mission is to deliver reliable, tailored, and future-ready ERP and software solutions that streamline operations, enhance decision-making, and enable businesses to achieve their goals with confidence and agility.</p>
    </div>
        <Slider mottoCardsData={mottoCardsData} />
    <div className="servicesSection1">
        <h1>Our Services</h1>  
        <p className="homeMoto">Let us Help You</p>
    </div>

    <Slider mottoCardsData={servicesCardsData} />
    <div className="moreServices-btn">
      <button className="heroBtn" onClick={handleServicesRedirect}>View More Services</button>
    </div>

    
    <div className="servicesSection1">
        <h1>At Veronica,</h1>  
        <p className="homeMoto"> Our mission is to harness the power of technology to create innovative, reliable, and impactful solutions that empower businesses and people. Backed by modern expertise and a passion for digital transformation, we deliver fresh perspectives with enterprise-grade execution. Discover how we turn vision into reality.</p>
    </div>    
      <div className="moreServices-btn">
        <button className="heroBtn" style={{margin: "40px 0"}} onClick={handleAboutRedirect}>About Us</button>
      </div>

      <CommunicationForm/>

      <Footer/>
    </div>
    
  );
}
