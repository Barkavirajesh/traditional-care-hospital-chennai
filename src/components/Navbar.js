import React, { useState } from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: "#fff",
  fontSize: "1.08rem",
  fontWeight: 500,
  textDecoration: "none",
  padding: "8px 14px"
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar-root">
        {/* LOGO + TAGLINE */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src="/tch-image.jpg"
              alt="Traditional Care Hospital Logo"
              className="navbar-logo"
            />
          </Link>

          {/* Mobile-only tagline */}
          <div className="mobile-tagline">
            Natural Healing • Sidha Care
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          <ul className="desktop-ul">
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
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: "none"
                }}
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul className="mobile-menu">
            <li><Link to="/" style={navStyle} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" style={navStyle} onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/treatments" style={navStyle} onClick={() => setIsOpen(false)}>Treatments</Link></li>
            <li><Link to="/services" style={navStyle} onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/contact" style={navStyle} onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li>
              <Link
                to="/appointment"
                style={{
                  background: "#FEC534",
                  color: "#106336",
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: "none"
                }}
                onClick={() => setIsOpen(false)}
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* CSS */}
      <style>
        {`
        .navbar-root {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 80px;
          box-shadow: 0 2px 16px #c5ecd6;
          background: white;
          padding: 0 12px;
          position: relative;
          z-index: 10;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .logo-link {
          display: flex;
          align-items: center;
        }

        .navbar-logo {
          height: 64px;
          width: auto;
          object-fit: contain;
        }

        .mobile-tagline {
          display: none;
          font-size: 0.85rem;
          color: #2f6b3c;
          margin-top: 2px;
          line-height: 1.2;
          font-weight: 500;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          background: #1c954d;
          min-height: 80px;
          border-radius: 0 0 14px 0;
          flex: 1;
          justify-content: flex-end;
        }

        .desktop-ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 24px;
          margin: 0;
          padding: 0 32px 0 0;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 10px;
          position: absolute;
          right: 12px;
          top: 22px;
        }

        .hamburger span {
          height: 3px;
          width: 28px;
          background: #106336;
          margin-bottom: 6px;
        }

        .mobile-menu {
          position: absolute;
          top: 72px;
          right: 0;
          width: 100%;
          background: #1c954d;
          list-style: none;
          padding: 20px 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          z-index: 25;
        }

        /* MOBILE FIX */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }

          .navbar-root {
            min-height: 72px;
            padding: 0 10px;
          }

          .logo-container {
            height: auto;
          }

          .navbar-logo {
            height: 60px;  /* 👈 bigger logo */
          }

          .mobile-tagline {
            display: block; /* 👈 show wording only on mobile */
          }
        }

        @media (max-width: 480px) {
          .navbar-logo {
            height: 64px;  /* slightly bigger for very small phones */
          }

          .mobile-tagline {
            font-size: 0.8rem;
          }
        }
      `}
      </style>
    </>
  );
}
