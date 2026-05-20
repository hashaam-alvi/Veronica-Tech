import SelectionCarousel from "./SelectionCarousel";
import JoinBG from "../../assets/JoinBG.png"
import PageIntroImg from "../PageIntroImg";

export default function Joinus () {
const imageData = {
    title: "Work With Veronica",
    desc: "To cultivate an exceptional engineering environment where developers can challenge boundaries, master scalable architecture, and build robust business automation platforms that define the digital frontier.",
  };


  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };
    return(
        <div className="JoinUsMainContainer">
            <PageIntroImg
                    title={imageData.title}
                    description={imageData.desc}
                    imageSrc={JoinBG}
                    onBtnClick={handleContactRedirect}
                  />
            
            <SelectionCarousel/>
        </div>
    );
}