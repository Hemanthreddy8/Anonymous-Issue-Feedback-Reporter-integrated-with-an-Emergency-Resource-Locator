// src/pages/Report.jsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { t } from "../i18n";

const categories = [
  {
    id: "harassment",
    title: "Harassment",
    desc: "Bullying, discrimination, or hostile behavior",
    icon: "👤",
    badge: "badge-green"
  },
  {
    id: "safety",
    title: "Safety Hazard",
    desc: "Physical dangers or unsafe conditions",
    icon: "⚠️",
    badge: "badge-cyan"
  },
  {
    id: "corruption",
    title: "Corruption",
    desc: "Fraud, bribery, or abuse of power",
    icon: "⚖️",
    badge: "badge-amber"
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    desc: "Damaged facilities or equipment",
    icon: "🏗️",
    badge: "badge-blue"
  },
  {
    id: "maintenance",
    title: "Maintenance",
    desc: "Repairs needed or broken systems",
    icon: "🛠️",
    badge: "badge-teal"
  },
  {
    id: "other",
    title: "Other",
    desc: "Any other concerns",
    icon: "🛡️",
    badge: "badge-purple"
  }
];

const scopes = [
  { id: "community", label: "Gated Community / Campus" },
  { id: "city", label: "City / District" },
  { id: "state", label: "State / Region" },
  { id: "country", label: "Country" },
  { id: "global", label: "Global / Anywhere" }
];

// *** NAMED export ***
export function Report({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState("harassment");
  const [scope, setScope] = useState("community");
  const [country, setCountry] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [community, setCommunity] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const [locationDetail, setLocationDetail] = useState("");
  const [evidenceLink, setEvidenceLink] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const handleSubmit = async () => {
    const description = issueDetails.trim();
    if (!description) {
      setStatusMsg("Please describe the issue before submitting.");
      setStatusColor("#fecaca");
      return;
    }

    setSubmitting(true);
    setStatusMsg("Submitting your anonymous report…");
    setStatusColor("#9ca3af");

    try {
      await addDoc(collection(db, "anonymousReports"), {
        category: selectedCategory,
        description,
        scope,
        region: {
          country: country.trim() || null,
          state: stateRegion.trim() || null,
          city: city.trim() || null,
          community: community.trim() || null
        },
        locationDetail: locationDetail.trim() || null,
        evidenceUrl: evidenceLink.trim() || null,
        createdAt: serverTimestamp(),
        status: "new"
      });

      setIssueDetails("");
      setLocationDetail("");
      setEvidenceLink("");
      setCountry("");
      setStateRegion("");
      setCity("");
      setCommunity("");

      setStatusMsg(
        "Your anonymous report for this region has been submitted. Thank you for speaking up."
      );
      setStatusColor("#bbf7d0");
    } catch (err) {
      console.error(err);
      setStatusMsg("Something went wrong. Please try again.");
      setStatusColor("#fecaca");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="panel">
      <header className="panel-header">
        <div>
          <h2>{t(lang, "reportTitle")}</h2>
          <p>{t(lang, "reportSubtitle")}</p>
        </div>
        <div className="privacy-banner">
          <span className="privacy-icon">🛡️</span>
          <span>{t(lang, "privacyBanner")}</span>
        </div>
      </header>

      <div className="panel-body report-layout">
        {/* category cards */}
        <div className="category-grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={
                "category-card " +
                (selectedCategory === cat.id ? "category-active" : "")
              }
              onClick={() => setSelectedCategory(cat.id)}
            >
              <div className={`category-icon ${cat.badge}`}>{cat.icon}</div>
              <div className="category-text">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* form */}
        <div className="report-form">
          <h3>Describe the Issue</h3>
          <p className="form-subtext">
            Choose where this issue belongs and describe what happened.
          </p>

          <label className="field-label">{t(lang, "scope")}</label>
          <div className="scope-row">
            {scopes.map((s) => (
              <button
                key={s.id}
                type="button"
                className={
                  "scope-pill " + (scope === s.id ? "scope-pill-active" : "")
                }
                onClick={() => setScope(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="region-grid">
            <div className="field-group">
              <label className="field-label">{t(lang, "country")}</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="India, USA, UK…"
              />
            </div>
            <div className="field-group">
              <label className="field-label">{t(lang, "state")}</label>
              <input
                type="text"
                value={stateRegion}
                onChange={(e) => setStateRegion(e.target.value)}
                placeholder="Tamil Nadu, California…"
              />
            </div>
            <div className="field-group">
              <label className="field-label">{t(lang, "city")}</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Tiruppur, Chennai…"
              />
            </div>
            <div className="field-group">
              <label className="field-label">{t(lang, "community")}</label>
              <input
                type="text"
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                placeholder="Gated society, village, college name…"
              />
            </div>
          </div>

          <label className="field-label" htmlFor="issueDetails">
            {t(lang, "whatHappened")}
          </label>
          <textarea
            id="issueDetails"
            rows={5}
            value={issueDetails}
            onChange={(e) => setIssueDetails(e.target.value)}
            placeholder="Describe the issue here…"
          />

          <label className="field-label" htmlFor="locationDetail">
            {t(lang, "whereExactly")}
          </label>
          <textarea
            id="locationDetail"
            rows={2}
            value={locationDetail}
            onChange={(e) => setLocationDetail(e.target.value)}
            placeholder="Where did this occur? (e.g., Building A, 3rd floor)"
          />

          <label className="field-label" htmlFor="evidenceLink">
            {t(lang, "evidence")}
          </label>
          <input
            id="evidenceLink"
            type="url"
            value={evidenceLink}
            onChange={(e) => setEvidenceLink(e.target.value)}
            placeholder="Link to screenshots, documents, or references"
          />

          <div className="form-footer">
            <div className="form-tip">
              <span className="tip-dot" />
              <span>
                Avoid full names or personal identifiers unless required for
                safety.
              </span>
            </div>
            <button
              type="button"
              className="primary-cta submit-cta"
              onClick={handleSubmit}
              disabled={submitting}
            >
              <span className="cta-icon">📤</span>
              <span>{submitting ? "Submitting…" : t(lang, "submit")}</span>
            </button>
          </div>

          {statusMsg && (
            <div className="status-text" style={{ color: statusColor }}>
              {statusMsg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
