import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState("en");

function changeLanguage() {
  setLang(prev => (prev === "en" ? "ru" : "en"));
}


  return (
    <div className="header-section">
      <button className="lang-button" onClick={changeLanguage}>
        lang
      </button>
      <div className="header-links">
        <a href="#" className="header-link">
          {lang === "en" ? "About me" : "Обо мне"}
        </a>
        <a href="#" className="header-link">
          {lang === "en" ? "Portfolio" : "Портфолио"}
        </a>
        <a href="#" className="header-link">
          Skills
        </a>
        <a href="#" className="header-link">
          Contact
        </a>
      </div>
    </div>
  );
}
