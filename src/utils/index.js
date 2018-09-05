function checkRow(state, playerValueOnBoard) {
  return state.some(row =>
    row.every(element => element === playerValueOnBoard)
  );
}

function checkColumn(state, playerValueOnBoard) {
  const newState = _rotateState(state);
  return checkRow(newState, playerValueOnBoard);
}

function checkDiagonal([row1, row2, row3], playerValueOnBoard) {
  if (
    row1[0] === playerValueOnBoard &&
    row2[1] === playerValueOnBoard &&
    row3[2] === playerValueOnBoard
  ) {
    return true;
  }

  if (
    row1[2] === playerValueOnBoard &&
    row2[1] === playerValueOnBoard &&
    row3[0] === playerValueOnBoard
  ) {
    return true;
  }

  return false;
}

function _rotateState(state) {
  return state[0].map((_, i) => state.map(row => row[i]));
}

export function checkWinCondition(state, playerValueOnBoard) {
  if (checkRow(state, playerValueOnBoard)) {
    return true;
  }

  if (checkColumn(state, playerValueOnBoard)) {
    return true;
  }

  if (checkDiagonal(state, playerValueOnBoard)) {
    return true;
  }

  return false;
}

export function updateGameState(state, row, column, value) {
  const newState = [...state];
  newState[row][column] = value;
  return newState;
}

export function checkGameBoardFilled(state) {
  return state.every(row => row.every(element => element !== null));
}

export default {
  checkGameBoardFilled,
  checkWinCondition,
  updateGameState
};
