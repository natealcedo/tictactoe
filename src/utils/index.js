function checkRow(state, player) {
  return state.some(row => row.every(element => element === player));
}

function checkColumn(state, player) {
  const newState = _rotateState(state);
  return checkRow(newState, player);
}

function checkDiagonal([row1, row2, row3], player) {
  if (row1[0] === player && row2[1] === player && row3[2] === player) {
    return true;
  }

  if (row1[2] === player && row2[1] === player && row3[0] === player) {
    return true;
  }

  return false;
}

function _rotateState(state) {
  return state[0].map((_, i) => state.map(row => row[i]));
}

export function checkWinCondition(state, player) {
  if (checkRow(state, player)) {
    return true;
  }

  if (checkColumn(state, player)) {
    return true;
  }

  if (checkDiagonal(state, player)) {
    return true;
  }

  return false;
}

export default {
  checkWinCondition
};
