/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
  return
  `
  // Ghi câu trả lời ở đây
  Ket qua tra ve la true, prototype tao mot function la sing()
  2 doi tuowng duong khoi tao qua tu khoa new co cung funtion sing()
  `
}

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function () {
  console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing