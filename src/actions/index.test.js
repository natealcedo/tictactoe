import actionTypes from "./actionTypes";
import actions from ".";

describe("actions", () => {
  test("onNameChange action", () => {
    const player = "player1";
    const name = "bob";
    expect(actions.onNameChange(player, name)).toEqual({
      type: actionTypes.ON_NAME_CHANGE,
      payload: {
        player,
        name
      }
    });
  });

  test("startGame action", () => {
    expect(actions.startGame()).toEqual({
      type: actionTypes.START_GAME,
      payload: null
    });
  });

  test("takeTurn action", () => {
    expect(actions.takeTurn(0, 0)).toEqual({
      type: actionTypes.TAKE_TURN,
      payload: {
        row: 0,
        column: 0
      }
    });
  });
});
