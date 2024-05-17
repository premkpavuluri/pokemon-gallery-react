import {useEffect, useState} from "react";
import * as PokemonDetails from '../resources/pokemon.json'

const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Commenting because of Bad resolution of the image
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //       return data;
    //     })
    //     .then(({name, sprites: {front_default}}) => setPokemon({name, imageUrl: front_default}));
    const {name, art_url} = PokemonDetails.default[pokemonId - 1];

    setPokemon({name, imageUrl: art_url});
  }, [pokemonId]);

  return pokemon;
}

export default usePokemon;