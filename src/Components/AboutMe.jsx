export default function AboutMe({ lang }) {
  return (
    <div className="aboutme-section">
      <div className="aboutme-container">
        <h1 className="Aboutme-title">About me</h1>
        {lang === "en" ? (
          <p className="about-text">
            Hello, my name is Nikita. I’m a beginner frontend developer.
            <br />
            I’ve been learning and working in web development for about one
            year.
            <br />
            Even though I’m just starting out, I really enjoy what I do and try
            to learn something new every day.
            <br />
            I don’t have work experience yet, but I’m building my own projects
            and actively looking for my first job in a team.
            <br />
            I’m ready to grow, work hard, and do my best to help.
          </p>
        ) : (
          <p className="about-text">
            Здравствуйте, меня зовут Никита. <br />
            Я начинающий фронтенд-разработчик.
            <br />
            Я изучаю и работаю в сфере веб-разработки около года.
            <br />
            Несмотря на то, что я только начинаю, мне очень нравится то, что я
            делаю, и я стараюсь каждый день узнавать что-то новое.
            <br />
            У меня пока нет опыта работы, но я создаю свои собственные проекты и
            активно ищу свою первую работу в команде.
            <br />Я готов расти, усердно работать и делать все возможное, чтобы
            помочь.
          </p>
        )}
      </div>
    </div>
  );
}
