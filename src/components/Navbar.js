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
            zIndex: 2
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
                margin: "8px 8px 8px 28px"
              }}
            />
          </Link>
        </div>

        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div
          className="hamburger-btn"
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            padding: "10px 20px",
            zIndex: 20
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            style={{
              height: 3,
              width: 25,
              background: "#fff",
              marginBottom: 5,
              borderRadius: 2,
              transition: "0.3s"
            }}
          />
          <span
            style={{
              height: 3,
              width: 25,
              background: "#fff",
              marginBottom: 5,
              borderRadius: 2,
              transition: "0.3s"
            }}
          />
          <span
            style={{
              height: 3,
              width: 25,
              background: "#fff",
              borderRadius: 2,
              transition: "0.3s"
            }}
          />
        </div>

        {/* NAV LINKS */}
        <div
          className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#1c954d",
            minHeight: 80,
            padding: "0",
            borderRadius: "0 0 14px 0",
            width: "100%",
            flex: 1,
            justifyContent: "flex-end",
            transition: "max-height 0.3s ease",
            overflow: "hidden"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: 18,
              margin: 0,
              padding: "0 32px 0 0",
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

      {/* RESPONSIVE MOBILE STYLES */}
      <style>
        {`
          @media (max-width: 768px) {
            /* Show hamburger button */
            .hamburger-btn {
              display: flex !important;
              margin-left: auto;
              margin-right: 20px;
            }

            nav > div:nth-child(2) {
              order: 2;
            }

            .nav-links {
              max-height: 0;
              flex-direction: column;
              width: 100%;
              justify-content: center;
              border-radius: 0 0 14px 0;
            }

            .nav-links.open {
              max-height: 500px; /* enough to show all items */
            }

            nav ul {
              flex-direction: column !important;
              width: 100% !important;
              padding: 12px 0 !important;
              gap: 12px !important;
              justify-content: center !important;
            }

            nav ul li {
              width: 100%;
              text-align: center;
            }

            .cta-btn {
              width: 90% !important;
              display: inline-block;
            }
          }
        `}
      </style>
    </>
  );
}
