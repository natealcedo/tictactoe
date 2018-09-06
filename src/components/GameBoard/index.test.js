import React from "react";
import { GameBoard } from ".";
import { shallow } from "enzyme";
import Button from "../Button";

describe("GameBoard", () => {
  const noOp = () => {};
  test("should render without exploding", () => {
    const gameState = [[0, 0, 1], [1, 1, 0], [0, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 5,
      valueOnBoard: 0
    };
    const wrapper = shallow(
      <GameBoard
        currentPlayer={currentPlayer}
        gameState={gameState}
        isDraw={false}
        isGameStarted={true}
        resetGame={noOp}
        startNewGame={noOp}
        takeTurn={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should show drawn", () => {
    const gameState = [[1, 0, 0], [0, 1, 1], [1, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 5,
      valueOnBoard: 1
    };
    const wrapper = shallow(
      <GameBoard
        currentPlayer={currentPlayer}
        gameState={gameState}
        isDraw={true}
        isGameStarted={true}
        resetGame={noOp}
        startNewGame={noOp}
        takeTurn={() => {}}
      />
    );
    expect(wrapper.find(".state-tracker > h2")).toIncludeText("Game Drawn");
    expect(wrapper).toMatchSnapshot();
  });

  test('should show "Nate won"', () => {
    const gameState = [[1, 0, 0], [1, 1, 1], [0, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 5,
      valueOnBoard: 1
    };
    const wrapper = shallow(
      <GameBoard
        currentPlayer={currentPlayer}
        gameState={gameState}
        isDraw={false}
        isGameStarted={true}
        resetGame={noOp}
        startNewGame={noOp}
        takeTurn={() => {}}
        winner="player2"
      />
    );
    expect(wrapper.find(".state-tracker > h2")).toIncludeText("NATE won!");
    expect(wrapper).toMatchSnapshot();
  });

  test("should call resetGame and startNewGame", () => {
    const fn = jest.fn();
    const gameState = [[1, 0, 0], [1, 1, 1], [0, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 5,
      valueOnBoard: 1
    };
    const wrapper = shallow(
      <GameBoard
        currentPlayer={currentPlayer}
        gameState={gameState}
        isDraw={false}
        isGameStarted={true}
        resetGame={fn}
        startNewGame={fn}
        takeTurn={() => {}}
        winner="player2"
      />
    );
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(fn).toHaveBeenCalledTimes(2);
    expect(wrapper).toMatchSnapshot();
  });

  test("should not render ", () => {
    const gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    const wrapper = shallow(
      <GameBoard
        gameState={gameState}
        isDraw={false}
        isGameStarted={false}
        resetGame={noOp}
        startNewGame={noOp}
      />
    );
    expect(wrapper).toBeEmptyRender();
  });
});
