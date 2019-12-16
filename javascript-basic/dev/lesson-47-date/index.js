var moment = require('moment');

var now = new Date('2019/12/15');
//console.log(now.getDay());

// var now = moment().format('YYYY/MM/DD');
// console.log(now);


 
function diff(a, b) {
  // Write code here...
  var a = new Date(a);
  var b = new Date(b);
  return b.getTime() - a.getTime();
}
var a = new Date('2019/10/17');
var b = new Date('2019/10/21');
console.log(diff(a, b));