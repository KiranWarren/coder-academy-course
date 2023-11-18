const Media = require("./Media.js");

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

module.exports = Movie;
