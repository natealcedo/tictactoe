import actionTypes from "../actions/actionTypes";
import utils from "../utils";

export const initialState = {
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

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GAME: {
      return {
        ...state,
        isGameStarted: true,
        currentPlayer: "player1"
      };
    }

    case actionTypes.ON_NAME_CHANGE: {
      return {
        ...state,
        [action.payload.player]: {
          name: action.payload.name,
          numberOfMoves: 0
        }
      };
    }

    case actionTypes.TAKE_TURN: {
      const currentPlayer = state.currentPlayer;
      const playerState = state[currentPlayer];
      const { row, column } = action.payload;
      const newPlayer = currentPlayer === "player1" ? "player2" : "player1";
      return {
        ...state,
        [currentPlayer]: {
          ...playerState,
          numberOfMoves: ++playerState.numberOfMoves
        },
        gameState: utils.updateGameState(
          state.gameState,
          row,
          column,
          playerState.valueOnBoard
        ),
        currentPlayer: newPlayer
      };
    }
    default:
      return state;
  }
}
