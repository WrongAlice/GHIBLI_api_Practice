import React from "react";
import MovieList from "./Components/MovieList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <h1>GHIBLI API</h1>
        <MovieList />
      </div>
    </div>
  );
}
