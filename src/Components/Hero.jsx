export default function Hero({ lang }) {
  return (
    <div className="hero-section">
      <div className="main-info">
        <h3>{lang === "en" ? "Web developer" : "Веб разработчик"}</h3>
        <h1 className="main-title">
          {lang === "en" ? (
            <>
              Hello, my name is <span className="name">Nikita Avdeev</span>
            </>
          ) : (
            <>
              Привет, меня зовут <span className="name">Никита Авдеев</span>
            </>
          )}
        </h1>
        <p>
          {lang === "en"
            ? "I build clean, responsive websites with passion and precision"
            : "Я создаю чистые, адаптивные веб-сайты с увлечением и точностью."}
        </p>
        <div className="links-container">
          <div
            className="link"
            onClick={() => window.open("https://github.com/seniorosleepy")}
          >
            <img
              src="public\img\hero-imgs\github.png"
              className="hero-link-img"
            />
          </div>
          <div className="link">
            <img
              src="public\img\hero-imgs\youtube.png"
              className="hero-link-img"
            />
          </div>
          <div className="link">
            <img
              src="public\img\hero-imgs\telegram.png"
              className="hero-link-img"
            />
          </div>
        </div>
      </div>

      <img src="img\Frame.png" className="main-img" />
    </div>
  );
}
