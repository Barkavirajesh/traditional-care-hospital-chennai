import React from "react";
import { useNavigate } from "react-router-dom";

const aboutImg = "sidha herbs.jpg";

const stats = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Expert Practitioners", value: "2+" },
  { label: "Effective Therapies", value: "50+" },
  { label: "Happy Communities", value: "1k+" },
];

const services = [
  {
    icon: <img src="/image1.jpg" alt="Video Consultation" style={{width: 90, height: 90, objectFit: "contain", marginBottom: 10}} />,
    title: "Video Consultation",
  },
  {
    icon: <img src="/image2.jpg" alt="Call Consultation" style={{width: 90, height: 90, objectFit: "contain", marginBottom: 10}} />,
    title: "Call Consultation",
  },
  {
    icon: <img src="/image3.jpg" alt="Clinic Consultation" style={{width: 90, height: 90, objectFit: "contain", marginBottom: 10}} />,
    title: "Clinic Consultation",
  }
];

function Bar({ label, percent, color }) {
  return (
    <div style={{marginBottom: "32px"}}>
      <div style={{ fontWeight: 700, marginBottom: "3px" }}>{label}</div>
      <div style={{display: "flex", alignItems: "center", position: "relative"}}>
        <div style={{
          width: "80%",
          height: "7px",
          background: "#e5ece1",
          borderRadius: "6px",
          marginRight: "12px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${percent}%`,
            height: "100%",
            background: color,
            borderRadius: "9px",
            position: "absolute",
            left: 0,
            top: 0,
            transition: "width 1s"
          }} />
        </div>
        <div style={{minWidth:"41px", fontWeight:500, fontSize:"1rem", color:"#333"}}>{percent}%</div>
      </div>
    </div>
  );
}

export default function AboutUsHeroSection() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleBookNow = () => {
    navigate("/book-appointment"); // ✅ Navigate to Book Appointment page
  };

  return (
    <section
      style={{
        background: "#fff",
        fontFamily: "'Inter', Arial, sans-serif",
        padding: "80px 0 0 0",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >

      {/* Image and Wordings Side by Side */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          width: "100vw",
          gap: "4vw",
          marginBottom: "32px",
        }}
      >
        {/* LEFT: Image */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}>
          <img
            src={aboutImg}
            alt="Siddha Wellness"
            style={{
              width: "520px",
              height: "340px",
              maxWidth: "95vw",
              minWidth: "250px",
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 18px 56px rgba(21, 174, 112, 0.19)",
              background: "#fff",
              transition: "transform 0.4s cubic-bezier(.47,1.64,.41,.8)",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* RIGHT: Wordings */}
        <div style={{ width: "100%", paddingRight: "2vw" }}>
          <h2 style={{
            fontWeight: 800,
            fontSize: "2.8rem",
            color: "#166534",
            marginBottom: "18px",
            lineHeight: 1.11,
          }}>
            TCH workshops are a place of<br />peace and balance
          </h2>
          <p style={{
            fontSize: "1.19rem",
            color: "#374151",
            maxWidth: "720px",
            marginBottom: "38px",
            lineHeight: 1.7,
          }}>
            Our TCH Workshops are peaceful sanctuaries where you can escape daily stress and rediscover harmony. Rooted in Siddha and Ayurvedic healing, our sessions focus on balance, rejuvenation, and well-being.
          </p>
        </div>
      </div>

      {/* --- STATS ROW --- */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "22px",
          marginBottom: "43px",
          flexWrap: "nowrap",
        }}
      >
        {stats.map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: "#eaf8f1",
              border: "2px solid #19995d",
              borderRadius: "14px",
              flex: "1 1 240px",
              minWidth: "240px",
              maxWidth: "320px",
              padding: "14px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <span style={{
              fontWeight: 800,
              fontSize: "2rem",
              color: "#15803d",
              marginBottom: "10px",
            }}>
              {value}
            </span>
            <span style={{
              color: "#19995d",
              fontWeight: 600,
              fontSize: "1.1rem",
              textAlign: "center"
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* --- Holistic Ayurveda Services --- */}
      <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0 60px 0"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <h2 style={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: "2.5rem",
            color: "#15803d",
            marginBottom: "10px",
            marginTop: "15px"
          }}>
            Our Holistic Sidha Services
          </h2>
          <p style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#166534",
            fontSize: "1.14rem"
          }}>
            At TCH , we offer a wide range of holistic Sidha services. Our services are designed to restore balance & nourish your mind and body.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto",
            borderBottom: "2px solid #19995d"
          }}>
            {services.map((service, idx) => (
              <div
                key={service.title}
                style={{
                  flex: "1 1 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 18px 22px 18px",
                  borderRight: idx < services.length - 1 ? "2px solid #19995d" : "none",
                  textAlign: "center"
                }}
              >
                <div style={{marginBottom: "22px", marginTop: "14px"}}>{service.icon}</div>
                <div style={{
                  fontSize: "1.38rem",
                  fontWeight: 700,
                  color: "#f97316",
                  marginBottom: "10px",
                  marginTop: "7px",
                  textAlign: "center"
                }}>{service.title}</div>
                <button
                  onClick={handleBookNow}
                  style={{
                    marginTop: "20px",
                    borderRadius: "35px",
                    border: "2px solid #19995d",
                    background: "#fff",
                    boxShadow: "0 2px 7px rgba(21,174,112,0.06)",
                    color: "#15803d",
                    padding: "8px 32px",
                    fontWeight: 600,
                    fontSize: "1.13rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  Book Now
                  <span style={{
                    display:"inline-block",
                    width:"18px",
                    height:"18px",
                    borderRadius:"50%",
                    background:"#19995d",
                    color:"#fff",
                    lineHeight:"18px",
                    fontSize:"1.08rem",
                    marginLeft: "4px"
                  }}>›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT TOUR / PROGRESS BAR SECTION --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2.5fr 1.2fr",
          alignItems: "center",
          gap: "32px",
          padding: "36px 0 0 0",
          width: "100vw",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT: Text and Progress */}
        <div style={{ paddingLeft: "44px", minWidth: 0 }}>
          <div style={{ color: "#166534", fontWeight: 600, fontSize: "1.12rem", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "1.1rem", color: "#fb923c", marginRight: "7px" }}>▍</span>
            About Tour
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#1a8750", marginBottom: "12px" }}>
            Step into serenity and harmony
          </h2>
          <div style={{ fontSize: "1.03rem", color: "#253135", marginBottom: "24px", maxWidth: "690px", lineHeight: 1.58 }}>
            These tours provide a chance to learn about the Sidha principles. Experience the stunning revelations of Nadi Pariksha, a traditional diagnostic practice that uses pulse reading to examine your physical, mental, and emotional health.
          </div>

          <Bar label="Holistic Wellness Techniques" percent={45} color="#fb923c" />
          <Bar label="Sidha Meal Insights" percent={45} color="#fb923c" />
          <Bar label="Traditional Healing Practices" percent={45} color="#fb923c" />
        </div>

        {/* RIGHT: Image */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
          <img
            src="/image4.jpg"
            alt="Magic of sidha"
            style={{
              width: "99%",
              height: "325px",
              objectFit: "cover",
              borderRadius: "19px",
              boxShadow: "0 10px 60px rgba(186,119,20, 0.19)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "40px",
              bottom: "42px",
              background: "#fb923c",
              borderRadius: "9px",
              color: "#fff",
              fontWeight: 800,
              fontSize: "2rem",
              padding: "20px 55px 17px 45px",
              boxShadow: "0 3px 18px rgba(251, 146, 60, 0.15)",
              zIndex: 2,
              whiteSpace: "nowrap"
            }}
          >
            Magic of sidha
          </div>
        </div>
      </div>
    </section>
  );
}
