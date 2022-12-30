import "./App.css";
import DownloadCV from "./components/downloadcv";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Qualification from "./components/qualification";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <DownloadCV />
      <Skills/>
      <Qualification/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
