import { useState, useEffect } from "react";
import "./sidebar.css";
import VerLogo from "../assets/VeronicaLogo.png"
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  return (
    <>
      {/* Toggle Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Overlay */}
      {open && isMobile && (
        <div className="overlay" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""} ${isMobile ? "mobile" : "desktop"}`}>
        <div className="sidebarContainer">
          <div className="sidebar-header">
            <img className="VeronicaLogoHeader" src={VerLogo} alt="Veronica Tech" />
          </div>

          <div className="sidebar-content">
            <NavLink to="/" className="sidebarItem" onClick={() => isMobile && setOpen(false)} >Our Services</NavLink>
            <NavLink to="/e" className="sidebarItem" onClick={() => isMobile && setOpen(false)} >Our Projects</NavLink>
            <NavLink to="/about"  className="sidebarItem" onClick={() => isMobile && setOpen(false)} >About Us</NavLink>
            <NavLink to="/s"  className="sidebarItem" onClick={() => isMobile && setOpen(false)} >Contact Us</NavLink>
            <NavLink to="/d"  className="sidebarItem" onClick={() => isMobile && setOpen(false)} >Join Us</NavLink>


          </div>

          <div className="sidebar-footer">
            <button onClick={123}>Logout</button>
          </div>

        </div>
      </div>
    </>
  );
}