import React from "react";

const Pokemon = ({name, imageUrl}) => {
  return (<div className="pokemon-card">
    <figure>
      <img className="image-container" src={imageUrl} alt={name}/>
      <figcaption>{name}</figcaption>
    </figure>
  </div>);
};

const PokemonGallery = ({pokemonDetails}) => {
  const pokemonList = pokemonDetails.map(({pkdx_id, name, art_url}) =>
      <Pokemon key={pkdx_id} name={name} imageUrl={art_url}/>
  );

  return (<div className="pokemon-gallery">
    {pokemonList}
  </div>);
};

export default PokemonGallery;