var Mouse = require('./mouse');
//import Mouse from './mouse';

function Cat() {
  this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
  mouse.die();
};

var mouse1 = new Mouse("red");
var mouse2 = new Mouse("Green");
console.log(mouse1);
console.log(mouse2);

var tom = new Cat();
tom.eat(mouse1);
tom.eat(mouse2);

console.log(tom);


var math = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(arr) {
    var result = arr.reduce((a,b) => {
      return a + b;
    }, 0);
    return result;
  }
};

console.log(math.sum([6,4]));