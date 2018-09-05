import React from "react";
import PlayerForm from "../PlayerForm";
import GameBoard from "../GameBoard";
import "./app.css";

const App = () => (
  <div className="app">
    <h1 className="header">Tic Tac Toe</h1>
    <PlayerForm />
    <GameBoard />
  </div>
);

export default App;
