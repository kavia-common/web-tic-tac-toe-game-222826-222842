import React, { useMemo, useState } from 'react';
import './App.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import { calculateWinner, isDraw } from './components/gameLogic';

const EMPTY_BOARD = Array(9).fill(null);

/**
 * PUBLIC_INTERFACE
 * App composition root: owns gameplay state and composes UI components.
 */
function App() {
  const [squares, setSquares] = useState(EMPTY_BOARD);
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, winningLine } = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => isDraw(squares), [squares]);

  const isLocked = Boolean(winner) || draw;

  const statusText = useMemo(() => {
    if (winner === 'X') return <span className="end"><span className="x">X</span> wins</span>;
    if (winner === 'O') return <span className="end"><span className="o">O</span> wins</span>;
    if (draw) return <span className="end">Draw</span>;
    return (
      <>
        Next: {xIsNext ? <span className="x">X</span> : <span className="o">O</span>}
      </>
    );
  }, [winner, draw, xIsNext]);

  const hintText = useMemo(() => {
    if (winner || draw) return 'Press Restart to play again';
    return 'Click a square to place your mark';
  }, [winner, draw]);

  // PUBLIC_INTERFACE
  const handlePlayAtIndex = (index) => {
    if (isLocked) return;
    if (squares[index] !== null) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext((v) => !v);
  };

  // PUBLIC_INTERFACE
  const handleRestart = () => {
    setSquares(EMPTY_BOARD);
    setXIsNext(true);
  };

  return (
    <div className="App">
      <div className="app-shell">
        <StatusBar statusText={statusText} hintText={hintText} />

        <main className="main">
          <section className="panel" aria-label="Game area">
            <Board
              squares={squares}
              onPlayAtIndex={handlePlayAtIndex}
              isLocked={isLocked}
              winningLine={winningLine}
            />

            <div className="actions">
              <button type="button" className="btn" onClick={handleRestart}>
                Restart
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
