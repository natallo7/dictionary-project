import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="coffee" />
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
            <br />
            <a href="https://www.freepik.com/free-vector/botanical-themed-design-space_4122027.htm#query=plants%20illustration&position=30&from_view=search&track=sph">
              Background image by rawpixel.com
            </a>{" "}
            on Freepik
          </small>
        </footer>
      </div>
    </div>
  );
}
