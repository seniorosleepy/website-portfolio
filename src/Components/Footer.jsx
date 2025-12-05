export default function Footer() {
  return (
    <>
      <div className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="">
              <img
                src="public\img\contact-me-imgs\telegram.png"
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
                src="public\img\contact-me-imgs\github.png"
                className="contact-logo"
              />
            </div>
            <div className="user">
              <h2 className="contact-card-title">GitHub</h2>
              <p className="username">@seniosleepy</p>
            </div>
          </div>
          <div className="contact-card">
            <div>
              <img
                src="public\img\contact-me-imgs\email.png"
                className="contact-logo"
              />
            </div>
            <div className="user">
              <h2 className="contact-card-title">Email</h2>
              <p className="username">isleepy72@gmail.com</p>
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
