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

//
function downloadPokePic(targetId = getRandomId()) {}

// Generate a random number between 1 and 1017 (valid Pokemon Ids)
function getRandomId() {
  return 1 + Math.floor(Math.random * 1017);
}

// Retrieve Pokemon data for given id
// Retrieve the image url from the Pokemon data
async function getPokePicURL(targetId = getRandomId()) {}

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
