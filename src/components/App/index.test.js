import React from "react";
import App from ".";
import { shallow } from "enzyme";

describe("App", () => {
  test("Should render without exploding", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
