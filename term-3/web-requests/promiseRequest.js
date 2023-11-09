const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function getRandomPokemon() {
  // Create random pokemon id
  let id = 4; //1 + Math.random() * 1291;

  // Fetch the results from the Pokemon API
  let result = fetch(API_BASE_URL + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let pokemonName = document.getElementById("pokemonName");
      let pokemonImage = document.getElementById("pokemonImage");

      pokemonName.innerText = data.name;
      pokemonImage.src = data.sprites.other["official-artwork"].front_shiny;
      pokemonImage.alt = "Image of " + data.name;

      return data;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}
