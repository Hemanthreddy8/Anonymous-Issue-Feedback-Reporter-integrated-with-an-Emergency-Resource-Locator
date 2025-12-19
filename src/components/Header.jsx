import React from "react";
import { NavLink } from "react-router-dom";
import { languages, t } from "../i18n";

export function Header({ lang, setLang }) {
  return (
    <header className="topbar">
      <div className="logo-wrap">
        <div className="logo-dot" />
        <div className="logo-text">
          <span className="logo-title">{t(lang, "appTitle")}</span>
          <span className="logo-subtitle">{t(lang, "tagline")}</span>
        </div>
      </div>

      <div className="nav-right">
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-btn " + (isActive ? "nav-btn-active" : "")
            }
            end
          >
            {t(lang, "navHome")}
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              "nav-btn " + (isActive ? "nav-btn-active" : "")
            }
          >
            {t(lang, "navReport")}
          </NavLink>
          <NavLink
            to="/emergency"
            className={({ isActive }) =>
              "nav-btn " + (isActive ? "nav-btn-active" : "")
            }
          >
            {t(lang, "navEmergency")}
          </NavLink>
        </nav>

        <select
          className="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {Object.entries(languages).map(([code, meta]) => (
            <option key={code} value={code}>
              {meta.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
