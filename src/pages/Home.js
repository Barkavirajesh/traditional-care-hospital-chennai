import React, { useEffect, useState } from "react";

const slides = [
  {
    heading: "Restore Balance, Embrace Wellness with Sidha Care",
    desc: "We guide you toward holistic health by restoring balance in mind, body, and spirit with personalized sidha care. Embrace natural wellness today!",
    img: "/image5.jpg"
  },
  {
    heading: "Experience Holistic Healing with Sidha",
    desc: "Discover the power of Sidha medicine for natural recovery, energy, and well-being, using time-tested formulas and holistic wisdom. Bring harmony to your body, mind, and spirit—Start your Sidha wellness journey today!",
    img: "/image6.jpg"
  }
];

export default function HomePage() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((idx) => (idx + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Book Consultation redirect handler
  const goToAppointment = () => window.location.href = "/appointment";

  return (
    <>
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #f9fdfb;
        }
        .homepage-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  overflow: hidden;
  background: #f3faf5;
}

/* Background image layer */
.hero-image-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.lotus-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65); /* Slight dark overlay for better text visibility */
}

/* Text content layer */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: GREEN;
  max-width: 800px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #f8f8f8;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}

/* Slideshow dots now overlay at the bottom center */
.slideshow-controls {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 3;
}
.slideshow-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: background 0.3s;
}
.slideshow-dot.active {
  background: #ff7e1e;
}
  .consult-btn {
  background: #ff7e1e;          /* bright orange */
  color: #fff;                  /* white text */
  font-size: 1.3rem;
  font-weight: 700;             /* bold */
  padding: 0.9em 2.4em;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 6px 15px rgba(255, 126, 30, 0.4); /* glowing orange shadow */
}

.consult-btn:hover {
  background: #e86c05;          /* deeper orange on hover */
  transform: scale(1.05);       /* slight zoom */
  box-shadow: 0 8px 18px rgba(255, 126, 30, 0.55);
}


        .achievement-section {
          margin: 70px 8vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        .achievement-text {
          flex: 1;
        }
        .achievement-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .achievement-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff7e1e;
          margin-left: 8px;
        }
        .achievement-title {
          color: #22844F;
          font-size: 1.8rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .achievement-desc {
          font-size: 1rem;
          color: #1c3124;
          line-height: 1.5;
          margin-top: 10px;
          max-width: 480px;
        }
        .achievement-cards {
          display: flex;
          flex-direction: row;
          gap: 30px;
          flex: 1;
          justify-content: flex-end;
        }
        .achievement-card {
          background: #fffaf2;
          border: 2px solid #bde5cf;
          border-radius: 12px;
          padding: 25px 35px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          text-align: center;
          width: 200px;
        }
        .achievement-number {
          font-size: 2.4rem;
          color: #15824b;
          font-weight: bold;
        }
        .achievement-label {
          font-size: 1rem;
          color: #15824b;
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .achievement-section {
            flex-direction: column;
            text-align: center;
          }
          .achievement-cards {
            justify-content: center;
          }
        }
        .feature-section {
          display: flex;
          align-items: center;
          gap: 36px;
          margin: 38px 6vw 55px 6vw;
        }
        .feature-left {
          flex: 1;
        }
        .feature-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          box-shadow: 0 6px 40px rgba(0, 0, 0, 0.1);
        }
        .feature-right {
          flex: 1.2;
          max-width: 600px;
        }
        .feature-right h2 {
          color: #22844F;
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .feature-sub {
          font-size: 1rem;
          color: #40A888;
          margin-bottom: 1em;
          font-weight: 500;
        }
        .feature-right p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #124123;
          margin-bottom: 1em;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6em 1.2em;
          margin-bottom: 1.2rem;
        }
        .fi-icon {
          color: #ff7e1e;
          margin-right: 7px;
          font-size: 1.02em;
        }
        .feature-btns {
          margin-top: 1rem;
          display: flex;
          gap: 12px;
        }
        .learn-btn, .consult-btn.second {
          background: #fff;
          color: #22844F;
          border: 2px solid #22844f;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 28px;
          padding: 7px 22px;
          transition: background .18s, color .18s;
          cursor: pointer;
        }
        .learn-btn:hover {
          background: #22844F;
          color: #fff;
        }
        .consult-btn.second {
          background: #ff7e1e;
          color: #fff;
          border: 2px solid #ff7e1e;
        }
        .consult-btn.second:hover {
          background: #d96a09;
        }
        /* Doctor Frame Section for full image left */
        .doctor-frame-section {
          display: flex;
          align-items: stretch;
          gap: 50px;
          margin: 60px 7vw 60px 7vw;
          background: #f3faf5;
          border-radius: 29px;
          padding: 30px 24px;
          box-shadow: 0 2px 24px #bbe5cf14;
        }
        .doctor-frame-left {
          flex: 1.1 1 0;
          display: flex;
          align-items: stretch;
        }
        .doctor-frame-left img {
          width: 100%;
          height: 100%;
          min-height: 340px;
          max-height: 460px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 6px 30px #bbe5cf36;
          background: #fff;
        }
        .doctor-frame-right {
          flex: 1.5 1 0;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #124123;
          padding-left: 36px;
        }
        .doctor-frame-right h2 {
          font-size: 2rem;
          color: #22844F;
          margin-bottom: 7px;
        }
        .doctor-frame-right h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #ff7e1e;
        }
        .doctor-frame-right p {
          font-size: 1.08rem;
          line-height: 1.68;
        }
        /* --- WHY CHOOSE AYUR KHYATI --- */
        .why-ayur-section {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          margin: 48px 5vw 0 5vw;
          min-height: 390px;
        }
        .why-ayur-left {
          flex: 1.25 1 0;
          padding-right: 1vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .why-ayur-left h1 {
          font-size: 3.25rem;
          color: #22844F;
          font-weight: bold;
          margin-bottom: 0.18em;
          margin-top: 0;
        }
        .why-ayur-left .green { color: #22844F;}
        .why-ayur-sub {
          font-size: 1.15rem;
          margin-bottom: 1.4em;
          color: #247f62;
        }
        .why-ayur-left h2 {
          font-size: 2.38rem;
          color: #22844F;
          font-weight: bold;
          margin-bottom: 0.27em;
          margin-top: 0;
          line-height: 1.13;
        }
        .why-ayur-orange { color: #ff7e1e; margin-right: 8px;}
        .why-ayur-desc {
          font-size: 1.16rem;
          margin-bottom: 1.8em;
          color: #195334;
        }
        .why-ayur-feature > div {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 1.35em;
        }
        .why-ico {
          color: #22844F;
          font-size: 1.72rem;
          margin-right: 6px;
          display: inline-block;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .why-ayur-feature b {
          font-size: 1.38rem;
          color: #154f2c;
          display: block;
          margin-bottom: 0.12em;
        }
        .why-ayur-blurb {
          font-size: 1rem;
          color: #1b4042;
          margin-left: 0;
          margin-bottom: 3px;
        }
        .viewmore-btn {
          margin-top: 0.9rem;
          background: #22844f;
          color: #fff;
          border: none;
          font-size: 1.22rem;
          font-weight: 600;
          padding: 0.6em 2.2em;
          border-radius: 32px;
          cursor: pointer;
          transition: background .14s;
          box-shadow: 0 2px 10px #bbe5cf37;
        }
        .viewmore-btn:hover {
          background: #ff7e1e;
          color: #fff;
        }
        .why-ayur-right {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          overflow: hidden;
          min-height: 350px;
          max-height: 440px;
          border-radius: 0 48px 0 68px;
        }
        .why-ayur-right img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 0 38px 0 50px;
        }
        @media (max-width: 1100px) {
          .why-ayur-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin: 22px 4vw 0 4vw;
          }
          .why-ayur-right { margin-top: 20px; min-height: 180px;}
          .why-ayur-left h1 { font-size: 2rem;}
          .why-ayur-left h2 { font-size: 1.2rem;}
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="homepage-hero">
        <div className="hero-content">
          <h1>{slides[currentIdx].heading}</h1>
          <p>{slides[currentIdx].desc}</p>
          <button className="consult-btn" onClick={goToAppointment}>
            Book Consultation <span>→</span>
          </button>
        </div>
        <div className="hero-image-container">
          <img
            className="lotus-img"
            src={slides[currentIdx].img}
            alt="Lotus Slide"
          />
          <div className="slideshow-controls">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`slideshow-dot${currentIdx === idx ? " active" : ""}`}
                onClick={() => setCurrentIdx(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* ACHIEVEMENT SECTION */}
      <div className="achievement-section">
        <div className="achievement-cards">
          <div className="achievement-card">
            <div className="achievement-number">20+</div>
            <div className="achievement-label">Years of Expertise</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">1000+</div>
            <div className="achievement-label">Proven Care</div>
          </div>
        </div>
        <div className="achievement-text">
          <div className="achievement-header">
            <span className="achievement-title">OUR ACHIEVEMENT</span>
            <span className="achievement-dot"></span>
          </div>
          <div className="achievement-desc">
            We take pride in our journey of transforming lives through natural healing and holistic care.
            Here’s a glimpse of our accomplishments that reflect our commitment to well-being.
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="feature-section">
        <div className="feature-left">
          <img src="/image6.jpg" alt="Herbal mix" />
        </div>
        <div className="feature-right">
          <h2>
            Discover Holistic Wellness with <span className="green">TCH</span>
          </h2>
          <div className="feature-sub">
            We are committed to helping people to live healthier and more balanced lives.
          </div>
          <p>
            We focus on personalized treatment based on your unique needs and constitution.
            TCH provides care that genuinely understands you.<br /><br />
            Whether you want to treat a specific health condition, restore your body, or improve your entire lifestyle,
            we are here to help you every step of the way.
          </p>
          <div className="feature-grid">
            <div><span className="fi-icon">🌸</span> Personalized Care</div>
            <div><span className="fi-icon">🌸</span> Focus on Prevention</div>
            <div><span className="fi-icon">🌸</span> Expert Guidance</div>
            <div><span className="fi-icon">🌸</span> Holistic Wellness</div>
            <div><span className="fi-icon">🌸</span> Natural Therapies</div>
            <div><span className="fi-icon">🌸</span> Online Consultations</div>
          </div>
          <div className="feature-btns">
            <button className="learn-btn">Learn More →</button>
            <button className="consult-btn second" onClick={goToAppointment}>
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* DOCTOR FRAME SECTION */}
      <div className="doctor-frame-section">
        <div className="doctor-frame-left">
          <img src="/doctor.jpg" alt="Dr. D. Rajalakshmi" />
        </div>
        <div className="doctor-frame-right">
          <h2>Meet Our Chief Practitioner</h2>
          <h4>Dr. D. Rajalakshmi – Holistic Health Expert</h4>
          <p>
            With two decades of experience in the field of holistic and integrative medicine, Dr. D. Rajalakshmi leads our Sidha wellness practice with compassion and expertise. She believes in combining deep traditional knowledge with the latest advancements, offering truly personalized, compassionate care for every patient.<br /><br />
            Whether you seek preventive health, safe chronic disease management, or natural rejuvenation, Dr. D. Rajalakshmi and her team are committed to guiding you towards balance, vitality, and lasting wellness.
          </p>
          <button className="consult-btn" style={{marginTop: "18px"}} onClick={goToAppointment}>Book a Session</button>
        </div>
      </div>

      {/* WHY CHOOSE AYUR KHYATI SECTION */}
      <div className="why-ayur-section">
        <div className="why-ayur-left">
          <h1>
            Why Choose <span className="green">TCH</span>
          </h1>
          <p className="why-ayur-sub">
            At TCH will bring you closer to the ancient secrets of Sidha. We provide true knowledge, personalised treatment and natural health solutions.
          </p>
          <h2>
            <span className="why-ayur-orange">|</span> Your trusted partner in natural wellness
          </h2>
          <p className="why-ayur-desc">
            At TCH, We use the traditional method to identify the root causes of health problems and provide personalised treatment as per your specific needs. Our goal is to use the art and science of Ayurveda to enable you to achieve positive energy, peace and balance.
          </p>
          <div className="why-ayur-feature">
            <div>
              <span className="why-ico">❂</span>
              <span>
                <b>Personalised Treatment</b>
                <div className="why-ayur-blurb">
                  We understand your body’s unique constitution and provide personalised treatment. You will get dietary guidance and lifestyle recommendations from our experts.
                </div>
              </span>
            </div>
            <div>
              <span className="why-ico">❂</span>
              <span>
                <b>Exceptional healthcare through NADI PARIKSHA (Pulse Diagnosis)</b>
                <div className="why-ayur-blurb">
                  We provide outstanding healthcare services based on the ancient method of <b>NADI PARIKSHA (Pulse Diagnosis)</b>. We assess your health by analysing the tiny vibrations in your pulse.
                </div>
              </span>
            </div>
            <div>
              <span className="why-ico">❂</span>
              <span>
                <b>Expert Consultation</b>
                <div className="why-ayur-blurb">
                  Get Consultation from our expert who will guide you over audio calls, video calls or by visiting directly to the clinic.
                </div>
              </span>
            </div>
          </div>
          <button className="viewmore-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            View More <span>→</span>
          </button>
        </div>
        <div className="why-ayur-right">
          <img src="/image8.jpg" alt="Natural Wellness" />
        </div>
      </div>
    </>
  );
}
