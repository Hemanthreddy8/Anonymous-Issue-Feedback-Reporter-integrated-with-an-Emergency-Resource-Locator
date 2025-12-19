import React, { useState, useEffect } from "react";

const emergencyResources = [
  {
    id: "hospital",
    title: "Hospitals",
    desc: "Medical facilities and urgent care",
    icon: "🏥",
    color: "icon-green",
    query: "hospital near me"
  },
  {
    id: "police",
    title: "Police Stations",
    desc: "Law enforcement and safety",
    icon: "🛡️",
    color: "icon-teal",
    query: "police station near me"
  },
  {
    id: "fire",
    title: "Fire Services",
    desc: "Fire departments and rescue",
    icon: "🔥",
    color: "icon-orange",
    query: "fire station near me"
  },
  {
    id: "shelter",
    title: "Shelters",
    desc: "Emergency housing and refuges",
    icon: "🏠",
    color: "icon-amber",
    query: "emergency shelter near me"
  },
  {
    id: "mental",
    title: "Mental Health",
    desc: "Crisis lines and support",
    icon: "💚",
    color: "icon-cyan",
    query: "mental health crisis helpline near me"
  }
];

export function EmergencySection() {
  const [locationMsg, setLocationMsg] = useState("");

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationMsg(
        "Geolocation is not supported. You can still use the shortcuts below."
      );
      return;
    }

    setLocationMsg("Detecting your approximate location…");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocationMsg(
          "Location detected. Opening nearby emergency resources in your map app."
        );
        const url = `https://www.google.com/maps/search/?api=1&query=emergency+near+me&center=${latitude},${longitude}`;
        window.open(url, "_blank");
      },
      (err) => {
        console.warn(err);
        setLocationMsg(
          "Unable to access location. Check permissions or use the shortcuts below."
        );
      },
      { timeout: 8000 }
    );
  };

  const openQueryInMaps = (query) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (!navigator.onLine) {
      setLocationMsg(
        "You appear to be offline. Emergency numbers still work; maps may use cached data."
      );
    }
  }, []);

  return (
    <section className="panel">
      <header className="panel-header">
        <div>
          <h2>Emergency Resources</h2>
          <p>Find help near you quickly.</p>
        </div>
      </header>

      <div className="panel-body">
        <div className="hotline-card">
          <div className="hotline-header">
            <span className="hotline-icon">⚠️</span>
            <div>
              <h3>Emergency Hotlines</h3>
              <p>Call immediately in life‑threatening situations.</p>
            </div>
          </div>
          <div className="hotline-grid">
            <a href="tel:112" className="hotline-btn">
              <span className="hotline-number">112</span>
              <span className="hotline-label">Universal</span>
            </a>
            <a href="tel:911" className="hotline-btn">
              <span className="hotline-number">911</span>
              <span className="hotline-label">USA</span>
            </a>
            <a href="tel:999" className="hotline-btn">
              <span className="hotline-number">999</span>
              <span className="hotline-label">UK</span>
            </a>
            <a href="tel:112" className="hotline-btn">
              <span className="hotline-number">112</span>
              <span className="hotline-label">India</span>
            </a>
          </div>
        </div>

        <button className="use-location-btn" onClick={useMyLocation}>
          <span className="cta-icon">📍</span>
          <span>Use My Location</span>
        </button>

        {locationMsg && (
          <div className="status-text center" style={{ marginBottom: 8 }}>
            {locationMsg}
          </div>
        )}

        <div className="resource-grid">
          {emergencyResources.map((res) => (
            <button
              key={res.id}
              className="resource-card"
              onClick={() => openQueryInMaps(res.query)}
            >
              <div className={`resource-icon ${res.color}`}>{res.icon}</div>
              <div className="resource-text">
                <h3>{res.title}</h3>
                <p>{res.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="tip-banner">
          <span className="tip-icon">💡</span>
          <span>
            Tip: Save this page for offline access. Emergency numbers work without
            internet, and your map app may use cached data.
          </span>
        </div>
      </div>
    </section>
  );
}
