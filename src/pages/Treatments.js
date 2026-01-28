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
    <div className="treatment-card animatedCard">
      <div style={{ fontSize: "2.3rem", marginBottom: 8 }}>{tr.icon}</div>

      <div className="card-title">{tr.title}</div>

      <div className="card-desc">{tr.desc}</div>

      <ul className="card-list">
        {tr.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Treatments() {
  return (
    <div style={{ width: "100vw", overflowX: "hidden", background: "#f3fff8" }}>
      {/* HERO SECTION */}
      <div className="treatment-hero-bg">
        <div className="treatment-hero-content">
          <img
            src="/image4.jpg"
            alt="Treatments Hero"
            className="hero-image"
          />

          <div>
            <h2 className="hero-title">
              Explore Our
              <br />
              Authentic Siddha Treatments
            </h2>

            <p className="hero-desc">
              Discover holistic therapies for pain relief, wellness, chronic ailments and rejuvenation.
              Our certified Siddha practitioners tailor each therapy and medicine to your unique mind-body needs.
            </p>

            <ul className="hero-list">
              <li>Therapies: massage, detox, mind-body care</li>
              <li>Personalized Disease Management</li>
              <li>Holistic diet & rejuvenation support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="stats-row">
        {treatmentStats.map(({ label, value }) => (
          <div key={label} className="stat-box">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* TREATMENT CARDS */}
      <div className="cards-wrapper">
        {treatments.map((tr, idx) => (
          <TreatmentCard key={idx} tr={tr} idx={idx} />
        ))}
      </div>

      {/* DOCTOR BANNER */}
      <div className="doctor-banner">
        <img
          src="/doctor.jpg"
          alt="Dr. D. Rajalakshmi"
          className="doctor-img"
        />

        <h3>👩‍⚕️ Guided by Dr. D. Rajalakshmi(Medical Officer)</h3>

        <p>
          Siddha Physician, 20+ years of holistic healing expertise at Traditional Care Hospital.
        </p>

        <button
          onClick={() => (window.location.href = "/appointment")}
        >
          Book Consultation
        </button>
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
        .treatment-hero-bg {
          background: url('/image9.jpg') no-repeat center center / cover;
          padding: 60px 0;
          min-height: 420px;
          display: flex;
          align-items: center;
        }

        .treatment-hero-content {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          padding: 0 5vw;
        }

        .hero-image {
          width: 390px;
          height: 370px;
          object-fit: cover;
          box-shadow: 0 6px 38px rgba(41,108,45,0.24);
          background: #fff;
          border-radius: 24px;
        }

        .hero-title {
          font-size: 2.7rem;
          font-weight: 900;
          color: #15804b;
          margin-bottom: 16px;
          line-height: 1.11;
          letter-spacing: .04em;
        }

        .hero-desc {
          font-size: 1.25rem;
          color: #245f42;
          line-height: 1.58;
          margin-bottom: 22px;
        }

        .hero-list {
          color: #1a783c;
          font-weight: 600;
          font-size: 1.09rem;
          line-height: 1.7;
          margin: 0;
          list-style-type: disc;
          padding-left: 22px;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 32px;
          width: 100%;
          max-width: 850px;
          margin: 0 auto 44px auto;
          flex-wrap: wrap;
          padding: 0 12px;
        }

        .stat-box {
          background: #eaf8f1;
          border: 2px solid #19b17b;
          border-radius: 13px;
          flex: 1 1 160px;
          min-width: 120px;
          max-width: 220px;
          padding: 16px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .stat-value {
          font-weight: 800;
          font-size: 1.7rem;
          color: #15a463;
          margin-bottom: 5px;
        }

        .stat-label {
          color: #19b17b;
          font-weight: 600;
          font-size: 1.07rem;
          text-align: center;
        }

        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 36px;
          max-width: 990px;
          margin: 0 auto;
          padding: 0 18px;
        }

        .treatment-card {
          background: rgba(255,255,255,0.9);
          border-radius: 22px;
          box-shadow: 0 10px 25px rgba(30,150,100,0.12);
          padding: 28px 22px 22px;
          border-left: 6px solid #16a34a;
          max-width: 420px;
          width: 100%;
          margin-bottom: 24px;
          text-align: center;
        }

        .card-title {
          font-weight: 800;
          font-size: 1.25rem;
          color: #15803d;
          margin-bottom: 6px;
        }

        .card-desc {
          color: #256048;
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .card-list {
          color: #176b4a;
          font-size: 1.02rem;
          line-height: 1.55;
          margin: 0 auto;
          text-align: left;
          padding-left: 18px;
          max-width: 340px;
        }

        .doctor-banner {
          margin: 60px auto 40px;
          background: linear-gradient(90deg, #15bd69, #17ddb2);
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          border-radius: 16px;
          max-width: 560px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
        }

        .doctor-img {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #e4fff4;
          margin-bottom: 12px;
        }

        .doctor-banner h3 {
          font-weight: 800;
          font-size: 1.3rem;
          margin-bottom: 7px;
        }

        .doctor-banner p {
          font-size: 1.05rem;
          margin-bottom: 12px;
        }

        .doctor-banner button {
          background: #fff;
          color: #14804b;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
        }

        /* 🔥 MOBILE FIXES */
        @media (max-width: 768px) {
          .treatment-hero-content {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
          }

          .hero-image {
            width: 100%;
            height: 220px;
            border-radius: 16px;
          }

          .hero-title {
            font-size: 2rem;
            line-height: 1.2;
          }

          .hero-desc {
            font-size: 1.05rem;
          }

          .hero-list {
            font-size: 1rem;
            padding-left: 18px;
            text-align: left;
          }

          .stat-value {
            font-size: 1.4rem;
          }

          .stat-label {
            font-size: 0.95rem;
          }

          .cards-wrapper {
            gap: 22px;
          }

          .treatment-card {
            padding: 22px 18px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.7rem;
          }

          .hero-desc {
            font-size: 1rem;
          }

          .doctor-banner h3 {
            font-size: 1.15rem;
          }

          .doctor-banner p {
            font-size: 0.95rem;
          }
        }
        `}
      </style>
    </div>
  );
}
