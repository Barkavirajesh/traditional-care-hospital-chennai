import React from "react";

// ---- BEGIN TREATMENTS DATA ----
const treatments = [
  {
    icon: "💆‍♂️",
    title: "External Therapies",
    desc: "Pain relief and joint rejuvenation using herbal oils and traditional techniques.",
    details: [
      "Thokkanam (Herbal Oil Massage)",
      "Varmam Therapy (Vital Energy Points)",
      "Sirodhara (Mind-Calming Oil Flow)",
      "Kizhi (Herbal Pouch Therapy: Podi, Ela, Navara)",
    ],
  },
  {
    icon: "🫀",
    title: "Internal Medicines",
    desc: "Holistic internal healing using traditional herbal, mineral, and oil-based medicines.",
    details: [
      "Kudineer (Herbal Decoctions)",
      "Lehyam (Rejuvenating Pastes)",
      "Chooranam (Herbal Powders)",
      "Thailam (Medicated Oils)",
    ],
  },
  {
    icon: "🌬️",
    title: "Disease Management",
    desc: "Personalized Siddha treatments for chronic and metabolic health conditions.",
    details: [
      "Arthritis, Sciatica & Joint Disorders",
      "Migraine, Skin & Respiratory Issues",
      "Digestive Problems, Diabetes & Hypertension",
      "Women’s Health, Stress & Sleep Disorders",
    ],
  },
  {
    icon: "🌿",
    title: "Detox & Kayakalpa",
    desc: "Detoxify, rejuvenate and renew your inner vitality through ancient Siddha practices.",
    details: [
      "Panchabootha (Five-Element Detox)",
      "Kayakalpa Chikitsa (Rejuvenation Therapy)",
      "Niraivu Program (Mind–Body Balance)",
      "Herbal Steam Bath (Vashpa Swedam)",
    ],
  },
  {
    icon: "🌺",
    title: "Lifestyle & Diet Guidance",
    desc: "Tailored Siddha-based lifestyle and nutrition programs to restore harmony.",
    details: [
      "Dosha-Based Diet Plan",
      "Yoga Therapy",
      "Chronic Recovery Support"
    ],
  },
];

const heroImg = "/image4.jpg"; // Update with your hero image path
const doctorImg = "/doctor.jpg"; // Path to Dr. Rajalakshmi's image (or any doctor image)

const treatmentStats = [
  { label: "Therapies", value: "12+" },
  { label: "Certified Experts", value: "5+" },
  { label: "Recovery Rate", value: "95%" },
];

function MarqIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 33 33" style={{margin: "0 10px", verticalAlign:"middle"}}>
      <g>
        <ellipse cx="16.5" cy="16.5" rx="8.5" ry="8.5" stroke="#ffc13b" strokeWidth="2.1" fill="#f9fbe9"/>
        <path d="M13.5 21 Q12.5 19, 16.5 15 Q20.5 19, 19.5 21" stroke="#18804c" strokeWidth="1.2" fill="none"/>
        <circle cx="16.5" cy="16.5" r="2" fill="#c7e6c5"/>
      </g>
    </svg>
  );
}

function TreatmentCard({ tr, idx }) {
  return (
    <div
      className="animatedCard"
      style={{
        background: "rgba(255,255,255,0.86)",
        borderRadius: "22px",
        boxShadow: "0 10px 25px rgba(30,150,100,0.12), 0 0 0 1px rgba(25,140,90,0.05)",
        padding: "32px 26px 22px",
        transition: "box-shadow 0.18s, transform 0.18s",
        backdropFilter: "blur(6px)",
        borderLeft: "6px solid #16a34a",
        maxWidth: "420px",
        minWidth: "270px",
        width: "100%",
        margin: "0 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animationDelay: `${idx * 0.17}s`
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.035)";
        e.currentTarget.style.boxShadow = "0 20px 42px #19cc8380";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(30,150,100,0.12), 0 0 0 1px rgba(25,140,90,0.05)";
      }}
    >
      <div style={{ fontSize: "2.3rem", marginBottom: 8 }}>{tr.icon}</div>
      <div
        style={{
          fontWeight: 800,
          fontSize: "1.25rem",
          color: "#15803d",
          marginBottom: 6,
          letterSpacing: ".02em",
          textAlign: "center",
          width: "100%",
          maxWidth: "340px"
        }}
      >
        {tr.title}
      </div>
      <div
        style={{
          color: "#256048",
          fontSize: "1.05rem",
          fontWeight: 500,
          marginBottom: 10,
          textAlign: "center",
          width: "100%",
          maxWidth: "360px"
        }}
      >
        {tr.desc}
      </div>
      <ul
        style={{
          color: "#176b4a",
          fontSize: "1.02rem",
          lineHeight: 1.55,
          margin: "0 auto",
          textAlign: "left",
          paddingLeft: 24,
          listStylePosition: "inside",
          maxWidth: "340px",
          width: "100%",
          display: "inline-block"
        }}
      >
        {tr.details.map((d, i) => (
          <li key={i} style={{ marginBottom: 6 }}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Treatments() {
  // Arrange cards in rows of two
  const rows = [];
  for (let i = 0; i < treatments.length; i += 2) {
    if (i + 1 === treatments.length) {
      rows.push(
        <div key={"row-" + i} style={{
          display: "flex", justifyContent: "center", gap: "36px", marginBottom: "44px"
        }}>
          <TreatmentCard tr={treatments[i]} idx={i} />
        </div>
      );
    } else {
      rows.push(
        <div key={"row-" + i} style={{
          display: "flex", justifyContent: "center", gap: "36px", marginBottom: "44px"
        }}>
          <TreatmentCard tr={treatments[i]} idx={i} />
          <TreatmentCard tr={treatments[i + 1]} idx={i + 1} />
        </div>
      );
    }
  }

  return (
    <div style={{ width: "100vw", overflowX: "hidden", background: "#f3fff8" }}>
      <style>{`
        .treatment-hero-bg {
          width: 100vw;
          background: url('/image9.jpg') no-repeat center center/cover;
          padding: 65px 0 65px 0;
          min-height: 470px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }
        .treatment-hero-content {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: center;
          width: 100vw;
          padding: 0 5vw;
        }
        .treatment-hero-img {
          width: 390px;
          height: 370px;
          object-fit: cover;
          box-shadow: 0 6px 38px rgba(41,108,45,0.24);
          background: #fff;
          border-radius: 24px;
        }
        .treatment-hero-right h2 {
          font-size: 2.7rem;
          font-weight: 900;
          color: #15804b;
          margin-bottom: 16px;
          line-height: 1.11;
          letter-spacing: .04em;
        }
        .treatment-hero-right p {
          font-size: 1.25rem;
          color: #245f42;
          line-height: 1.58;
          margin-bottom: 22px;
        }
        .treatment-hero-right ul {
          color: #1a783c;
          font-weight: 600;
          font-size: 1.09rem;
          line-height: 1.7;
          margin: 0;
          list-style-type: disc;
          padding-left: 22px;
        }
        .doctor-banner {
          margin-top: 60px;
          background: linear-gradient(90deg, #15bd69, #17ddb2);
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          border-radius: 16px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
        }
        .doctor-banner-img {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #e4fff4;
          margin-bottom: 12px;
          box-shadow: 0 4px 16px #1e836618;
        }
        @media (max-width: 980px) {
          .treatment-hero-content { grid-template-columns: 1fr; gap: 5vw; padding: 0 3vw;}
          .treatment-hero-img { width: 80vw; height: 240px;}
          .treatment-hero-bg { padding: 32px 0 32px 0; min-height: 270px;}
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="treatment-hero-bg">
        <div className="treatment-hero-content">
          <img
            src={heroImg}
            alt="Treatments Hero"
            className="treatment-hero-img"
          />
          <div className="treatment-hero-right">
            <h2>
              Explore Our<br />Authentic Siddha Treatments
            </h2>
            <p>
              Discover holistic therapies for pain relief, wellness, chronic ailments and rejuvenation.
              Our certified Siddha practitioners tailor each therapy and medicine to your unique mind-body needs.
            </p>
            <ul>
              <li>Therapies: massage, detox, mind-body care</li>
              <li>Personalized Disease Management</li>
              <li>Holistic diet & rejuvenation support</li>
            </ul>
          </div>
        </div>
      </div>
      {/* STATS ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "32px",
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto 44px auto",
        }}
      >
        {treatmentStats.map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: "#eaf8f1",
              border: "2px solid #19b17b",
              borderRadius: "13px",
              flex: "1 1 160px",
              minWidth: "100px",
              maxWidth: "220px",
              padding: "16px 6px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.7rem",
                color: "#15a463",
                marginBottom: "5px",
              }}
            >
              {value}
            </span>
            <span
              style={{
                color: "#19b17b",
                fontWeight: 600,
                fontSize: "1.07rem",
                textAlign: "center"
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      {/* CARD ROWS */}
      <div
        style={{
          maxWidth: "990px",
          margin: "0 auto",
          padding: "0 18px",
        }}
      >
        {rows}
      </div>
      {/* Doctor Banner Section */}
      <div className="doctor-banner">
        {doctorImg &&
          <img
            src={doctorImg}
            alt="Dr. D. Rajalakshmi"
            className="doctor-banner-img"
          />
        }
        <h3 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "7px" }}>
          👩‍⚕️ Guided by Dr. D. Rajalakshmi
        </h3>
        <p style={{ fontSize: "1.08rem", marginBottom: "10px" }}>
          Siddha Physician, 20+ years of holistic healing expertise at Traditional Care Hospital.
        </p>
        <button
          style={{
            background: "#fff",
            color: "#14804b",
            border: "none",
            borderRadius: "8px",
            padding: "10px 22px",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.2s",
            marginTop: "8px"
          }}
          onClick={() => (window.location.href = "/appointment")}
          onMouseOver={e => (e.target.style.background = "#e4fff4")}
          onMouseOut={e => (e.target.style.background = "#fff")}
        >
          Book Consultation
        </button>
      </div>
      {/* Add Marquee or other bottom sections below as needed */}
    </div>
  );
}
