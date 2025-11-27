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
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/book-appointment");
  };

  return (
    <section className="about-section">

      {/* IMAGE + TEXT */}
      <div className="about-top">
        
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img
            src={aboutImg}
            alt="Siddha Wellness"
            className="about-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <h2>TCH workshops are a place of<br />peace and balance</h2>
          <p>
            Our TCH Workshops are peaceful sanctuaries where you can escape daily stress 
            and rediscover harmony. Rooted in Siddha and Ayurvedic healing, our sessions 
            focus on balance, rejuvenation, and well-being.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-row">
        {stats.map(({ label, value }) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="services-main">
        <h2 className="services-heading">Our Holistic Sidha Services</h2>
        <p className="services-desc">
          At TCH , we offer a wide range of holistic Sidha services. 
          Our services are designed to restore balance & nourish your mind and body.
        </p>

        <div className="services-container">
          {services.map((service, idx) => (
            <div key={service.title} className="service-box">
              <div>{service.icon}</div>
              <div className="service-title">{service.title}</div>

              <button onClick={handleBookNow} className="book-btn">
                Book Now
                <span className="btn-arrow">›</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRESS SECTION */}
      <div className="progress-grid">

        {/* LEFT CONTENT */}
        <div className="progress-left">
          <div className="tour-title">About Tour</div>
          <h2>Step into serenity and harmony</h2>
          <p>
            These tours provide a chance to learn about the Sidha principles.
            Experience the stunning revelations of Nadi Pariksha, a traditional
            diagnostic practice that uses pulse reading to examine your entire well-being.
          </p>

          <Bar label="Holistic Wellness Techniques" percent={45} color="#fb923c" />
          <Bar label="Sidha Meal Insights" percent={45} color="#fb923c" />
          <Bar label="Traditional Healing Practices" percent={45} color="#fb923c" />
        </div>

        {/* RIGHT IMAGE */}
        <div className="progress-right">
          <img src="/image4.jpg" alt="Magic of Sidha" className="progress-img" />
          <div className="sidha-tag">Magic of sidha</div>
        </div>

      </div>
    </section>
  );
}
