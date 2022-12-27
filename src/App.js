import "./App.css";
import DownloadCV from "./components/downloadcv";
import Hero from "./components/hero";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <DownloadCV />
      <Skills/>
    </div>
  );
}

export default App;
