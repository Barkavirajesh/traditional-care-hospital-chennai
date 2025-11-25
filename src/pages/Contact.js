import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const contactIcons = {
  address: "📍",
  phone: "📞",
  email: "✉️",
  hours: "⏰",
};

export default function ContactUs() {
  return (
    <section
      style={{
        padding: "60px 0",
        background:
          "repeating-linear-gradient(120deg, #f9fff8 0 100px, #e7fcef 140px 240px)",
        minHeight: "100vh",
        fontFamily: "'Inter', Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#15803d",
          fontSize: "2.5rem",
          fontWeight: "900",
          letterSpacing: ".08em",
          marginBottom: 14,
          position: "relative",
          display: "inline-block",
          width: "100%",
        }}
      >
        Contact Us
        <span
          style={{
            width: "65%",
            height: 4,
            background: "linear-gradient(90deg,#15bd69 10%,#17ddb2 90%)",
            display: "block",
            borderRadius: 8,
            margin: "13px auto 0 auto",
          }}
        ></span>
      </h2>

      <div
        style={{
          textAlign: "center",
          color: "#208355",
          fontSize: "1.09rem",
          fontWeight: 500,
          marginBottom: 36,
          opacity: 0.94,
        }}
      >
        We’re here for your Siddha health journey.
        <br />
        Reach out—call, visit, mail, or message us online!
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "34px",
          maxWidth: "1150px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Info */}
          <div
            style={{
              background: "rgba(255,255,255,.92)",
              borderRadius: "22px",
              boxShadow: "0 8px 36px 2px #1c954d14, 0 0 0 1.5px #b4ffd833",
              padding: "32px 28px 27px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minHeight: 230,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.26rem",
                color: "#15994d",
                marginBottom: 9,
                letterSpacing: ".09em",
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              {contactIcons.address} Get in Touch
            </div>

            <div
              style={{
                color: "#38504d",
                fontSize: "1.04rem",
                marginBottom: 12,
              }}
            >
              For appointments, questions or Siddha advice, contact us anytime.
            </div>

            <div style={{ fontWeight: 600, color: "#147c4d", marginBottom: 6 }}>
              {contactIcons.address} Address:
            </div>
            <div style={{ color: "#283c34", marginBottom: 7 }}>
              Old no. 13, New no. 104, 5th Main Road,
              <br />
              CIT Nagar, Nandhanam, Chennai - 600035.
            </div>

            <div style={{ fontWeight: 600, color: "#147c4d", marginBottom: 6 }}>
              {contactIcons.phone} Phone:
            </div>
            <div style={{ marginBottom: 7 }}>
              <a
                href="tel:+917338886012"
                style={{
                  color: "#146e3b",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "1.03rem",
                }}
              >
                73388 86012
              </a>
              ,{" "}
              <a
                href="tel:+917338883013"
                style={{ color: "#146e3b", textDecoration: "none" }}
              >
                73388 83013
              </a>
              ,<br />
              <a
                href="tel:+917338886014"
                style={{ color: "#146e3b", textDecoration: "none" }}
              >
                73388 86014
              </a>
              ,{" "}
              <a
                href="tel:+918838298235"
                style={{ color: "#146e3b", textDecoration: "none" }}
              >
                88382 98235
              </a>
            </div>

            <div style={{ fontWeight: 600, color: "#147c4d", marginBottom: 5 }}>
              {contactIcons.email} Email:
            </div>
            <div>
              <a
                href="mailto:tch231017@gmail.com"
                style={{
                  color: "#178f6a",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: "1.01rem",
                }}
              >
                tch231017@gmail.com
              </a>
            </div>

            <button
              style={{
                marginTop: "16px",
                alignSelf: "flex-end",
                padding: "9px 24px",
                background: "linear-gradient(90deg,#15bd69,#38e2b2)",
                color: "#fff",
                border: "none",
                borderRadius: 9,
                fontWeight: 700,
                fontSize: "1.01rem",
                cursor: "pointer",
                boxShadow: "0 2px 7px #1c954d22",
                letterSpacing: ".02em",
                transition: "background 0.13s, transform 0.13s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
              onClick={() => (window.location.href = "tel:+917338886012")}
            >
              Call Clinic Now
            </button>
          </div>

          {/* Working Hours */}
          <div
            style={{
              background: "rgba(255,255,255,.92)",
              borderRadius: "22px",
              boxShadow: "0 8px 36px 2px #18be6b22, 0 0 0 1.5px #baf0d055",
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ fontSize: "2rem", marginRight: "10px" }}>
              {contactIcons.hours}
            </div>
            <div>
              <span style={{ fontWeight: "800", color: "#0d9658" }}>
                Working Hours
              </span>
              <br />
              <span style={{ color: "#233d30" }}>
                Mon – Sat: 9:00 AM – 8:00 PM <br />
                <span style={{ color: "#b40000", fontWeight: "bold" }}>
                  Sunday: Closed
                </span>
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div
            style={{
              background: "rgba(255,255,255,0.91)",
              borderRadius: "18px",
              boxShadow: "0 4px 18px #62d7b033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              padding: "18px 25px",
              flexWrap: "nowrap",
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://www.instagram.com/tch_chennai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: "1.06rem",
                color: "#cb1582",
                borderRadius: "50px",
                background: "#fdf1fa",
                padding: "9px 18px",
                boxShadow: "0 2px 7px #e1306c11",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaInstagram size={22} color="#cb1582" /> Instagram
            </a>

            <a
              href="https://wa.me/917338886012"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: "1.06rem",
                color: "#25D366",
                borderRadius: "50px",
                background: "#eafff5",
                padding: "9px 18px",
                boxShadow: "0 2px 7px #25d36612",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaWhatsapp size={22} color="#25D366" /> WhatsApp
            </a>

            <a
              href="https://www.youtube.com/@TraditionalCareHospitalDrDRaja"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: "1.06rem",
                color: "#D20000",
                borderRadius: "50px",
                background: "#fff0f0",
                padding: "9px 18px",
                boxShadow: "0 2px 7px #ff000011",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaYoutube size={22} color="#D20000" /> YouTube
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {/* Doctor Card */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 8px 32px #13bd5633",
              padding: "38px 38px",
              gap: "28px",
              minHeight: 225,
              flexDirection: "row",
            }}
          >
            <img
              src="/doctor.jpg"
              alt="Dr. D. Rajalakshmi"
              style={{
                width: "145px",
                height: "172px",
                objectFit: "cover",
                borderRadius: "17px",
                border: "7px solid #fff",
                boxShadow: "0 4px 16px rgba(32,60,80,0.10)",
                background: "#e8fce8",
                flexShrink: 0,
              }}
            />
            <div
              className="doctor-info-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "#15803d",
                }}
              >
                Dr. D. Rajalakshmi
              </div>
              <div
                style={{
                  fontWeight: 500,
                  color: "#29826A",
                  fontSize: "1.07rem",
                  marginBottom: 7,
                }}
              >
                Siddha Doctor
              </div>
              <div
                style={{
                  color: "#464",
                  fontSize: "1.02rem",
                  lineHeight: 1.48,
                }}
              >
                <strong>Traditional Care Hospital (TCH)</strong>, T. Nagar, Chennai
                <br />
                20+ years of expertise, compassionate holistic healing.
                <br />
                <span style={{ color: "#168e62", fontWeight: "bold" }}>
                  Balance: Vaadham • Pittam • Kabam
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(16,100,54,0.13)",
              minHeight: "212px",
              background: "#e9f5ec",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Old+no.+13,+New+no.+104,+5th+Main+Road,+CIT+Nagar,+Nandhanam,+Chennai+-+600035&output=embed"
              width="100%"
              height="212"
              frameBorder="0"
              style={{ border: 0, minHeight: 212, display: "block" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 900px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          img[alt="Dr. D. Rajalakshmi"] { margin-bottom: 10px; }
          div[style*='padding:38px 38px'] {
            flex-direction: column !important;
            align-items: center !important;
          }
          .doctor-info-text {
            text-align: center !important;
            align-items: center;
          }
          div[style*='overflow-x: auto'] {
            justify-content: flex-start !important;
            padding: 12px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
