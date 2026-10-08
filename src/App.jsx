import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>My React App</h2>
        <span>CI Demo 🚀</span>
      </nav>

      <main className="hero">
        <h1>Welcome to My React Project</h1>

        <p>
          This is a simple frontend application for practicing
          Continuous Integration.
        </p>

        <div className="card">
          <h2>CI Practice</h2>
          <p>
            Make changes → Push to GitHub → CI runs automatically
          </p>

          <button onClick={() => setCount(count + 1)}>
            Button Clicked: {count}
          </button>
        </div>

        <div className="features">
          <div>
            <h3>⚛️ React</h3>
            <p>Frontend</p>
          </div>

          <div>
            <h3>🐙 GitHub</h3>
            <p>Code Repository</p>
          </div>

          <div>
            <h3>🔄 CI</h3>
            <p>Automatic Build</p>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026 My React CI Demo</p>
      </footer>
    </div>
  );
}

export default App;