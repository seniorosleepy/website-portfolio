export default function Footer() {
  return (
    <>
      <div className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="">
              <img
                src="src\pic\contact-me-icons\mingcute_telegram-fill.png"
                className="contact-logo"
              />
            </div>
            <div className="user">
              <h2 className="contact-card-title">Telegram</h2>
              <p className="username">@rizza228</p>
            </div>
          </div>
          <div className="contact-card">
            <div>
              <img
                src="src\pic\contact-me-icons\mdi_github.png"
                className="contact-logo"
              />
            </div>
            <div className="user">
              <h2 className="contact-card-title">Telegram</h2>
              <p className="username">@rizza228</p>
            </div>
          </div>
          <div className="contact-card">
            <div>
              <img
                src="src\pic\contact-me-icons\material-symbols_mail.png"
                className="contact-logo"
              />
            </div>
            <div className="user">
              <h2 className="contact-card-title">Telegram</h2>
              <p className="username">@rizza228</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="rights-reserved">
          <h3 className="rights-title">
            © 2025 Nikita Avdeev. All rights reserved
          </h3>
        </div>
        <div className="footer-links">
          <a href="" className="footer-link">
            Telegram
          </a>
          <a href="" className="footer-link">
            GitHub
          </a>
          <a href="" className="footer-link">
            YouTube
          </a>
        </div>
      </div>
    </>
  );
}
