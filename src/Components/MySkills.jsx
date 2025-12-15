export default function MySkills({ lang }) {
  const skills = [
    { name: "CSS", img: "/img/skills-imgs/css.png" },
    { name: "HTML", img: "/img/skills-imgs/html.png" },
    { name: "JavaScript", img: "/img/skills-imgs/js.png" },
    { name: "React", img: "/img/skills-imgs/react.png" },
    { name: "TailwindCSS", img: "/img/skills-imgs/tailwind.png" },
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">
          {lang === "en" ? "My skills" : "Мои навыки"}
        </h1>
        <div className="skills">
          {skills.map((skill) => (
            <div className="main-skills-container" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}