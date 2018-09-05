import React from "react";
import Square from "./Square";
import { shallow } from "enzyme";

describe("Square", () => {
  each([0, 1, null]).test(
    "should render without exploding for value %p",
    value => {
      const wrapper = shallow(
        <Square row={0} column={0} onClick={() => {}} value={value} />
      );
      expect(wrapper).toMatchSnapshot();
    }
  );

  test("should call onclick when clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Square row={0} column={0} onClick={onClick} value={null} />
    );
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
