var fs = require('fs');

//read file song.txt
var text = fs.readFileSync('./song.txt', {encoding: 'utf8'});
fs.writeFileSync('./song-2.txt', text);
console.log(text);