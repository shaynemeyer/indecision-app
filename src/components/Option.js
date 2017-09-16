import React from 'react';

const Option = ({ optionText, handleDeleteOption}) => (
    <div>
      {optionText}
      <button
        className="button button--link"
        onClick={() => {
        handleDeleteOption(optionText);
      }}
      >remove</button>
    </div>
);

export default Option;