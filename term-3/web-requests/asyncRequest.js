// const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getRandomPokemonAsync() {
  let id = 1 + Math.floor(Math.random() * 1017);
  let response = await fetch(API_BASE_URL + id);
  let data = await response.json();

  let pokemonName = document.getElementById("pokemonName");
  let pokemonImage = document.getElementById("pokemonImage");
  pokemonName.innerText = data.name;
  pokemonImage.src = data.sprites.other["official-artwork"].front_default;
  pokemonImage.alt = "Image of " + data.name;
}
