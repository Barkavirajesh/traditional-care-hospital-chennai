import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Consultation = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Helper for initializing Jitsi meeting
    function initializeJitsi() {
      const domain = "meet.jit.si";
      const options = {
        roomName: `sidhahealth-${appointmentId}`, // Must match backend logic!
        width: "100%",
        height: "100vh",
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          prejoinPageEnabled: true,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      // Automatically redirect to payment when call ends
      api.addListener("readyToClose", () => {
        api.dispose();
        navigate(`/payment/${appointmentId}`);
      });
    }

    // Dynamically load Jitsi Meet API if it's not present
    if (!window.JitsiMeetExternalAPI) {
      const script = document.createElement("script");
      script.src = "https://meet.jit.si/external_api.js";
      script.async = true;
      script.onload = initializeJitsi;
      document.body.appendChild(script);
      // Optional: clean up script on unmount
      return () => {
        document.body.removeChild(script);
      };
    } else {
      initializeJitsi();
    }
  }, [appointmentId, navigate]);

  return (
    <div
      id="jitsi-container"
      style={{
        width: "100%",
        height: "100vh",
        background: "#f4f6f8",
        minHeight: 480,
      }}
    />
  );
};

export default Consultation;
