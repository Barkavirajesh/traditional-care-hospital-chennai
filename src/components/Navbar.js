import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    color: "#fff",
    fontSize: "1.08rem",
    fontWeight: 500,
    textDecoration: "none",
    padding: "8px 14px"
  };

  return (
    <>
     <nav
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 80,
    padding: "0 20px",
    background: "#1c954d",       // ✅ restored green background
    borderRadius: "0 0 14px 0",   // ✅ restored your curved edge
    boxShadow: "0 2px 16px #c5ecd6",
    position: "relative",
    zIndex: 10
  }}
>

      
        {/* LOGO */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/tch-image.jpg"
            alt="Traditional Care Hospital Logo"
            style={{
              width: 150,
              height: "auto",
              borderRadius: 12,
              background: "#fff",
              objectFit: "contain",
              boxShadow: "0 0 8px rgba(0,0,0,0.15)",
              padding: "2px",
              margin: "8px"
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul
          className="desktop-menu"
          style={{
            listStyle: "none",
            display: "flex",
            gap: 18,
            alignItems: "center"
          }}
        >
          <li><Link to="/" style={navStyle}>Home</Link></li>
          <li><Link to="/about" style={navStyle}>About Us</Link></li>
          <li><Link to="/treatments" style={navStyle}>Treatments</Link></li>
          <li><Link to="/services" style={navStyle}>Services</Link></li>
          <li><Link to="/contact" style={navStyle}>Contact Us</Link></li>
          <li>
            <Link
              to="/appointment"
              style={{
                background: "#FEC534",
                color: "#106336",
                padding: "8px 18px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              Book Appointment
            </Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "line line1 open" : "line line1"}></span>
          <span className={open ? "line line2 open" : "line line2"}></span>
          <span className={open ? "line line3 open" : "line line3"}></span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/treatments" onClick={() => setOpen(false)}>Treatments</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          <Link
            to="/appointment"
            onClick={() => setOpen(false)}
            style={{
              background: "#FEC534",
              color: "#106336",
              padding: "10px",
              borderRadius: 8,
              marginTop: 10
            }}
          >
            Book Appointment
          </Link>
        </div>
      )}

      {/* CSS */}
      <style>
        {`
        /* DESKTOP SHOW, MOBILE HIDE */
        .desktop-menu {
          display: flex;
        }

        .hamburger {
          width: 30px;
          height: 26px;
          display: none;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          z-index: 100;
        }

        .line {
          height: 3px;
          width: 100%;
          background: #106336;
          border-radius: 3px;
          transition: 0.3s;
        }

        /* HAMBURGER ANIMATION */
        .line1.open { transform: rotate(45deg) translate(5px, 6px); }
        .line2.open { opacity: 0; }
        .line3.open { transform: rotate(-45deg) translate(6px, -7px); }

        /* MOBILE MENU */
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: #1c954d;
          padding: 20px;
          gap: 18px;
        }

        .mobile-menu a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .hamburger {
            display: flex;
          }
        }
        `}
      </style>
    </>
  );
}
