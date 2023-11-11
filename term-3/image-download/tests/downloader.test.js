const { getPokePicURLAndName } = require("../downloader.js");

describe("Retrieve a Pokemon name and image URL", () => {
  // If id=25, name should be "Pikachu" and URL should be
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"

  let expectedImageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
  let expectedJsonData = {
    name: "pikachu",
    sprites: {
      other: { "official-artwork": { front_default: expectedImageUrl } },
    },
  };

  global.fetch = jest.fn(() => {
    console.log("Fetch has been replaced with a Jest mock");
    return new Promise((resolve, reject) => {
      resolve({
        json: () => {
          return Promise.resolve(expectedJsonData);
        },
      });
    });
  });

  test("If given an ID of 25, we expect pikachu and the correct URL", async () => {
    let result = await getPokePicURLAndName(25);
    expect(result.imageUrl).toEqual(expectedImageUrl);
    expect(result.pokemonName).toEqual("pikachu");
  });

  // Clear the modification to fetch created for testing
  afterEach(() => {
    global.fetch.mockClear;
  });
});
