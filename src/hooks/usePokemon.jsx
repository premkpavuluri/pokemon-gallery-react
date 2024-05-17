import {useEffect, useState} from "react";

const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          return data;
        })
        .then(({name, sprites: {front_default}}) => setPokemon({name, imageUrl: front_default}));
  }, [pokemonId]);

  return pokemon;
}

export default usePokemon;