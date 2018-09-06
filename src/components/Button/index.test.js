import React from "react";
import Button from ".";
import { shallow } from "enzyme";

describe("Button", () => {
  test("Should render without exploding", () => {
    const wrapper = shallow(<Button label={"Button"} onClick={() => {}} />);
    expect(wrapper)
      .toIncludeText("Button")
      .toMatchSnapshot();
  });

  test("Should call onClick when clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button label={"Button"} onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
