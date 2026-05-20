import SelectionCarousel from "./SelectionCarousel";
import JoinBG from "../../assets/JoinBG.png"
import PageIntroImg from "../PageIntroImg";
import Footer from "../Footer";
import JoinUsForm from "./JoinUsForm"


export default function Joinus () {
const imageData = {
    title: "Work With Veronica",
    desc: "To cultivate an exceptional engineering environment where developers can challenge boundaries, master scalable architecture, and build robust business automation platforms that define the digital frontier.",
  };


  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

const whyJoinUsData = [
  <>
    At <strong className="brandWord" style={{color:"#00387a"}}>Veronica Tech</strong>, you aren’t just taking on a job, you are joining a forward-thinking ecosystem built on trust, engineering excellence, and mutual growth.
  </>,
  <>
    We believe that the best digital solutions are forged when <span className="blueWord" style={{color:"#00387a"}}>structured expertise</span> meets <span className="redWord" style={{color:"#dc2626"}}>creative energy</span>. Here, you will find the infrastructure to build robust enterprise platforms alongside the passion that fuels bold architectural breakthroughs.
  </>,
  <>
    We are committed to fostering an inclusive, welcoming culture that actively encourages <strong>diversity, equity, and open collaboration</strong>. We believe that unique backgrounds, distinct viewpoints, and varied life experiences make our engineering squads smarter and stronger.
  </>,
  <>
    Your career path shouldn't have limits. We continuously strive to <strong>push technological boundaries</strong>, offering our teams hands-on mentorship, continuous upskilling, and the freedom to pioneer new modular frameworks.
  </>,
  <>
    Our core employee value proposition is simple: <strong className="brandWord" style={{color:"#00387a"}}>Veronica Tech</strong> is an empowering workspace where your <strong>passion meets innovation</strong> to co-create the future of global enterprise software.
  </>
];

    return (
      <div className="JoinUsMainContainer">
        <PageIntroImg
          title={imageData.title}
          description={imageData.desc}
          imageSrc={JoinBG}
          onBtnClick={handleContactRedirect}
        />

        <h1 className="VerHead">VERONICA</h1>

        <div className="VerDesc">
          {whyJoinUsData.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>

        <SelectionCarousel />

        
        <JoinUsForm/>
        <Footer />
      </div>
    );
}