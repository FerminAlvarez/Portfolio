import "./App.css";
import DownloadCV from "./components/downloadcv";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Qualification from "./components/qualification";

function App() {
  return (
    <div className="App">
      <Hero />
      <DownloadCV />
      <Skills/>
      <Qualification/>
    </div>
  );
}

export default App;
