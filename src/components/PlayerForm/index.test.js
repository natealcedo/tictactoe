import React from "react";
import { PlayerForm } from ".";
import { shallow } from "enzyme";

describe("PlayerForm", () => {
  const noOp = () => {};
  test("should render without exploding", () => {
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={noOp}
        playerOneName=""
        playerTwoName=""
        isGameStarted={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should not call onGameStart when button is clicked and names are not filled", () => {
    const onGameStart = jest.fn();
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={onGameStart}
        playerOneName=""
        playerTwoName=""
        isGameStarted={false}
      />
    );
    wrapper.find(".start-game-button").simulate("click");
    expect(onGameStart).not.toHaveBeenCalled();
  });

  test("should call onGameStart when button is clicked", () => {
    const onGameStart = jest.fn();
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={onGameStart}
        playerOneName="Nate"
        playerTwoName="James"
        isGameStarted={false}
      />
    );
    wrapper.find(".start-game-button").simulate("click");
    expect(onGameStart).toHaveBeenCalled();
  });

  test("should call onGameStart when enter is pressed on either key inputs", () => {
    const onGameStart = jest.fn();
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={onGameStart}
        playerOneName="Nate"
        playerTwoName="James"
        isGameStarted={false}
      />
    );

    const event = {
      key: "Enter",
      keyCode: 13,
      which: 13
    };

    wrapper.find('input[name="player-one"]').simulate("keyPress", event);
    wrapper.find('input[name="player-two"]').simulate("keyPress", event);

    expect(onGameStart).toHaveBeenCalledTimes(2);
  });

  test("should not render when game is started", () => {
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={noOp}
        playerOneName=""
        playerTwoName=""
        isGameStarted={true}
      />
    );
    expect(wrapper).toBeEmptyRender();
  });

  test("should render without exploding", () => {
    const wrapper = shallow(
      <PlayerForm
        onChange={noOp}
        onGameStart={noOp}
        playerOneName=""
        playerTwoName=""
        isGameStarted={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should call onChange with correct arguments for playerOne", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <PlayerForm
        onChange={onChange}
        onGameStart={noOp}
        playerOneName=""
        playerTwoName=""
        isGameStarted={false}
      />
    );
    const event = {
      target: {
        value: "Jason"
      }
    };
    wrapper.find('input[name="player-one"]').simulate("change", event);
    expect(onChange).toHaveBeenCalledWith("player1", "Jason");
  });

  test("should call onChange with correct arguments for playerTwo", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <PlayerForm
        onChange={onChange}
        onGameStart={noOp}
        playerOneName=""
        playerTwoName=""
        isGameStarted={false}
      />
    );
    const event = {
      target: {
        value: "Bourne"
      }
    };
    wrapper.find('input[name="player-two"]').simulate("change", event);
    expect(onChange).toHaveBeenCalledWith("player2", "Bourne");
  });
});
