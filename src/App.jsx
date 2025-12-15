import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";

export default function App() {
  const [lang, setLang] = useState("en");

  function changeLanguage() {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }

  return (
    <>
      <Header changeLanguage={changeLanguage} lang={lang} />
      <Hero changeLanguage={changeLanguage} lang={lang} />
      <AboutMe changeLanguage={changeLanguage} lang={lang} />
      <MySkills changeLanguage={changeLanguage} lang={lang} />
      <Footer changeLanguage={changeLanguage} lang={lang} />
    </>
  );
}
