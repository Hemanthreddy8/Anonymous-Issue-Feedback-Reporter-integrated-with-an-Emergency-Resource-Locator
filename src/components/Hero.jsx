import React from "react";

export function Hero({ goToReport, goToEmergency }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-chip">
          <span className="chip-icon">🛡️</span>
          <span>100% Anonymous & Secure</span>
        </div>
        <h1 className="hero-title">
          <span>Speak Up.</span>
          <span className="accent">Stay Safe.</span>
        </h1>
        <p className="hero-subtext">
          Report issues anonymously without fear of retaliation. Find emergency
          resources instantly when you need them most — in your community, city,
          state, or beyond.
        </p>
        <div className="hero-actions">
          <button className="primary-cta" onClick={goToReport}>
            <span className="cta-icon">🛡️</span>
            <span>Report an Issue</span>
          </button>
          <button className="secondary-cta" onClick={goToEmergency}>
            <span className="cta-icon">⚠️</span>
            <span>Emergency Resources</span>
          </button>
        </div>
        <div className="hero-bullets">
          <div className="hero-bullet">
            <span className="bullet-dot" />
            <span>No personal data required</span>
          </div>
          <div className="hero-bullet">
            <span className="bullet-dot" />
            <span>Region‑aware reports (community → global)</span>
          </div>
          <div className="hero-bullet">
            <span className="bullet-dot" />
            <span>Works offline for emergency calls</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="hero-card-title">Your privacy is protected</span>
            <span className="hero-status-pill">
              <span className="hero-status-dot" />
              No IP logging
            </span>
          </div>
          <div className="hero-card-body">
            <p>
              No IP addresses, device info, or personal identifiers are collected.
              Only what needs attention is stored — scoped to the community, city,
              state, or country you select.
            </p>
            <div className="hero-mock-stats">
              <div>
                <span className="stat-label">Communities onboarded</span>
                <span className="stat-value">42</span>
              </div>
              <div>
                <span className="stat-label">Avg. response time</span>
                <span className="stat-value">6 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
