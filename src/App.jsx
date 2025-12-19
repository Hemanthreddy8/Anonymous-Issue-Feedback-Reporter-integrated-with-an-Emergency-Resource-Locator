import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Report } from "./pages/Report.jsx";
import { Emergency } from "./pages/Emergency.jsx";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="app-shell">
      <Header lang={lang} setLang={setLang} />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/report" element={<Report lang={lang} />} />
          <Route path="/emergency" element={<Emergency lang={lang} />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>“Speak up safely. Get help instantly. Anywhere, anytime.”</span>
        <span className="footer-meta">
          Hackathon prototype · Region‑aware · No ads · No tracking
        </span>
      </footer>
    </div>
  );
}
