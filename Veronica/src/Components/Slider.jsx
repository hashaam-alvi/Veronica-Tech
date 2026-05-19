import "./Styles/Slider.css"

export default function Slider({ mottoCardsData }) {
  return (
    <div className="servicesSection">
      <div className="cardsContainer">
        {mottoCardsData.map((card, index) => (
          <div className="serviceCard" key={index}>
            
            {/* 🎯 FIX: Only render the icon wrapper if card.icon actually exists */}
            {card.icon && (
              <div className="cardIcon">
                {typeof card.icon === "string" && card.icon.length <= 4 ? (
                  /* 1. Render text string emojis natively */
                  card.icon
                ) : (
                  /* 2. Render imported binary files or image url paths */
                  <img 
                    src={card.icon} 
                    alt={`${card.title} logo`} 
                    className="sliderCardImg"
                  />
                )}
              </div>
            )}

            <h3 className="cardTitle">{card.title}</h3>
            <p className="cardDesc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
