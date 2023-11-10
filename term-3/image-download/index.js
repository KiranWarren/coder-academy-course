const { downloadPokePic } = require("./downloader.js");

downloadPokePic()
  .then((savedFileOutput) => {
    console.log("New image is saved to: " + savedFileOutput);
  })
  .catch((error) => {
    console.log(error);
  });
