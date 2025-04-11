import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certification } from "./components/Certification/Certification";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certification/>
      <Education/>
      <Contact />
    </div>
  );
}

export default App;
