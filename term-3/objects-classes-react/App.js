const Movie = require("./Movie.js");
const Store = require("./Store.js");

// Make a store instance
let store = new Store();

// Make two movies
movie1 = new Movie("Blade Runner", 123, "Bob Bobbins");
movie2 = new Movie("Blade Runner 2049", 154, "Jerry Moomoo");

// Add movies to store
store.movies.push(movie1, movie2);

// Print all the stuff
console.log(store.movies);
store.movies.forEach((movie) => {
  console.log(movie.getMovie());
});
