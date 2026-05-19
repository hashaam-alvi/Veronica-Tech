import PageIntroImg from "../PageIntroImg";
import "./Projects.css"
import ProjectBG from "../../assets/ProjectBG.png"
import Footer from "../Footer";
import Slider from "../Slider";
import {pharmaceuticalClientsData} from "../SliderContent"


export default function Projects(){
const imageData = {
    title: "Engineering Digital Excellence",
    desc: "Explore our portfolio of custom software systems, scalable platforms, and modern web architectures designed to solve complex business problems."
};

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

const globalFootprintText = [
  <>
    Founded with a vision for rapid digital transformation, 
   <strong style={{ color: "#00387a" }}> Veronica Tech</strong> has quickly established a strong, reliable foothold in the technology sector.
  </>,
  <>
    Our <strong>agility</strong> and <strong>forward-thinking perspective</strong> allow us to bridge borders, 
    turning modern engineering into <strong style={{ color: "#00387a" }}>global success</strong>.
  </>
];

const AboutHeads = [
  {
    id: "industries-impact",
    title: "Our ",
    titleSpan: "Industries",
    desc: (
      <>
        We have successfully scaled our operations by introducing robust, customized <strong>ERP software architectures</strong> specifically engineered for the <strong>pharmaceutical sector</strong>. Our specialized systems fully automate critical supply chains, optimize real-time batch tracking, and guarantee rigid regulatory compliance, allowing companies to streamline their entire manufacturing and inventory lifecycles with absolute precision.
      </>
    )
  },
  {
    id: "industries-presence",
    title: "Global ",
    titleSpan: "Presence",
    desc: (
      <>
        Our high-performance enterprise platforms have firmly established a reliable footprint across both domestic markets and international borders. By delivering highly localized tax integrations and multi-currency frameworks, we successfully support corporate distribution channels in <span style={{ color: "#00387a", fontWeight: "700" }}>Pakistan, Saudi Arabia</span>, and beyond, proving our commitment to borderless software deployment.
      </>
    )
  },
  {
    id: "industries-scalability",
    title: "Proven ",
    titleSpan: "Scalability",
    desc: (
      <>
        Built to perform under massive commercial loads, our modern software infrastructure runs with supreme stability and speed. Today, our robust cloud ERP systems proudly power <strong style={{ color: "#00387a", fontSize: "1.25rem" }}>more than 50 major pharmacies</strong> across the <strong>Kingdom of Saudi Arabia (KSA)</strong>, seamlessly managing complex daily point-of-sale operations and highly secure live data synchronization updates without a single millisecond of interruption.
      </>
    )
  },

  {
    id: "engineering-philosophy",
    title: "Our ",
    titleSpan: "Philosophy",
    desc: (
      <>
        We do not just write code; we engineer scalable solutions to long-term business problems. Our core development approach emphasizes <strong>clean code modularity</strong>, exhaustive automated testing, and comprehensive system integrations. This guarantees that as your business grows dynamically over the coming years, your digital software foundation expands smoothly alongside you without requiring costly structural overhauls.
      </>
    )
  }
];

    return (
      <>
        <PageIntroImg
          title={imageData.title}
          description={imageData.desc}
          imageSrc={ProjectBG}
          onBtnClick={handleContactRedirect}
        />

        <h1 className="ProjectVerHead">VERONICA</h1>
        <div className="ProjectVerDesc">
            {globalFootprintText.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
        </div>

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

        <h1 className="ProjectVerHead">Our Clients</h1>
        <Slider mottoCardsData={pharmaceuticalClientsData} />

        <Footer/>
      </>
    );
}