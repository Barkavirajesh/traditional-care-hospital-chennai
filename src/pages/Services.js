import React from "react";

const iconList = [
  "🌿", "💊", "💆‍♀️", "🧘‍♂️", "👩‍🍼", "💻"
];

const services = [
  {
    title: "Siddha Consultation",
    desc: "Personalized one-on-one consultations with experienced Siddha physicians who identify your body constitution (Vatham, Pitham, Kabam) and design customized treatments.",
    points: [
      "Pulse reading, diet advice, and herbal prescriptions",
    ],
  },
  {
    title: "Siddha Medicine & Pharmacy",
    desc: "Authentic Siddha herbal formulations prepared with precision from natural ingredients.",
    points: [
      "In-house medicine preparation",
      "Safe, natural, and effective remedies",
      "Chronic disease management (arthritis, diabetes, skin disorders, etc.)",
    ],
  },
  {
    title: "Traditional Siddha Therapies",
    desc: "Restore your body’s natural balance with our time-tested therapies:",
    points: [
      "Varmam Therapy: Healing through vital energy points",
      "Thokkanam (Siddha Massage): Relieves pain and improves blood circulation",
      "Nasyam: Herbal detox for sinuses and headaches",
      "Leech Therapy (Attai Vaidyam): Blood purification and skin health",
      "Podi Kizhi / Ilakizhi: Herbal poultice therapy for joint & muscle pain",
      "Steam Therapy: Body detox and relaxation",
    ],
  },
  {
    title: "Rejuvenation & Detox Programs",
    desc: "Comprehensive wellness packages combining Siddha, Yoga, and diet.",
    points: [
      "Body Detox & Rejuvenation",
      "Stress Relief & Sleep Improvement",
      "Joint Pain & Arthritis Management",
      "Weight Loss & Obesity Control"
    ],
  },
  {
    title: "Women & Child Wellness",
    desc: "Gentle, holistic care for women and children.",
    points: [
      "Prenatal & Postnatal Care",
      "Menstrual Health Regulation",
      "Natural Fertility Support",
      "Child Immunity & Growth Programs"
    ],
  },
  {
    title: "Online Siddha Consultation",
    desc: "Virtual Siddha consultations for patients outside Chennai.",
    points: [
      "Get digital prescriptions and medicine home delivery"
    ],
  }
];

export default function Services() {
  return (
    <section
      style={{
        padding: "55px 0 64px 0",
        background: "repeating-linear-gradient(150deg, #f4fff4 0 96px, #e7fcef 120px 240px)",
        fontFamily: "'Inter', Arial, sans-serif",
        minHeight: "100vh"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#15803d",
          fontSize: "2.25rem",
          marginBottom: "13px",
          fontWeight: "900",
          letterSpacing: ".08em",
          textShadow: "0 1px 1px #cdf4e1",
          position: "relative",
          display: "inline-block"
        }}
      >
        Our Siddha Services
        <span style={{
          width: "68%",
          height: 4,
          background: "linear-gradient(90deg,#15bd69 10%,#17ddb2 80%)",
          display: "block",
          borderRadius: 8,
          margin: "13px auto 0 auto"
        }}></span>
      </h2>
      <div style={{
          textAlign: "center",
          color: "#208355",
          fontSize: "1.13rem",
          fontWeight: 500,
          marginBottom: "29px",
          opacity: 0.94
        }}>
        Restoring balance and health through centuries-old wisdom, modern care, and personal touch.
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px 32px",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 10px"
        }}
      >
        {services.map((service, idx) => (
          <div
            key={service.title}
            style={{
              background: "rgba(255,255,255,0.81)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 36px 2px #1c954d14, 0 0 0 1.5px #b4ffd833",
              borderRadius: "24px",
              padding: "24px 16px 18px 17px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderLeft: "7px solid #15bd69",
              borderBottom: "2px dotted #baf0d0",
              position: "relative",
              minHeight: 135,
              overflow: "hidden",
              outline: "none",
              transition: "box-shadow 0.18s cubic-bezier(.4,0,.2,1), transform 0.15s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
              animation: `fadeInUp 0.7s cubic-bezier(.29,.81,.49,.98) both ${idx*0.14+0.11}s`
            }}
            tabIndex={0}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 18px 40px 1px #22eea044, 0 0 0 2.5px #53ebb327";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.012)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 8px 36px 2px #1c954d14, 0 0 0 1.5px #b4ffd833";
              e.currentTarget.style.transform = "none";
            }}
          >
            {/* Subtle icon in background for accent */}
            <span style={{
              position: "absolute",
              right: "-21px", top: "13px",
              fontSize: "2.3rem",
              color: "#e2fced", opacity: 0.14,
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
              fontFamily: "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
            }}>{iconList[idx % iconList.length]}</span>
            {/* Icon + Header */}
            <div style={{
                fontWeight: 800,
                fontSize: "1.09rem",
                color: "#17a05c",
                marginBottom: 6,
                letterSpacing: "0.22px",
                textAlign: "left",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 10
              }}>
              <span style={{
                fontSize: "1.15rem",
                background: "radial-gradient(circle,#b7edd4 70%,#fff0)",
                borderRadius: "8px",
                marginRight: "2px",
                boxShadow: "0 1px 7px #aceec044"
              }}>{iconList[idx % iconList.length]}</span>
              {service.title}
            </div>
            <div style={{
              color: "#192b1a",
              fontWeight: 500,
              fontSize: "0.89rem",
              marginBottom: 5,
              textAlign: "left",
              lineHeight: 1.42,
              zIndex: 2
            }}>
              {service.desc}
            </div>
            <ul style={{
              margin: "0",
              color: "#0fa757",
              fontSize: "0.91rem",
              textAlign: "left",
              listStyle: "none",
              width: "100%",
              zIndex: 2,
              paddingLeft: "0"
            }}>
              {service.points.map((point, i) => (
                <li key={i} style={{
                  marginBottom: 3,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}>
                  <span style={{
                    fontSize: "0.92em",
                    color: "#38c06c",
                    background: "#cdfce3",
                    borderRadius: "50%",
                    width: "0.95em",
                    height: "0.95em",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 3
                  }}>✔️</span>
                  {point}
                </li>
              ))}
            </ul>
            {/* Nice ribbon accent for featured */}
            {idx === 0 && (
              <span style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "linear-gradient(120deg,#16df88 70%,#c2fce1 100%)",
                color: "#fff",
                padding: "2.5px 9px",
                borderRadius: "0 0 8px 0",
                fontWeight: 600,
                fontSize: "0.86rem",
                letterSpacing: ".09em",
                boxShadow: "0 2px 8px #90ecc08822",
                zIndex: 5
              }}>
                Popular
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Animated entry & responsive grid */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(34px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @media (max-width: 900px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr !important;
            gap: 13px !important;
          }
        }
      `}
      </style>
    </section>
  );
}


