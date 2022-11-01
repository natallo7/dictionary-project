import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Natalia Lloyd{" "}
            <a
              href="https://github.com/natallo7/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              and open-sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
