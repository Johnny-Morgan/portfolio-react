import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
