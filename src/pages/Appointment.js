import { number } from "framer-motion";
import React, { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    age: "",
    gender: "",
    consultType: "",
    date: "",
    location: "",
    purpose: "",
    timeslot: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [consultationInfo, setConsultationInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setConsultationInfo("");

    const payload = {
      name: form.name,
      email: form.email,
      date: form.date,
      time: form.timeslot,
      consultType: form.consultType,
      age: form.age,
      number: form.number,
      amount: "500"
    };

    // Show info based on consult type
    if (form.consultType === "Online") {
      setConsultationInfo(
        "📩 Video link will be sent to your email after the doctor confirms your appointment. Access will only be available after payment."
      );
    } else if (form.consultType === "Offline") {
      setConsultationInfo(
        "🏥 You will receive clinic details in your confirmation email. Please visit at your scheduled time."
      );
    }

    try {
     const res = await fetch("https://tch-backend-1.onrender.com/book-appointment", {

  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});


      const data = await res.json();

      if (res.ok) {
        setMessage(
          "✅ Appointment request sent! The doctor will review and confirm your preferred time. Please check your email for updates."
        );

        if (data.appointmentId) {
          // Store appointmentId for later payment or consultation check
          localStorage.setItem("lastAppointmentId", data.appointmentId);
        }

        // Reset form
        setForm({
          name: "",
          number: "",
          email: "",
          age: "",
          gender: "",
          consultType: "",
          date: "",
          location: "",
          purpose: "",
          timeslot: ""
        });
      } else {
        setMessage("❌ " + (data.error || "Error booking appointment."));
      }
    } catch (err) {
      setMessage("❌ Server error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section
      style={{
        background: "#eaf8ec",
        borderRadius: 16,
        padding: "36px 20px"
      }}
    >
      {/* ----------------- Step Cards ----------------- */}
      <div className="booking-steps-flip">
        <div className="corner-hero">
          <h2>
            <span className="hero-main">Building great future Together,</span>
            <br />
            <span className="hero-sub">Be with us</span>
          </h2>
        </div>

        <div className="steps-row">
          {["Fill Out the Form", "Doctor Reviews", "Get Confirmation"].map(
            (title, index) => (
              <React.Fragment key={index}>
                <div className="step-card-flip">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="step-circle">{`0${index + 1}`}</div>
                        <div className="step-title">{title}</div>
                        <div className="step-desc">
                          {index === 0 &&
                            "Enter your details to book your consultation quickly."}
                          {index === 1 &&
                            "Doctor will review your preferred time and confirm."}
                          {index === 2 &&
                            "You’ll receive email with final timing & video link (online) or clinic details (offline)."}
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="step-desc-back">
                          <b>Tip:</b>{" "}
                          {index === 0 && "Keep your information accurate!"}
                          {index === 1 &&
                            "Keep your phone and email reachable!"}
                          {index === 2 &&
                            "Check inbox and spam for confirmation!"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="step-arrow">
                    <svg width="56" height="44" viewBox="0 0 56 44" fill="none">
                      <path
                        d="M8 35 C22 12, 42 22, 51 29"
                        stroke="#11af6e"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <polygon points="48,28 56,26 52,35" fill="#11af6e" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>

      <h2>Book Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label>
              Patient Name <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Patient Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              required
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>
              Patient Age <span className="required">*</span>
            </label>
            <input
              type="number"
              placeholder="Age"
              required
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>
              Gender <span className="required">*</span>
            </label>
            <div className="radio-list">
              {["Male", "Female"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  />{" "}
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>
              Consultation Type <span className="required">*</span>
            </label>
            <div className="radio-list">
              {["Online", "Offline"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="consultType"
                    value={type}
                    checked={form.consultType === type}
                    onChange={(e) =>
                      setForm({ ...form, consultType: e.target.value })
                    }
                  />{" "}
                  {type === "Online"
                    ? "Online (Video, Audio)"
                    : "Offline (At Clinic)"}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>
              Requested Date <span className="required">*</span>
            </label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>
              Preferred Timeslot <span className="required">*</span>
            </label>
            <div className="radio-list">
              {["Morning", "Noon", "Evening"].map((slot) => (
                <label key={slot}>
                  <input
                    type="radio"
                    name="timeslot"
                    value={slot}
                    checked={form.timeslot === slot}
                    onChange={(e) =>
                      setForm({ ...form, timeslot: e.target.value })
                    }
                  />{" "}
                  {slot}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>
            Location <span className="required">*</span>
          </label>
          <select
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Purpose For Consultation</label>
          <input
            type="text"
            placeholder="Purpose for consultation"
            value={form.purpose}
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
          />
        </div>

        <div style={{ textAlign: "right", marginTop: 16 }}>
          <button type="submit" className="book-btn" disabled={loading}>
            {loading ? "Booking..." : "Book Consultation"}
          </button>
        </div>

        {consultationInfo && (
          <div className="fade-in-alert info-alert" style={{ marginTop: 12 }}>
            {consultationInfo}
          </div>
        )}
        {message && (
          <div
            className={`fade-in-alert ${
              message.startsWith("✅") ? "success-alert" : "error-alert"
            }`}
            style={{ marginTop: 12 }}
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
}