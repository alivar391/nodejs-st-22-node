const process = require('process');

process.stdin.on('data', data => {
  console.log(data.toString().trim().split('').reverse().join(''));
})