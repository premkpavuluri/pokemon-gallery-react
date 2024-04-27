import React from 'react';

const LoadMoreButton = ({onClick}) => {
  return <button className="btn-controls" onClick={onClick}>Load More</button>;
}

const ResetButton = ({onClick}) => {
  return <button className="btn-controls" onClick={onClick}>Reset</button>;
}

export {LoadMoreButton, ResetButton};
