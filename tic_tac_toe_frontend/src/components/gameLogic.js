/**
 * Tic Tac Toe game logic helpers.
 */

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * PUBLIC_INTERFACE
 * Determine the winner and winning line for a given board state.
 * @param {(null|'X'|'O')[]} squares A 9-length array representing board marks.
 * @returns {{ winner: (null|'X'|'O'), winningLine: null|number[] }}
 */
export function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    const v = squares[a];
    if (v && v === squares[b] && v === squares[c]) {
      return { winner: v, winningLine: [a, b, c] };
    }
  }
  return { winner: null, winningLine: null };
}

/**
 * PUBLIC_INTERFACE
 * Determine whether the game is a draw (no winner and no empty squares).
 * @param {(null|'X'|'O')[]} squares A 9-length array representing board marks.
 * @returns {boolean} True if draw, false otherwise.
 */
export function isDraw(squares) {
  const { winner } = calculateWinner(squares);
  if (winner) return false;
  return squares.every((s) => s !== null);
}
