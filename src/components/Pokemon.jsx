import React, {useEffect, useState} from "react";
import usePokemon from "../hooks/usePokemon";
import PokemonImage from "./PokemonImage";
import Loader from "./Loader";

const Pokemon = ({pokemonId, name, imageUrl}) => {
  const [isLoading, setIsLoading] = useState(true);
  const pokemon = usePokemon(pokemonId);
  useEffect(() => {
    if (pokemon) {
      // Simulating a delay to show the loader
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [pokemon]);

  return (<div className="pokemon-card">
    {isLoading ? <Loader></Loader> : <PokemonImage name={pokemon.name} imageUrl={pokemon.imageUrl}/>}
  </div>);
};

export default Pokemon;