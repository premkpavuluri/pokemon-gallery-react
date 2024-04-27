import React from 'react';

const LoadMoreButton = ({onClick}) => {
  return <button className="btn-controls" onClick={onClick}>Load More</button>;
}

const ResetButton = ({onClick}) => {
  return <button className="btn-controls" onClick={onClick}>Reset</button>;
}

const FilterSearch = ({value, onChangeHandler}) =>
    <div className="search-section">
      <input
          value={value}
          onChange={(event) => onChangeHandler(event.target.value)}/>
    </div>

export {LoadMoreButton, ResetButton, FilterSearch};
