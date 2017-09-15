import React from 'react';

const Option = ({ optionText, handleDeleteOption}) => (
    <div>
      {optionText}
      <button onClick={() => {
        handleDeleteOption(optionText);
      }}
      >remove</button>
    </div>
);

export default Option;