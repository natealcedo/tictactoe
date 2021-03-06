import actionTypes from "../actions/actionTypes";
import utils from "../utils";

const initialState = {
  player1: {
    name: "",
    numberOfMoves: 0,
    valueOnBoard: 0
  },
  player2: {
    name: "",
    numberOfMoves: 0,
    valueOnBoard: 1
  },
  gameState: [[null, null, null], [null, null, null], [null, null, null]],
  isGameStarted: false,
  currentPlayer: null,
  winner: null,
  isDraw: false
};

export const createInitialState = () => ({
  player1: {
    name: "",
    numberOfMoves: 0,
    valueOnBoard: 0
  },
  player2: {
    name: "",
    numberOfMoves: 0,
    valueOnBoard: 1
  },
  gameState: [[null, null, null], [null, null, null], [null, null, null]],
  isGameStarted: false,
  currentPlayer: null,
  winner: null,
  isDraw: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET_GAME: {
      return createInitialState();
    }

    case actionTypes.START_GAME: {
      return {
        ...state,
        isGameStarted: true,
        currentPlayer: "player1"
      };
    }

    case actionTypes.START_NEW_GAME: {
      const newPlayer =
        state.currentPlayer === "player1" ? "player2" : "player1";
      return {
        ...initialState,
        gameState: [[null, null, null], [null, null, null], [null, null, null]],
        isGameStarted: true,
        winner: null,
        isDraw: false,
        player1: {
          ...state.player1,
          numberOfMoves: 0
        },
        player2: {
          ...state.player2,
          numberOfMoves: 0
        },
        currentPlayer: newPlayer
      };
    }

    case actionTypes.ON_NAME_CHANGE: {
      const currentPlayerState = state[action.payload.player];
      return {
        ...state,
        [action.payload.player]: {
          ...currentPlayerState,
          name: action.payload.name
        }
      };
    }

    case actionTypes.TAKE_TURN: {
      const { row, column } = action.payload;
      const currentGameState = state.gameState;
      const currentPlayer = state.currentPlayer;
      const currentPlayerState = state[currentPlayer];
      const newNumberOfMoves = currentPlayerState.numberOfMoves + 1;
      const selectedSquare = currentGameState[row][column];
      const playerValueOnBoard = currentPlayerState.valueOnBoard;

      // Handle the case where there is a winner already or its a draw
      if (state.winner !== null || state.isDraw) {
        return state;
      }

      // Handle case where player is trying to select a box that already
      // has been chosen
      if (selectedSquare !== null) {
        return state;
      }

      const updatedGameState = utils.updateGameState(
        currentGameState,
        row,
        column,
        currentPlayerState.valueOnBoard
      );

      // Handle the case where a player might have won.
      if (
        newNumberOfMoves >= 3 &&
        utils.checkWinCondition(updatedGameState, playerValueOnBoard)
      ) {
        return {
          ...state,
          [currentPlayer]: {
            ...currentPlayerState,
            numberOfMoves: newNumberOfMoves
          },
          gameState: updatedGameState,
          winner: currentPlayer
        };
      }

      // Can only be drawn when players have either made 4 or 5 moves
      // Check if board is filled, if so, game is drawn
      if (
        newNumberOfMoves >= 4 &&
        utils.checkGameBoardFilled(updatedGameState)
      ) {
        return {
          ...state,
          [currentPlayer]: {
            ...currentPlayerState,
            numberOfMoves: newNumberOfMoves
          },
          gameState: updatedGameState,
          isDraw: true
        };
      }

      // No Winner and not yet filled, update state
      const nextPlayer = currentPlayer === "player1" ? "player2" : "player1";
      return {
        ...state,
        [currentPlayer]: {
          ...currentPlayerState,
          numberOfMoves: newNumberOfMoves
        },
        gameState: updatedGameState,
        currentPlayer: nextPlayer
      };
    }

    default:
      return state;
  }
}
