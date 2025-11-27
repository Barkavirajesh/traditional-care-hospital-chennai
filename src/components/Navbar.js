import React from "react";
import { Link, useLocation } from "react-router-dom";

const navStyle = {
  color: "#fff",
  fontSize: "1.08rem",
  fontWeight: 500,
  textDecoration: "none",
  padding: "8px 14px",
  whiteSpace: "nowrap"
};

export default function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: 80,
        boxShadow: "0 2px 16px #c5ecd6",
        background: "transparent",
        padding: 0,
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100vw",
        overflowX: "hidden"
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
              margin: "8px 8px 8px 28px"
            }}
          />
        </Link>
      </div>

      {/* NAV LINKS BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#1c954d",
          minHeight: 80,
          borderRadius: "0 0 14px 0",
          width: "100%",
          flex: 1,
          justifyContent: "flex-end"
        }}
      >
        <ul
          className="nav-links"
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
          gap: 18,
            margin: 0,
            paddingRight: 32,
            justifyContent: "flex-end",
            flex: 1,
            overflowX: "auto"
          }}
        >
          <li>
            <Link
              to="/"
              style={navStyle}
              className={location.pathname === "/" ? "active-nav" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={navStyle}
              className={location.pathname === "/about" ? "active-nav" : ""}
            >
              About Us
            </Link>
          </li>

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
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontSize: "0.95rem"
              }}
            >
              Book an Appointment
            </Link>
          </li>
        </ul>
      </div>

      {/* OPTIONAL: ACTIVE NAV STYLE */}
      <style>
        {`
        .active-nav {
          background: #fff6cc !important;
          color: #197046 !important;
          border-radius: 20px;
          padding: 6px 12px;
        }
        `}
      </style>

    </nav>
  );
}
