import React from "react";
import { GameBoard } from ".";
import { shallow } from "enzyme";

describe("GameBoard", () => {
  test("should render without exploding", () => {
    const gameState = [[0, 0, 1], [1, 1, 0], [0, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 5,
      valueOnBoard: 0
    };
    const wrapper = shallow(
      <GameBoard
        gameState={gameState}
        isGameStarted={true}
        currentPlayer={currentPlayer}
        takeTurn={() => {}}
        isDraw={false}
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
        gameState={gameState}
        isGameStarted={true}
        currentPlayer={currentPlayer}
        takeTurn={() => {}}
        isDraw={true}
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
        gameState={gameState}
        isGameStarted={true}
        currentPlayer={currentPlayer}
        takeTurn={() => {}}
        winner="player2"
        isDraw={false}
      />
    );
    expect(wrapper.find(".state-tracker > h2")).toIncludeText("NATE won!");
    expect(wrapper).toMatchSnapshot();
  });

  test("should not render ", () => {
    const gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    const wrapper = shallow(
      <GameBoard isDraw={false} isGameStarted={false} gameState={gameState} />
    );
    expect(wrapper).toBeEmptyRender();
  });
});
