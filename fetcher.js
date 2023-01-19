const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1]

request(URL, (error, response, body) => {
  const fileSize = body.length;
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(error);
    }
    console.log('statusCode:', response && response.statusCode) // file written successfully
    console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`)
  });
});

// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.

// > node fetcher.js http://www.example.edu/ ./index.html
// console.log this ---> Downloaded and saved 3261 bytes to ./index.html