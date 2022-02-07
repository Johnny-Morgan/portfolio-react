import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
