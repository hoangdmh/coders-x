function Mouse(color, weight) {
  this.color = color;
  this.dead = false;
}

Mouse.prototype.die = function() {
  this.dead = true;
};

module.exports = Mouse

// class Mouse {
//   constructor(color, weight) {
//     this.color = color;
//     this.dead = false;
//   }
//   die() {
//     this.dead = true;
//   }
// }


// export default Mouse
