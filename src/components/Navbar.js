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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: 80,
          boxShadow: "0 2px 16px #c5ecd6",
          background: "transparent",
          padding: "0 16px",
          position: "relative",
          flexWrap: "wrap"
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", zIndex: 2 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
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
                margin: "8px 8px 8px 0"
              }}
            />
          </Link>
        </div>

        {/* HAMBURGER ICON */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            marginLeft: "auto",
            zIndex: 3
          }}
        >
          <span style={{ height: 3, width: 25, background: "#106336", margin: "4px 0", borderRadius: 2 }} />
          <span style={{ height: 3, width: 25, background: "#106336", margin: "4px 0", borderRadius: 2 }} />
          <span style={{ height: 3, width: 25, background: "#106336", margin: "4px 0", borderRadius: 2 }} />
        </div>

        {/* NAV LINKS */}
        <div
          style={{
            display: isMobileMenuOpen ? "flex" : "flex",
            flexDirection: isMobileMenuOpen ? "column" : "row",
            alignItems: "center",
            background: "#1c954d",
            borderRadius: "0 0 14px 0",
            width: isMobileMenuOpen ? "100%" : "auto",
            justifyContent: isMobileMenuOpen ? "center" : "flex-end",
            transition: "max-height 0.3s ease",
            overflow: "hidden"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: isMobileMenuOpen ? "column" : "row",
              alignItems: "center",
              gap: 18,
              margin: 0,
              padding: isMobileMenuOpen ? "12px 0" : "0 32px 0 0",
              justifyContent: isMobileMenuOpen ? "center" : "flex-end",
              width: "100%"
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
                className="cta-btn"
                style={{
                  background: "#FEC534",
                  color: "#106336",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  marginLeft: isMobileMenuOpen ? 0 : 6,
                  textDecoration: "none",
                  width: isMobileMenuOpen ? "90%" : "auto",
                  display: isMobileMenuOpen ? "block" : "inline-block",
                  textAlign: "center",
                  marginTop: isMobileMenuOpen ? 8 : 0
                }}
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* RESPONSIVE MOBILE STYLES */}
      <style>
        {`
        @media (max-width: 768px) {
          .hamburger {
            display: flex !important;
          }
        }
      `}
      </style>
    </>
  );
}
