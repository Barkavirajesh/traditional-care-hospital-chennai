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
          filter: brightness(0.65);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
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

        .slideshow-controls {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .slideshow-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: background 0.3s;
        }

        .slideshow-dot.active {
          background: #ff7e1e;
        }

        .consult-btn {
          background: #ff7e1e;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          padding: 0.9em 2.4em;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          box-shadow: 0 6px 15px rgba(255, 126, 30, 0.4);
        }

        .consult-btn:hover {
          background: #e86c05;
          transform: scale(1.05);
        }

        .achievement-section {
          margin: 60px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .achievement-cards {
          display: flex;
          gap: 24px;
        }

        .achievement-card {
          background: #fffaf2;
          border: 2px solid #bde5cf;
          border-radius: 12px;
          padding: 22px 30px;
          text-align: center;
          width: 180px;
        }

        .achievement-number {
          font-size: 2.2rem;
          color: #15824b;
          font-weight: bold;
        }

        .achievement-label {
          font-size: 1rem;
          color: #15824b;
        }

        .feature-section {
          display: flex;
          align-items: center;
          gap: 36px;
          margin: 40px 6vw;
        }

        .feature-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: 0 6px 40px rgba(0, 0, 0, 0.1);
        }

        .feature-right {
          max-width: 600px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6em 1.2em;
        }

        .doctor-frame-section {
          display: flex;
          gap: 50px;
          margin: 60px 6vw;
          background: #f3faf5;
          border-radius: 24px;
          padding: 28px;
        }

        .doctor-frame-left img {
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
          border-radius: 18px;
        }

        .why-ayur-section {
          display: flex;
          gap: 32px;
          margin: 50px 6vw;
        }

        .why-ayur-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ================= MOBILE FIX ================= */
        @media (max-width: 768px) {

          .homepage-hero {
            min-height: 70vh;
          }

          .hero-content {
            padding: 0 14px;
          }

          .hero-content h1 {
            font-size: 1.7rem;
            line-height: 1.25;
          }

          .hero-content p {
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 1.4rem;
          }

          .consult-btn {
            font-size: 0.95rem;
            padding: 0.65em 1.7em;
          }

          .achievement-section {
            flex-direction: column-reverse;
            text-align: center;
            gap: 28px;
          }

          .achievement-cards {
            flex-direction: column;
          }

          .achievement-card {
            width: 90%;
            margin: auto;
          }

          .feature-section {
            flex-direction: column;
            margin: 28px 4vw;
          }

          .feature-left img {
            max-height: 240px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .doctor-frame-section {
            flex-direction: column;
            padding: 20px;
            gap: 20px;
          }

          .doctor-frame-left img {
            max-height: 260px;
          }

          .doctor-frame-right {
            padding-left: 0;
            text-align: center;
          }

          .doctor-frame-right h2 {
            font-size: 1.6rem;
          }

          .why-ayur-section {
            flex-direction: column;
            margin: 30px 4vw;
          }

          .why-ayur-left h1 {
            font-size: 2rem;
          }

          .why-ayur-left h2 {
            font-size: 1.35rem;
          }

          .why-ayur-desc {
            font-size: 0.95rem;
          }

          .why-ayur-feature b {
            font-size: 1.15rem;
          }

          .why-ayur-right img {
            max-height: 240px;
            border-radius: 14px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="homepage-hero">
        <div className="hero-content">
          <h1>{slides[currentIdx].heading}</h1>
          <p>{slides[currentIdx].desc}</p>
          <button className="consult-btn" onClick={goToAppointment}>
            Book Consultation →
          </button>
        </div>

        <div className="hero-image-container">
          <img className="lotus-img" src={slides[currentIdx].img} alt="Lotus" />
          <div className="slideshow-controls">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`slideshow-dot${currentIdx === idx ? " active" : ""}`}
                onClick={() => setCurrentIdx(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ACHIEVEMENT */}
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
      </div>

      {/* FEATURE */}
      <div className="feature-section">
        <div className="feature-left">
          <img src="/image6.jpg" alt="Herbal mix" />
        </div>
        <div className="feature-right">
          <h2>Discover Holistic Wellness with TCH</h2>
          <p>
            Personalized treatment based on your unique needs. Natural therapies,
            holistic wellness, and expert guidance.
          </p>
          <div className="feature-grid">
            <div>🌸 Personalized Care</div>
            <div>🌸 Focus on Prevention</div>
            <div>🌸 Expert Guidance</div>
            <div>🌸 Holistic Wellness</div>
          </div>
        </div>
      </div>

      {/* DOCTOR */}
      <div className="doctor-frame-section">
        <div className="doctor-frame-left">
          <img src="/doctor.jpg" alt="Doctor" />
        </div>
        <div className="doctor-frame-right">
          <h2>Meet Our Chief Practitioner</h2>
          <h4>Dr. D. Rajalakshmi</h4>
          <p>
            Two decades of experience in holistic medicine. Personalized care,
            compassion, and expertise.
          </p>
          <button className="consult-btn" onClick={goToAppointment}>
            Book a Session
          </button>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-ayur-section">
        <div className="why-ayur-left">
          <h1>Why Choose TCH</h1>
          <p>
            Traditional Sidha healing with modern care and personalized treatment.
          </p>
        </div>
        <div className="why-ayur-right">
          <img src="/image8.jpg" alt="Wellness" />
        </div>
      </div>
    </>
  );
}
