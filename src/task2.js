import { createReadStream, createWriteStream } from 'fs';
import csv from 'csvtojson';
import { join } from 'path';

const convert = () => {
  const inputFile = 'csv.csv';
  const outputFile = 'Output.txt';
  const readableStream = createReadStream(join(__dirname, 'csv', inputFile));
  const writableStream = createWriteStream(join(__dirname, 'csv', outputFile));
  readableStream
    .pipe(csv({
      delimiter: [';'],
      ignoreColumns: /(amount)/,
      headers: ['book', 'author', 'amount', 'price'],
      colParser: {
        "price": function (item) {
          return Number(item.split(',').join('.'));
        },
      },
    }))
    .pipe(writableStream);

  readableStream.on('error', error => {
    console.log(error.message);
  });

  writableStream
    .on('error', error => {
      console.log(error.message);
    })
    .on('finish', () => {
      console.log(`Conversion process done, result in ${join(__dirname, 'csv', outputFile)}`);
    })
};

convert();
