import utils from ".";

describe("utils", () => {
  describe("checkWinCondition", () => {
    describe("row", () => {
      each([
        // Row one
        [[[0, 0, 0], [1, 1, null], [null, null, null]], 0],
        [[[1, 1, 1], [0, 0, null], [null, null, null]], 1],
        // Row Two
        [[[1, 1, null], [0, 0, 0], [null, null, null]], 0],
        [[[0, 0, null], [1, 1, 1], [null, null, null]], 1],
        // Row three
        [[[1, 1, null], [null, null, null], [0, 0, 0]], 0],
        [[[0, 0, null], [null, null, null], [1, 1, 1]], 1]
      ]).test(
        "state with win condition should return true ",
        (state, player) => {
          expect(utils.checkWinCondition(state, player)).toBeTrue();
        }
      );
    });

    describe("column", () => {
      each([
        // column one
        [[[0, 1, null], [0, 1, null], [0, null, null]], 0],
        [[[1, 0, null], [1, 0, null], [1, null, null]], 1],
        // column Two
        [[[1, 0, null], [1, 0, null], [null, 0, null]], 0],
        [[[0, 0, null], [1, 1, 1], [null, null, null]], 1],
        // column three
        [[[null, 1, 0], [null, 1, 0], [null, null, 0]], 0],
        [[[null, 0, 1], [null, 0, 1], [null, null, 1]], 1]
      ]).test(
        "state with win condition should return true ",
        (state, player) => {
          expect(utils.checkWinCondition(state, player)).toBeTrue();
        }
      );
    });

    describe("diagonal", () => {
      each([
        // Top left to bottom right
        [[[0, 1, 1], [null, 0, null], [null, null, 0]], 0],
        [[[1, 0, 0], [null, 1, null], [null, null, 1]], 1],
        // Bottom left to top right
        [[[1, 1, 0], [null, 0, null], [0, null, null]], 0],
        [[[0, 0, 1], [null, 1, null], [1, null, null]], 1]
      ]).test(
        "state with win condition should return true ",
        (state, player) => {
          expect(utils.checkWinCondition(state, player)).toBeTrue();
        }
      );
    });
  });

  describe("updateGameState", () => {
    test("game should be updated", () => {
      const previousGameState = [
        [null, null, null],
        [null, null, null][(null, null, null)]
      ];

      const expectedGameState = [
        [0, null, null],
        [null, null, null][(null, null, null)]
      ];

      expect(utils.updateGameState(previousGameState, 0, 0, 0)).toEqual(
        expectedGameState
      );
    });
  });

  describe("checkGameBoardFilled", () => {
    test("board should be filled", () => {
      const gameState = [[[0, 0, 1], [1, 0, 0], [1, 1, 0]]];
      expect(utils.checkGameBoardFilled(gameState)).toBeTrue();
    });

    test("board should not be filled", () => {
      const gameState = [[0, 0, 0], [1, 1, null], [null, null, null]];
      expect(utils.checkGameBoardFilled(gameState)).toBeFalse();
    });
  });
});
