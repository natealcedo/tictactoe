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
});
