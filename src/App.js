import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Built by Delaney Tiger, open-sourced on{" "}
          <a
            href="https://github.com/delaneytiger21/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ubiquitous-kangaroo-0f21bf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

