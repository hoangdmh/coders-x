console.log('Start');
var timeoutId = setTimeout(done, 2000);
console.log('Done');

function done(){
  console.log('ggggggggggggg');
}

clearTimeout(timeoutId);