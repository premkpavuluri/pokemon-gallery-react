import React from "react";

const Pokemon = ({name, imageUrl}) => {
  return (<div className="pokemon-card">
    <figure>
      <img className="image-container" src={imageUrl} alt={name}/>
      <figcaption>{name}</figcaption>
    </figure>
  </div>);
};

export default Pokemon;