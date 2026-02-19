import React from 'react';
import Cell from './Cell';

/**
 * PUBLIC_INTERFACE
 * The Tic Tac Toe 3x3 board.
 */
export default function Board({ squares, onPlayAtIndex, isLocked, winningLine }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, idx) => (
        <Cell
          key={idx}
          value={value}
          index={idx}
          isWinning={Array.isArray(winningLine) ? winningLine.includes(idx) : false}
          disabled={isLocked || value !== null}
          onClick={() => onPlayAtIndex(idx)}
        />
      ))}
    </div>
  );
}
