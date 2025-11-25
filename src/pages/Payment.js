import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; // ✅ Correct import for QR code
import "./Payment.css";

const Payment = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile or desktop
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|mobile/.test(userAgent));

    // Simulate that the video call just ended
    setTimeout(() => {
      setShowPayment(true);
    }, 2000);
  }, []);

  const handlePayNow = () => {
    if (isMobile) {
      // Redirect to Google Pay if mobile
      const upiUrl = `upi://pay?pa=9976838197@okbizaxis&pn=SidhaHealth&am=500&cu=INR`;

      window.location.href = upiUrl;
    } else {
      // On desktop, show QR code section
      setShowPayment(true);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Consultation Ended</h2>
      <p className="payment-text">Please proceed to make your consultation payment.</p>

      {showPayment ? (
        isMobile ? (
          <button className="pay-button" onClick={handlePayNow}>
            Pay ₹500 using Google Pay
          </button>
        ) : (
          <div className="qr-section">
            <p>Scan the QR code below to complete your payment:</p>
            <QRCodeCanvas
              value="upi://pay?pa=9976838197@okbizaxis&pn=SidhaHealth&am=500&cu=INR"
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="Q"
              includeMargin={true}
            />
            <p className="qr-note">Use any UPI app (Google Pay, PhonePe, Paytm) to scan and pay.</p>
          </div>
        )
      ) : (
        <p className="payment-wait">Ending call... please wait a moment.</p>
      )}
    </div>
  );
};

export default Payment;
