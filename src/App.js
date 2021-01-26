import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcome";
import Cards from "./cards";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link lang"
          href="https://becode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          Nederlandstalige versie)
        </a>
        <a
          className="App-link"
          href="https://becode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
      <div>
        <Welcome />
      </div>
      <Cards />
      <Message />
    </div>
  );
}

export default App;
