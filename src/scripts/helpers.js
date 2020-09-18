const fs = require('fs');
const readline = require('readline');

const csvParser = (filepath) => {
  const readStream = fs.createReadStream(filepath);
  const lines = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  return lines;
}

module.exports = csvParser;
