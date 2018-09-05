import React from "react";
import { GameBoard } from ".";
import { shallow } from "enzyme";

describe("GameBoard", () => {
  test("should render without exploding", () => {
    const gameState = [[0, 0, 1], [1, 1, 0], [0, 1, 0]];
    const currentPlayer = {
      name: "Nate",
      numberOfMoves: 0,
      valueOnBoard: 1
    };
    const wrapper = shallow(
      <GameBoard
        gameState={gameState}
        isGameStarted={true}
        currentPlayer={currentPlayer}
        takeTurn={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should not render ", () => {
    const gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    const wrapper = shallow(
      <GameBoard isGameStarted={false} gameState={gameState} />
    );
    expect(wrapper).toBeEmptyRender();
  });
});
