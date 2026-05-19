// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Components/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services.jsx"
import JoinUs from "./Components/Join/Joinus.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App
