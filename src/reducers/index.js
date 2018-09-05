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
    default:
      return state;
  }
}
