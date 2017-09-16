import React from 'react';

const Action = ({handlePick, hasOptions}) =>  (
    <div>
      <button
        onClick={handlePick}
        disabled={!hasOptions}
        className="big-button"
      >
        What should I do?
      </button>
    </div>
);

export default Action;