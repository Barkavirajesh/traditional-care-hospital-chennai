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
    details: ["Dosha-Based Diet Plan", "Yoga Therapy", "Chronic Recovery Support"],
  },
];

const treatmentStats = [
  { label: "Therapies", value: "12+" },
  { label: "Certified Experts", value: "5+" },
  { label: "Recovery Rate", value: "95%" },
];

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
        animationDelay: `${idx * 0.17}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.035)";
        e.currentTarget.style.boxShadow = "0 20px 42px #19cc8380";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(30,150,100,0.12), 0 0 0 1px rgba(25,140,90,0.05)";
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
          maxWidth: "340px",
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
          maxWidth: "360px",
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
          display: "inline-block",
        }}
      >
        {tr.details.map((d, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {d}
          </li>
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
        <div
          key={"row-" + i}
          className="treatment-row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "36px",
            marginBottom: "44px",
          }}
        >
          <TreatmentCard tr={treatments[i]} idx={i} />
        </div>
      );
    } else {
      rows.push(
        <div
          key={"row-" + i}
          className="treatment-row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "36px",
            marginBottom: "44px",
          }}
        >
          <TreatmentCard tr={treatments[i]} idx={i} />
          <TreatmentCard tr={treatments[i + 1]} idx={i + 1} />
        </div>
      );
    }
  }

  return (
    <div style={{ width: "100vw", overflowX: "hidden", background: "#f3fff8" }}>
      {/* HERO SECTION */}
      <div
        className="treatment-hero-bg"
        style={{
          background: "url('/image9.jpg') no-repeat center center/cover",
          padding: "65px 0",
          minHeight: "470px",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          className="treatment-hero-content"
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "60px",
            alignItems: "center",
            width: "100vw",
            padding: "0 5vw",
          }}
        >
          <img
            src="/image4.jpg"
            alt="Treatments Hero"
            className="treatment-hero-img"
            style={{
              width: "390px",
              height: "370px",
              objectFit: "cover",
              boxShadow: "0 6px 38px rgba(41,108,45,0.24)",
              background: "#fff",
              borderRadius: "24px",
            }}
          />
          <div className="treatment-hero-right">
            <h2
              style={{
                fontSize: "2.7rem",
                fontWeight: 900,
                color: "#15804b",
                marginBottom: 16,
                lineHeight: 1.11,
                letterSpacing: ".04em",
              }}
            >
              Explore Our
              <br />
              Authentic Siddha Treatments
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#245f42",
                lineHeight: 1.58,
                marginBottom: 22,
              }}
            >
              Discover holistic therapies for pain relief, wellness, chronic ailments and rejuvenation.
              Our certified Siddha practitioners tailor each therapy and medicine to your unique mind-body needs.
            </p>
            <ul
              style={{
                color: "#1a783c",
                fontWeight: 600,
                fontSize: "1.09rem",
                lineHeight: 1.7,
                margin: 0,
                listStyleType: "disc",
                paddingLeft: 22,
              }}
            >
              <li>Therapies: massage, detox, mind-body care</li>
              <li>Personalized Disease Management</li>
              <li>Holistic diet & rejuvenation support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STATS ROW */}
      <div
        className="stats-container"
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
                marginBottom: 5,
              }}
            >
              {value}
            </span>
            <span
              style={{
                color: "#19b17b",
                fontWeight: 600,
                fontSize: "1.07rem",
                textAlign: "center",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* CARD ROWS */}
      <div style={{ maxWidth: "990px", margin: "0 auto", padding: "0 18px" }}>{rows}</div>

      {/* Doctor Banner */}
      <div
        className="doctor-banner"
        style={{
          marginTop: 60,
          background: "linear-gradient(90deg, #15bd69, #17ddb2)",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
          borderRadius: 16,
          maxWidth: 560,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 6px 24px rgba(0,0,0,0.10)",
        }}
      >
        <img
          src="/doctor.jpg"
          alt="Dr. D. Rajalakshmi"
          className="doctor-banner-img"
          style={{
            width: 68,
            height: 68,
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid #e4fff4",
            marginBottom: 12,
            boxShadow: "0 4px 16px #1e836618",
          }}
        />
        <h3 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 7 }}>
          👩‍⚕️ Guided by Dr. D. Rajalakshmi
        </h3>
        <p style={{ fontSize: "1.08rem", marginBottom: 10 }}>
          Siddha Physician, 20+ years of holistic healing expertise at Traditional Care Hospital.
        </p>
        <button
          style={{
            background: "#fff",
            color: "#14804b",
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.2s",
            marginTop: 8,
          }}
          onClick={() => (window.location.href = "/appointment")}
          onMouseOver={(e) => (e.target.style.background = "#e4fff4")}
          onMouseOut={(e) => (e.target.style.background = "#fff")}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}
