import React from 'react';
import Option from './Option';

const Options = ({options, handleDeleteOptions, handleDeleteOption }) => (
    <div>
      <button
        className="button button--link"
        onClick={handleDeleteOptions}
      >Remove all</button>
      {
        options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
);

export default Options;