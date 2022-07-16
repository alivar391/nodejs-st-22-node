import { stdin } from 'process';

stdin.on('data', data => {
  console.log(data.toString().trim().split('').reverse().join(''));
})