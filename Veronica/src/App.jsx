// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Components/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
