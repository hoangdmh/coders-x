// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

var path = require('path'); // mot module co san cua Nodejs
function getExtensionFilename(filename) {
  return path.extname(filename).replace('.', '');
}
console.log(getExtensionFilename('abc.mp3'));