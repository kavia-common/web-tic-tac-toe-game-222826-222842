import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Displays the game title and current status (turn / win / draw).
 */
export default function StatusBar({ statusText, hintText }) {
  return (
    <div className="topbar" role="region" aria-label="Game status bar">
      <div className="brand">
        <p className="brand-title">Retro Tic Tac Toe</p>
        <p className="status" aria-live="polite">
          {statusText}
        </p>
      </div>

      <p className="hint">{hintText}</p>
    </div>
  );
}
