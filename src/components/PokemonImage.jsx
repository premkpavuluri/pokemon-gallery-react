import React from "react";

const PokemonImage = ({name, imageUrl}) => {
  return (<div className="pokemon-image">
    <figure>
      <img className="image-container" src={imageUrl} alt={name}/>
      <figcaption>{name}</figcaption>
    </figure>
  </div>);
};

export default PokemonImage;