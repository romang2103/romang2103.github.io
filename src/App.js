import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import './App.css'

function App() {
  return (
    // <div className="App">
    <main>
      <section className="section">
        <Homepage />
      </section>
      <section className="section">
        <Projects />
      </section>
    </main>
  );
}

export default App;
