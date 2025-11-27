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
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: 80,
          boxShadow: "0 2px 16px #c5ecd6",
          background: "transparent",
          padding: 0,
          position: "relative",
          zIndex: 10
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 20,
            zIndex: 20
          }}
        >
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
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
        </div>

        {/* GREEN NAVBAR RIGHT SECTION */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#1c954d",
            minHeight: 80,
            padding: "0",
            borderRadius: "0 0 14px 0",
            flex: 1,
            justifyContent: "flex-end"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: 24,
              margin: 0,
              padding: "0 32px 0 0",
              justifyContent: "flex-end"
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
        <div
          className="hamburger"
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            padding: "10px 20px",
            position: "absolute",
            right: 10,
            top: 22,
            zIndex: 30
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={{
            height: 3,
            width: 28,
            background: "#106336",
            marginBottom: 6,
            transition: "0.3s"
          }} />
          <span style={{
            height: 3,
            width: 28,
            background: "#106336",
            marginBottom: 6,
            transition: "0.3s"
          }} />
          <span style={{
            height: 3,
            width: 28,
            background: "#106336",
            transition: "0.3s"
          }} />
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul
            style={{
              position: "absolute",
              top: 80,
              right: 0,
              width: "100%",
              background: "#1c954d",
              listStyle: "none",
              padding: "20px 0",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
              zIndex: 25
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
        )}
      </nav>

      {/* RESPONSIVE CSS */}
      <style>
        {`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }
      `}
      </style>
    </>
  );
}
