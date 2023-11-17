const { Media } = require("./Media.js");

class Movie extends Media {
  constructor(name, runtime, director) {
    super(name);
    this.runtime = runtime;
    this.director = director;
  }

  getMovie() {
    return `${this.name} is a movie that runs for ${this.runtime} minutes and was directed by ${this.director}.`;
  }
}

movie1 = new Movie("Blade Runner", 122, "Bob Bobbins");

console.log(movie1);
console.log(Media.count);
console.log(movie1.getMovie());
