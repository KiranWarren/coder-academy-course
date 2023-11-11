// Synchronous library for doing file IO
const fs = require("node:fs");

// Asynchronous function, making directory can take time
const { mkdir } = require("node:fs/promises");

// Streaming data, safer than traditional saving/downloading/etc
// Synchronous, so we wait and it is blocking
const { Readable } = require("node:stream");

// Wait for streaming to finish, it can take time, so it should be a promise
// Shouldn't be blocking, let's handle this one with promise instead of async
const { finished } = require("node:stream/promises");

// Node file & directory path helper system
// /folder/subfolder/filename.png
const path = require("node:path");

// Constants
API_URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

//
function downloadPokePic(targetId = getRandomId()) {}

// Generate a random number between 1 and 1017 (valid Pokemon Ids)
function getRandomId() {
  return 1 + Math.floor(Math.random() * 1017);
}

// Retrieve Pokemon data for given id
// Retrieve the image url from the Pokemon data
async function getPokePicURL(targetId = getRandomId()) {
  // Retrieve the API
  let response = await fetch(API_URL_BASE + targetId).catch((error) => {
    throw new Error("API failure)");
  });

  if (response.status == "404") {
    throw new Error("API did not have data for the requested ID");
  }

  // Convert the response into usable JSON
  let data = await response.json().catch((error) => {
    throw new Error("API did not return valid JSON");
  });

  // Return the image URL from the JSON data
  return data.sprites.other["official-artwork"].front_default;
}

// Download that image and save it to the computer
// Return the downloader image file path
async function savePokePicToDisk(
  targetUrl,
  targetDownloadFilename,
  targetDownloadDirectory = "./"
) {}

module.exports = {
  downloadPokePic,
  getRandomId,
  getPokePicURL,
  savePokePicToDisk,
};
