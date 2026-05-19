import PageIntroImg from "../PageIntroImg";
import AboutBG from "../../assets/AboutBG.jpg";
import "./About.css";
import CommunicationForm from "../CommunicationForm";
import Footer from "../Footer";
import Slider from "../Slider";
import {AboutValuesData , pharmaceuticalClientsData} from "../SliderContent"

export default function About() {
  const imageData = {
    title: "VERONICA",
    desc: "Our mission is to harness the power of technology to create innovative, reliable, and impactful solutions that empower businesses and people.",
  };

  const AboutHeads = [
    {
      id: "mission",
      title: "Our ",
      titleSpan: "Mission",
      desc: "To empower businesses with cutting-edge technology solutions, unlocking their growth potential by connecting them with passionate and skilled engineers.",
    },
    {
      id: "vision",
      title: "Our ",
      titleSpan: "Vision",
      desc: "We empower businesses of all sizes with intelligent, scalable software that drives efficiency and sustainable growth. Our vision is to be a global technology leader, shaping a smarter, more connected world through transformative digital solutions.",
    },
      
  ];

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

{/*  const logoMeaningText = "At Veronica Tech, our logo reflects who we are and what we stand for:\n\nThe blue arc represents trust, innovation, and technological excellence, our promise to deliver reliable and forward-thinking solutions.The red arc embodies energy, passion, and determination, symbolizing the drive that fuels our breakthroughs and bold ideas.\n\nTogether these arcs form a rising horizon, capturing our vision of progress and the journey toward a smarter, connected future. \n\nJust as the arcs curve upward, we continuously strive to push boundaries and elevate technology to new heights. \n\nOur name and symbol together convey a simple message: Veronica Tech is where passion meets innovation to build the future.";*/}

const logoMeaningText = [
  <>
    At <strong className="brandWord" style={{color:"#00387a"}}>Veronica Tech</strong>, our logo reflects who we are and what we stand for:
  </>,
  <>
    The <span className="blueWord" style={{color:"blue"}}>BLUE arc</span> represents <strong>trust</strong>, <strong>innovation</strong>, and <strong>technological excellence</strong>, our promise to deliver reliable and forward-thinking solutions. The <span className="redWord" style={{color:"red"}}>RED arc</span> embodies <strong>energy</strong>, <strong>passion</strong>, and <strong>determination</strong>, symbolizing the drive that fuels our breakthroughs and bold ideas.
  </>,
  <>
    Together these arcs form a <strong>rising horizon</strong>, capturing our vision of progress and the journey toward a smarter, connected future.
  </>,
  <>
    Just as the arcs curve upward, we continuously strive to <strong>push boundaries</strong> and elevate technology to new heights.
  </>,
  <>
    Our name and symbol together convey a simple message: <strong className="brandWord" style={{color:"#00387a"}} >Veronica Tech</strong> is where <strong>passion meets innovation</strong> to build the future.
  </>
];


  return (
    <>
      {/* Dynamic Hero Banner Segment */}
      <PageIntroImg
        title={imageData.title}
        description={imageData.desc}
        imageSrc={AboutBG}
        onBtnClick={handleContactRedirect}
      />
        <h1 className="VerHead">VERONICA</h1>
        <div className="VerDesc">
          {logoMeaningText.map((para, index) => (
            <p key={index}>
              {para}
            </p>
          ))}
        </div>

        
      {/* Dynamic Cards Stack Loop Segment */}
      <div className="aboutSectionsWrapper">
        {AboutHeads.map((item) => (
          <section key={item.id} className="missionSection">
            {/* Dynamic Section Headings */}
            <h2 className="missionHeading">
              {item.title}
              <span className="highlightText">{item.titleSpan}</span>
            </h2>

            {/* Overlapping Rounded Quote Box */}
            <div className="missionBox">
              <p className="missionText">
                {item.desc}
              </p>
            </div>
          </section>
        ))}
      </div>

      <h1 className="ValuesTitle">Our Values</h1>
      <Slider mottoCardsData={AboutValuesData} />

      <h1 className="ValuesTitle">Our Clients</h1>
      <Slider mottoCardsData={pharmaceuticalClientsData} />

      <CommunicationForm/>
      <Footer/>
    </>
  );
}
