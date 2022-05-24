import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        <small>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kateryna-komisarova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kateryna Komisarova{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/komisssarova/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://vermillion-tartufo-fbb7c7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
