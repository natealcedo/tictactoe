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
        numberOfMoves: 0,
        valueOnBoard: 0
      }
    };

    expect(
      reducers(initialState, actions.onNameChange("player1", "Nate"))
    ).toEqual(expectedState);
  });

  test("should start game with player one", () => {
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

  test("should start new game when one player won", () => {
    const gameInitialState = {
      ...initialState,
      isGameStarted: true,
      gameState: [[0, 0, 0], [1, 1, null], [null, null, null]],
      winner: "player1",
      player1: {
        name: "Nate",
        numberOfMoves: 5,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 4,
        valueOnBoard: 1
      },
      currentPlayer: "player1"
    };
    const expectedState = {
      ...initialState,
      gameState: [[null, null, null], [null, null, null], [null, null, null]],
      isGameStarted: true,
      player1: {
        name: "Nate",
        numberOfMoves: 0,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 0,
        valueOnBoard: 1
      },
      winner: null,
      currentPlayer: "player2"
    };

    expect(reducers(gameInitialState, actions.startNewGame())).toEqual(
      expectedState
    );
  });

  test("should start new game when drawn", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, 1], [1, 1, 0], [0, 1, 0]],
      isDraw: true,
      player1: {
        name: "Nate",
        numberOfMoves: 5,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 4,
        valueOnBoard: 1
      },
      currentPlayer: "player1"
    };
    const expectedState = {
      ...initialState,
      isGameStarted: true,
      gameState: [[null, null, null], [null, null, null], [null, null, null]],
      player1: {
        name: "Nate",
        numberOfMoves: 0,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 0,
        valueOnBoard: 1
      },
      isDraw: false,
      currentPlayer: "player2"
    };

    expect(reducers(gameInitialState, actions.startNewGame())).toEqual(
      expectedState
    );
  });

  test("should update state when turn taken", () => {
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
      },
      isGameStarted: true,
      currentPlayer: "player1"
    };
    const expectedState = {
      ...gameInitialState,
      player1: {
        name: "Nate",
        numberOfMoves: 1,
        valueOnBoard: 0
      },
      currentPlayer: "player2",
      gameState: [[0, null, null], [null, null, null], [null, null, null]]
    };

    expect(reducers(gameInitialState, actions.takeTurn(0, 0))).toEqual(
      expectedState
    );
  });

  test("should set player one as winner", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, null], [1, 1, null], [null, null, null]],
      player1: {
        name: "Nate",
        numberOfMoves: 2,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 2,
        valueOnBoard: 1
      },
      isGameStarted: true,
      currentPlayer: "player1"
    };

    const expectedState = {
      ...gameInitialState,
      gameState: [[0, 0, 0], [1, 1, null], [null, null, null]],
      player1: {
        name: "Nate",
        numberOfMoves: 3,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 2,
        valueOnBoard: 1
      },
      winner: "player1"
    };

    expect(reducers(gameInitialState, actions.takeTurn(0, 2))).toEqual(
      expectedState
    );
  });

  test("should not take turn when game has been won", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, 0], [1, 1, null], [null, null, null]],
      player1: {
        name: "Nate",
        numberOfMoves: 3,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 2,
        valueOnBoard: 1
      },
      winner: "player1",
      isGameStarted: true,
      currentPlayer: "player1",
      draw: false
    };

    expect(reducers(gameInitialState, actions.takeTurn(2, 1))).toEqual(
      gameInitialState
    );
  });

  test("should not take turn when game been drawn", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, 1], [1, 1, 0], [0, 1, 0]],
      player1: {
        name: "Nate",
        numberOfMoves: 5,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 5,
        valueOnBoard: 1
      },
      winner: "player1",
      isGameStarted: true,
      currentPlayer: "player1",
      draw: true
    };

    expect(reducers(gameInitialState, actions.takeTurn(2, 1))).toEqual(
      gameInitialState
    );
  });

  test("should set player one as winner", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, null], [1, 1, 0], [1, 1, 0]],
      player1: {
        name: "Nate",
        numberOfMoves: 4,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 4,
        valueOnBoard: 1
      },
      isGameStarted: true,
      currentPlayer: "player1",
      draw: false
    };

    const expectedState = {
      ...gameInitialState,
      gameState: [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
      player1: {
        name: "Nate",
        numberOfMoves: 5,
        valueOnBoard: 0
      },
      currentPlayer: "player1",
      winner: "player1"
    };

    expect(reducers(gameInitialState, actions.takeTurn(0, 2))).toEqual(
      expectedState
    );
  });

  test("should set isDraw to be true", () => {
    const gameInitialState = {
      ...initialState,
      gameState: [[0, 0, 1], [1, 1, 0], [null, 1, 0]],
      player1: {
        name: "Nate",
        numberOfMoves: 4,
        valueOnBoard: 0
      },
      player2: {
        name: "bob",
        numberOfMoves: 4,
        valueOnBoard: 1
      },
      isGameStarted: true,
      currentPlayer: "player1",
      isDraw: false
    };

    const expectedState = {
      ...gameInitialState,
      gameState: [[0, 0, 1], [1, 1, 0], [0, 1, 0]],
      player1: {
        name: "Nate",
        numberOfMoves: 5,
        valueOnBoard: 0
      },
      isDraw: true,
      winner: null
    };

    expect(reducers(gameInitialState, actions.takeTurn(2, 0))).toEqual(
      expectedState
    );
  });
});
