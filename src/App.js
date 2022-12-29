import "./App.css";
import DownloadCV from "./components/downloadcv";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Qualification from "./components/qualification";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <DownloadCV />
      <Skills/>
      <Qualification/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
