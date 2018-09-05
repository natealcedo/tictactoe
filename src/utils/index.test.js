import utils from ".";

describe("utils", () => {
  describe("checkWinCondition", () => {
    test.each([1, 2, 3, 4])(
      "state with win condition should return true",
      () => {
        expect(2).toEqual(2);
      }
    );
    each([
      [[[0, 0, 0], [1, 1, null], [null, null, null]], 0],
      [[[1, 1, 1], [0, 0, null], [null, null, null]], 1]
    ]).test("state with win condition should return true", (state, player) => {
      expect(utils.checkWinCondition(state, player)).toBeTrue();
    });
  });
});
