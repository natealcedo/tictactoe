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
});
