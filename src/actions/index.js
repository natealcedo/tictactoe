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

export default {
  onNameChange
};
