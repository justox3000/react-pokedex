import React from "react";
import Pokedex from "../pokedex/pokedex";
import './app.css';
import "../../fonts/PressStart2P-Regular.ttf";

class App extends React.Component {
  render() {
    return <div className="app">
      <h1>Pokedex</h1>
      <Pokedex />
      </div>

  }
}

export default App;
