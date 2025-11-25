import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: "#fff",
  fontSize: "1.08rem",
  fontWeight: 500,
  textDecoration: "none",
  padding: "8px 14px"
};

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: 80,
        boxShadow: "0 2px 16px #c5ecd6",
        background: "transparent", // No green!
        padding: 0,
        position: "relative"
      }}
    >
      {/* LOGO - fully outside green bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: 2
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/tch-image.jpg"
            alt="Traditional Care Hospital Logo"
            style={{
              width: 150,        // Horizontal size as needed
              height: "auto",
              borderRadius: 12,
              background: "#fff",
              objectFit: "contain",
              boxShadow: "0 0 8px rgba(0,0,0,0.15)",
              padding: "2px",
              margin: "8px 8px 8px 28px"
            }}
          />
        </Link>
      </div>
      {/* NAV LINKS: green bar starts exactly from 'Home' */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#1c954d",
          minHeight: 80,
          padding: "0 0 0 0",  // no left padding; starts at "Home"
          borderRadius: "0 0 14px 0",
          width: "100%",
          flex: 1,
          justifyContent: "flex-end"
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            gap: 18,
            margin: 0,
            padding: "0 32px 0 0", // right padding only
            justifyContent: "flex-end",
            flex: 1
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
                marginLeft: 6,
                textDecoration: "none"
              }}
            >
              Book an Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
