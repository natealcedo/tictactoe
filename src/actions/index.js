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

export function startGame() {
  return {
    type: actionTypes.START_GAME,
    payload: null
  };
}

export default {
  onNameChange,
  startGame
};
