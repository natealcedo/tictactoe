import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";
import "./playerform.css";

export const PlayerForm = ({
  onChange,
  onGameStart,
  playerOneName,
  playerTwoName,
  isGameStarted
}) =>
  isGameStarted ? null : (
    <div className="form-container">
      <div className="input-group">
        <label>Player one name:</label>
        <input
          name="player-one"
          onChange={e => onChange("player1", e.target.value)}
          value={playerOneName}
        />
      </div>
      <div className="input-group">
        <label>Player two name:</label>
        <input
          name="player-two"
          onChange={e => onChange("player2", e.target.value)}
          value={playerTwoName}
        />
      </div>
      <div className="button-row">
        <div
          className="start-game-button"
          onClick={() => {
            if (playerOneName === "" || playerTwoName === "") {
              return;
            }
            onGameStart();
          }}
        >
          <div>START GAME</div>
        </div>
      </div>
    </div>
  );

PlayerForm.propTypes = {
  isGameStarted: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
  onGameStart: propTypes.func.isRequired,
  playerOneName: propTypes.string.isRequired,
  playerTwoName: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  playerOneName: state.player1.name,
  playerTwoName: state.player2.name,
  isGameStarted: state.isGameStarted
});

export default connect(
  mapStateToProps,
  {
    onChange: actions.onNameChange,
    onGameStart: actions.startGame
  }
)(PlayerForm);
