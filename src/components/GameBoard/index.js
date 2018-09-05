import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import Square from "./Square";
import propTypes from "prop-types";
import "./game-board.css";

export const GameBoard = ({
  currentPlayer,
  gameState,
  isGameStarted,
  takeTurn,
  winner
}) => {
  if (!isGameStarted) {
    return null;
  }
  return (
    <div className="game-board-container">
      <div className="state-tracker">
        {winner ? null : `WHO'S TURN IS IT: ${currentPlayer.name}`}
        <br />
        {winner ? `${currentPlayer.name} won!` : null}
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
  isGameStarted: propTypes.bool.isRequired,
  winner: propTypes.oneOf(["player1", "player2"])
};

const mapStateToProps = state => ({
  gameState: state.gameState,
  isGameStarted: state.isGameStarted,
  currentPlayer: state[state.currentPlayer],
  winner: state.winner
});

const mapDispatchToProps = {
  takeTurn: actions.takeTurn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
