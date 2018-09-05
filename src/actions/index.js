import actionTypes from "./actionTypes";

export function onNameChange(player, name) {
  return {
    type: actionTypes.ON_NAME_CHANGE,
    payload: {
      player,
      name
    }
  };
}

export function resetGame() {
  return {
    type: actionTypes.RESET_GAME,
    payload: null
  };
}

export function startGame() {
  return {
    type: actionTypes.START_GAME,
    payload: null
  };
}

export function startNewGame() {
  return {
    type: actionTypes.START_NEW_GAME,
    payload: null
  };
}

export function takeTurn(row, column) {
  return {
    type: actionTypes.TAKE_TURN,
    payload: {
      row,
      column
    }
  };
}

export default {
  onNameChange,
  resetGame,
  startGame,
  startNewGame,
  takeTurn
};
