import { useState } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const { board, calculateWinner, resetGame, getStatusMessage, handleClick } =
    useTicTacToe();

  console.log(board);

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {/* render by board */}
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
