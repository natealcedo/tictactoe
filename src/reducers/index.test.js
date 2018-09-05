import reducers, { initialState } from ".";

describe("reducers", () => {
  it("should return initialState state for unknown action type", () => {
    const action = {
      type: "FOO_BAR",
      payload: null
    };
    expect(reducers(initialState, action)).toEqual(initialState);
  });
});
