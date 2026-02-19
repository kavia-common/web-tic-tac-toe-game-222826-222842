import React from 'react';

/**
 * PUBLIC_INTERFACE
 * A single Tic Tac Toe cell.
 */
export default function Cell({ value, onClick, disabled, isWinning, index }) {
  const markClass = value === 'X' ? 'mark-x' : value === 'O' ? 'mark-o' : '';
  const winningClass = isWinning ? 'winning' : '';

  const ariaLabel = value
    ? `Cell ${index + 1}, ${value}`
    : `Cell ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={`cell ${markClass} ${winningClass}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {value ?? ''}
    </button>
  );
}
