import "./Styles/Slider.css"

export default function Slider({mottoCardsData}){

    return(
        <div className="servicesSection">
        <h1>Our Motto</h1>  
        <p className="homeMoto">Our mission is to deliver reliable, tailored, and future-ready ERP and software solutions that streamline operations, enhance decision-making, and enable businesses to achieve their goals with confidence and agility.</p>
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