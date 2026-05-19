import WassamImg from "../assets/Wassam.jpg";
import SehaImg from "../assets/Seha.png";
import MalathiImg from "../assets/Malathi.jpg";
import SamaImg from "../assets/Sama.jpg";

export const mottoCardsData = [
    {
      icon: "🎖️", // Replace with an icon library component if desired
      title: "Quality Services",
      desc: "Delivering innovative, reliable, and scalable technology solutions to help businesses thrive in the digital era."
    },
    {
      icon: "💡",
      title: "Valuable Ideas",
      desc: "Transforming valuable ideas into cutting-edge technology solutions that drive success."
    },
    {
      icon: "💵",
      title: "Budget Friendly",
      desc: "Smart, budget-friendly tech solutions without compromising on quality."
    },
    {
      icon: "🎧",
      title: "Suport 24/7",
      desc: "Round-the-clock support to keep your technology running seamlessly."
    }
  ];

  export const servicesCardsData = [
  {
    title: "ERP Solutions",
    desc: "Comprehensive Enterprise Resource Planning systems that integrate all your business processes for maximum efficiency and control.",
    features: [
      "Custom ERP Development",
      "System Integration",
      "Process Automation"
    ]
  },
  {
    title: "Website Design",
    desc: "Modern, responsive websites that combine stunning design with powerful functionality to engage your audience.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development"
    ]
  },
  {
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.",
    features: [
      "iOS & Android Apps",
      "Cross-platform Solutions",
      "UI/UX Design"
    ]
  }
];

export const officesLocation = [
    {
      id: "riyadh",
      city: "Riyadh Office:",
      address: "Building No. 2162, Al-Sahaba Street, Postal Code 13253, Al-Munsiyah District, Riyadh, Kingdom of Saudi Arabia",
      phone: "+966 54 843 3867, +966 58 287 0725",
      email: "info@veronicatechexpo.com",
      // Replace with your exact Riyadh iframe src string from Google Maps Embed option
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2938.0081673304794!2d46.8066419016667!3d24.4702829372988!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI4JzExLjYiTiA0NsKwNDgnMjMuMyJF!5e1!3m2!1sen!2sus!4v1779115674959!5m2!1sen!2sus"
    },
    {
      id: "islamabad",
      city: "Islamabad Office:",
      address: "FF-14, Zarpar Arcade, D-12 Markaz, D-12 Markaz D-12, Islamabad",
      phone: "+923009427659",
      email: "info@veronicatechexpo.com",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.8559632167684!2d72.94739165954404!3d33.70363200841038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd0019d5b04d%3A0xae1d1150eb24f761!2sZrapar%20arcade!5e1!3m2!1sen!2s!4v1779116486127!5m2!1sen!2s"
    },
    {
      id: "lahore",
      city: "Lahore Office:",
      address: "E-153-F3, Ghazni Lane, Street No. 3, Super Town, Lahore Cantt, Lahore",
      phone: "+923390000358",
      email: "info@veronicatechexpo.com",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d908.1039590492046!2d74.37711492851265!3d31.494827998382377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI5JzQxLjQiTiA3NMKwMjInMzkuOSJF!5e1!3m2!1sen!2s!4v1779172469091!5m2!1sen!2s"
    }
  ];

export const AboutValuesData = [
  {
    title: "Innovation",
    desc: "Continuously pushing boundaries to create impactful solutions."
  },
  {
    title: "Integrity",
    desc: "Building trust through transparency and reliability."
  },
  {
    title: "Passion",
    desc: "Fueling progress with energy, creativity, and determination."
  },
  {
    title: "Collaboration",
    desc: "Working together to achieve smarter outcomes."
  },
  {
    title: "Excellence",
    desc: "Striving for quality and precision in everything we do."
  }
];

export const pharmaceuticalClientsData = [
  {
    id: "malathi",
    icon: MalathiImg,
    title: "Malathi Medical Co. LLC",
    desc: "Seamlessly integrated into our custom enterprise software framework to automate pharmaceutical warehouse operations, tracking inventory lifecycles with absolute precision."
  },
  {
    id: "sama-al-dawa",
    icon: SamaImg,
    title: "Sama Al-Dawa Medical Establishment",
    desc: "Utilizing our robust ERP systems across their complete supply chain to manage secure live updates, daily point-of-sale configurations, and high-performance cloud data syncs."
  },
  {
    id: "wassam-al-dawa",
    icon: WassamImg,
    title: "Wassam Al-Dawa Medical Co. LLC",
    desc: "Powered by our specialized software ecosystem to streamline complex pharmacy distribution operations, optimize batch tracking metrics, and maintain continuous regulatory compliance."
  },
  {
    id: "seha-plus",
    icon: SehaImg,
    title: "Seha Plus Warehouse",
    desc: "Running on our scalable enterprise architecture to manage massive commercial enterprise loads, wholesale distribution frameworks, and lightning-fast point-of-sale calculations."
  }
];


import ErpImg from "../assets/erpService.jpg";
import WebDesignImg from "../assets/WebServices.png";
import AppDevImg from "../assets/appServices.png";
import SeoImg from "../assets/seoServices.png";
import CustomSoftImg from "../assets/custom_softwareServices.png";
import GraphicImg from "../assets/graphicServices.png";
import AImg from "../assets/aiServices.png";

export const ourservicesCardsData = [
  {
    id: "erp",
    title: "ERP Solutions",
    desc: "Comprehensive Enterprise Resource Planning systems that integrate all your business processes for maximum efficiency and control.",
    image: ErpImg,
    features: ["Custom ERP Development", "System Integration", "Process Automation"]
  },
  {
    id: "web-design",
    title: "Website Design",
    desc: "Modern, responsive websites that combine stunning design with powerful functionality to engage your audience.",
    image: WebDesignImg,
    features: ["Responsive Design", "E-commerce Solutions", "CMS Development"]
  },
  {
    id: "app-dev",
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.",
    image: AppDevImg,
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design"]
  },
  {
    id: "seo",
    title: "SEO Services",
    desc: "Strategic search engine optimization to improve your online visibility and drive qualified traffic to your business.",
    image: SeoImg,
    features: ["Technical SEO", "Content Optimization", "Analytics & Reporting"]
  },
  {
    id: "custom-soft",
    title: "Custom Software Development",
    desc: "Tailored software solutions to meet your business needs. We build scalable, secure, and efficient systems designed for your growth.",
    image: CustomSoftImg,
    features: [] // Empty array as per image screenshot context
  },
  {
    id: "graphic",
    title: "Graphic Design",
    desc: "Creative visual solutions that communicate your brand message effectively and leave a lasting impression.",
    image: GraphicImg,
    features: ["Brand Identity", "Marketing Materials", "Digital Graphics"]
  },
 {
  id: "ai-development",
  title: "AI Development & Automation",
  desc: "Smart machine learning models and automated workflows engineered to optimize workflows, predict analytics patterns, and eliminate manual bottlenecks.",
  image: AImg,
  features: ["Predictive Analytics", "NLP & Chat Solutions", "Workflow Automation"]
}
];
