import actionTypes from "../actions/actionTypes";

export const initialState = {
  player1: {
    name: "",
    numberOfMoves: 0
  },
  player2: {
    name: "",
    numberOfMoves: 0
  },
  gameState: [[null, null, null], [null, null, null], [null, null, null]],
  winner: null,
  isDraw: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_NAME_CHANGE: {
      return {
        ...state,
        [action.payload.player]: {
          name: action.payload.name,
          numberOfMoves: 0
        }
      };
    }

    default:
      return state;
  }
}
