var fs = require('fs');

console.log('Start');
fs.readFile('./song1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('song 1',data);
});

fs.readFile('./song2.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('song 2',data);
});

console.log('End');

// Sync: dong bo
// Async: bat dong bo