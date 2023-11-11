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

function downloadPokePic(targetId = getRandomId()) {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the image URL
      let newUrl = await getPokePicURL(targetId);

      // Download the image
      let saveFileLocation = await savePokePicToDisk(
        newUrl,
        "ExampleImage.png",
        "images"
      );

      resolve(saveFileLocation);
    } catch (error) {
      reject(error);
    }
  });
}

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
) {
  // Fetch request to image URL
  let imageData = await fetch(targetUrl).catch((error) => {
    throw new Error("Image failed to download");
  });

  // Check if the directory exists (targetDownloadDirectory)
  if (!fs.existsSync(targetDownloadDirectory)) {
    // Make a directory if we need to
    await mkdir(targetDownloadDirectory);
  }

  // Create a JS-friendly file path
  let fullFileDestination = path.join(
    targetDownloadDirectory,
    targetDownloadFilename
  );

  // Stream the image from the fetch to disk
  let fileDownloadStream = fs.createWriteStream(fullFileDestination);

  // Get data as bytes from the web request, then pipe the bytes into the hard drive
  await finished(
    Readable.fromWeb(imageData.body).pipe(fileDownloadStream)
  ).catch((error) => {
    throw new Error("Failed to save image to disk");
  });

  // Return the saved image location
  return fullFileDestination;
}

module.exports = {
  downloadPokePic,
  getRandomId,
  getPokePicURL,
  savePokePicToDisk,
};
