import "./Styles/Slider.css"

export default function Slider({mottoCardsData}){

    return(
        <div className="servicesSection">
        <div className="cardsContainer">
        {mottoCardsData.map((card, index) => (
          <div className="serviceCard" key={index}>
            <div className="cardIcon">{card.icon}</div>
            <h3 className="cardTitle">{card.title}</h3>
            <p className="cardDesc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
    );
}