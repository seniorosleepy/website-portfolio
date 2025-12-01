export default function Hero() {
  return (
    <div className="hero">
      <div className="main-info">
        <h3>Web developer</h3>
        <h1 className="main-title">Hello, my name is <div className="name">Nikita Avdeev</div></h1>
        <p>I build clean, responsive websites with passion and precision</p>
        <div className="links-container">
          <div className="link">
            <img src="info-links\mdi_github.png" className="hero-link-img"/>
          </div>
          <div className="link">
            <img src="info-links\dmi_youtube.png" className="hero-link-img"/>
          </div>
          <div className="link">
            <img src="info-links\ic_baseline-telegram.png" className="hero-link-img"/>
          </div>
        </div>
      </div>

      <img src="Frame.png" className="main-img" />
    </div>
  );
}
