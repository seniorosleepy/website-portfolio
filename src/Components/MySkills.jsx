export default function MySkills() {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">My skills</h1>
        <div className="skills">
          <div className="main-skills-container">
            <img src="skills.png\css-icon.png"/>
            <h4>CSS</h4>
          </div>
          <div className="main-skills-container">
            <img src="skills.png\html-icon.png"/>
            <h4>HTML</h4>
          </div>
          <div className="main-skills-container">
            <img src="skills.png\js-icon.png"/>
            <h4>JavaScript</h4>
          </div>
          <div className="main-skills-container">
            <img src="skills.png\react-icon.png"/>
            <h4>React</h4>
          </div>
          <div className="main-skills-container">
            <img src="skills.png\tailwind-icon.png"/>
            <h4>TailwindCSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
