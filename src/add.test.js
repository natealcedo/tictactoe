import add from "./add";

describe("add", () => {
  test("should add 2 numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});
