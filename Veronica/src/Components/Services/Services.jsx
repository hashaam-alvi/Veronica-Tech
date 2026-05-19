import PageIntroImg from "../PageIntroImg";
import "./Services.css"
import ServicesBG from "../../assets/ServicesBG.png";
import Footer from "../Footer";
import Cards from "./Cards"


export default function Services () {
const imageData = {
    title: "Engineering Your Digital Future",
    desc: "From automation and custom system integration to modern user experiences, we build the intelligent technology framework your business needs to lead the industry.",
  };

    const handleContactRedirect = () => {
    window.location.href = "/contact";
  };


    return (
      <>
        <PageIntroImg
          title={imageData.title}
          description={imageData.desc}
          imageSrc={ServicesBG}
          onBtnClick={handleContactRedirect}
        />
        <Cards></Cards>
        <Footer/>
      </>
    );
}