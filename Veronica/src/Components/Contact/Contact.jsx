import PageIntoImg from "../PageIntroImg";
import ContactBG from "../../assets/ContactBG.png"
import CommunicationForm from "../CommunicationForm";
import Footer from "../Footer";
import {officesLocation} from "../SliderContent"
import "./Contact.css"

export default function Contact(){
  const imageData = {
    title: "Lets Do Business",
    desc: "Our mission is to harness the power of technology to create innovative, reliable, and impactful solutions that empower businesses and people.",
  };

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

    return (
      <>
        <PageIntoImg
          title={imageData.title}
          description={imageData.desc}
          imageSrc={ContactBG}
          onBtnClick={handleContactRedirect}
        />

        <CommunicationForm/>

        
        <div className="officesContainer">
      {officesLocation.map((office) => (
        <div key={office.id} className="officeRow">
          
          {/* Left Block: Contact Specifications details card */}
          <div className="officeDetailsCard">
            <h2 style={{color: "#00387a"}} className="officeCityTitle">{office.city}</h2>
            <p className="officeInfoText"><strong>Address:</strong> {office.address}</p>
            <p className="officeInfoText"><strong>Contact Number:</strong> {office.phone}</p>
            <p className="officeInfoText"><strong>Email:</strong> {office.email}</p>
          </div>
            
          {/* Right Block: Dynamic Interactive Map Block Frame */}
          <div className="officeMapCard">
            <iframe
              src={office.mapEmbedUrl}
              title={`${office.city} Location Map`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      ))}
    </div>
        <Footer/>
      </>
    );
}