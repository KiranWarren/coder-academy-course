// Media class as a generic starting point
// Then we can have videogames, book, movies, etc. as child classes
class Media {
  constructor(name) {
    this.name = name;
    Media.count++;
  }

  static count = 0;

  getMediaName() {
    if (this.name) {
      return this.name;
    } else {
      return "Media does not have a name";
    }
  }

  static version() {
    return "class version 0.0.1";
  }

  version() {
    return "instance version 0.0.1";
  }
}

module.exports = {
  Media,
};
