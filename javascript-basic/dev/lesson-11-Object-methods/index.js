/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
var rectangle = {
  width: 10,
  height: 5,
  //ES5
  // getWidth: function(){
  //     return this.width;
  // },
  // getHeight: function(){
  //     return this.height;
  // },
  // getArea: function() {
  //     return this.width * this.height
  // }

  //ES6
  getWidth(){
    return this.width;
  },
  getHeight(){
    return this.height;
  },
  getArea() {
    return this.width * this.height
  }
}
console.log(rectangle.getArea());