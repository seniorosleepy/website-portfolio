export default function Header({ lang, changeLanguage }) {
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
          {lang === "en" ? "Skills" : "Мои навыки"}
        </a>
        <a href="#" className="header-link">
          {lang === "en" ? "Contact" : "Контакты"}
        </a>
      </div>
    </div>
  );
}