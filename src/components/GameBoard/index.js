import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import Square from "./Square";
import Button from "../Button";
import propTypes from "prop-types";
import "./game-board.css";

export const GameBoard = ({
  currentPlayer,
  gameState,
  isDraw,
  isGameStarted,
  resetGame,
  startNewGame,
  takeTurn,
  winner
}) => {
  const displayGameState = (winner, isDraw) => {
    if (isDraw) {
      return "Game Drawn";
    }
    if (winner) {
      return `${currentPlayer.name.toUpperCase()} won!`;
    }
    return `${currentPlayer.name.toUpperCase()}'s turn`;
  };

  if (!isGameStarted) {
    return null;
  }
  return (
    <div className="game-board-container">
      <div className="state-tracker">
        <h2>{displayGameState(winner, isDraw)}</h2>
        {winner ? (
          <React.Fragment>
            <Button label="Play Again" onClick={() => startNewGame()} />
            <Button label="Reset Game" onClick={() => resetGame()} />
          </React.Fragment>
        ) : null}
      </div>
      <div className="game-board">
        {gameState.map((row, rowNumber) => {
          return row.map((value, column) => {
            return (
              <Square
                key={`${rowNumber}-${column}`}
                value={value}
                row={rowNumber}
                column={column}
                onClick={takeTurn}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

GameBoard.propTypes = {
  currentPlayer: propTypes.shape({
    name: propTypes.string.isRequired,
    numberOfMoves: propTypes.number.isRequired,
    valueOnBoard: propTypes.number.isRequired
  }),
  gameState: propTypes.arrayOf(propTypes.arrayOf(propTypes.oneOf([0, 1])))
    .isRequired,
  isDraw: propTypes.bool.isRequired,
  isGameStarted: propTypes.bool.isRequired,
  winner: propTypes.oneOf(["player1", "player2"]),
  startNewGame: propTypes.func.isRequired,
  resetGame: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPlayer: state[state.currentPlayer],
  gameState: state.gameState,
  isDraw: state.isDraw,
  isGameStarted: state.isGameStarted,
  winner: state.winner
});

const mapDispatchToProps = {
  takeTurn: actions.takeTurn,
  startNewGame: actions.startNewGame,
  resetGame: actions.resetGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
