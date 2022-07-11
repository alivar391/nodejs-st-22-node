const { createReadStream, createWriteStream } = require('fs');
const csv = require('csvtojson');

const convert = () => {
  try {
      const readableStream = createReadStream('./csv/csv.csv');
      const writableStream = createWriteStream('./csv/csvOutput.txt');
      readableStream
        .pipe(csv())
        .pipe(writableStream)
        .on('finish', () => {
          console.log(`Conversion process done, result in csvOutput.txt`);
        })
  } catch (err) {
    console.log(err);
  };
};
convert();