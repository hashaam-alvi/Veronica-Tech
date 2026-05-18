// import PropTypes from "prop-types";
import "./Styles/PageIntroImg.css";

export default function PageIntoImg({ title, description, imageSrc, onBtnClick }) {
  return (
    <section className="heroContainer">
      {/* Background Image with optimized loading for initial view */}
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={title || "Hero banner"} 
          className="heroBgImage"
          loading="eager" 
          fetchpriority="high"
        />
      )}

      {/* Dark overlay to ensure clean text contrast over any image */}
      <div className="videoOverlay" />

      <div className="heroContent">
        <h1 className="heroTitle">{title || "Scale Faster, Go Digital"}</h1>
        
        {description && (
          <p className="heroSubtitle">
            {description}
          </p>
        )}
        
        <button 
          className="heroBtn" 
          onClick={onBtnClick}
          type="button"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}

// Runtime props verification to avoid undefined bugs
// PageIntoImg.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   imageSrc: PropTypes.string.isRequired,
//   onBtnClick: PropTypes.func
// };
