import { useEffect, useState } from "react";

export default function PokemonHook() {
  // = useState(initial value of state)
  let [pokemon, setPokemon] = useState({});

  function getPokemon() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let randomPokemonNumber = Math.floor(Math.random() * 1017) + 1;
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`
    );
    let data = await response.json();
    //setPokemon({name: data.name}) Can use if only 1 property
    setPokemon(data);
  };

  if (pokemon.name) {
    return (
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="Pokemon" />
        <button onClick={getPokemon}>Get the Pokemon!</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No data to show.</h1>
      </div>
    );
  }
}
