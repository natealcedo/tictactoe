import reducers, { initialState } from ".";
import actions from "../actions";

describe("reducers", () => {
  test("should return initialState state for unknown action type", () => {
    const action = {
      type: "FOO_BAR",
      payload: null
    };
    expect(reducers(initialState, action)).toEqual(initialState);
  });

  test("should update player1", () => {
    const expectedState = {
      ...initialState,
      player1: {
        name: "Nate",
        numberOfMoves: 0
      }
    };

    expect(
      reducers(initialState, actions.onNameChange("player1", "Nate"))
    ).toEqual(expectedState);
  });

  test("should start game", () => {
    const gameInitialState = {
      ...initialState,
      player1: {
        name: "Nate",
        numberOfMoves: 0,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 0,
        valueOnBoard: 1
      }
    };
    const expectedState = {
      ...gameInitialState,
      isGameStarted: true,
      currentPlayer: "player1"
    };

    expect(reducers(gameInitialState, actions.startGame())).toEqual(
      expectedState
    );
  });
});
