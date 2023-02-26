import React from 'react';

export default function TrophyPanel( props ) {
  return (
    <div className="trophy-panel">
      <div className="emoji">🏆</div>
      <p className="text">
        {props.children}
      </p>
    </div>
  );
}