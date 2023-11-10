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
  targetDownloadDirectory = "./Images/"
) {}

module.exports = {
  downloadPokePic,
  getRandomId,
  getPokePicURL,
  savePokePicToDisk,
};
