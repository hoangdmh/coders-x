//ES5
// Constructor functions
function MyFun(a, b) {
	this.a = a;
	this.b = b;
}
MyFun.prototype.getSum = function(){
	return this.a + this.b;
}
var x = new MyFun(3,4);

//ES6
// Classes function
class MyFun {
	constructor(a, b){
		this.a = a;
		this.b = b;
	}
	getSum(){
		return this.a + this.b
	}
}
var x = new MyFun(3,4);
 
x.getSum();// return 7


// inheritance in javascript
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAge(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

class MaleEmployee extends Employee {
  constructor(name, age, wifeName) {
    super(name, age);
    this.wifeName = wifeName;
  }
  setWifeName(wifeName) {
    this.wifeName = wifeName;
  }
  getWifeName() {
    return this.wifeName;
  }
}

var tai = new Employee("Vũ Thanh Tài", 22);
console.log(typeof tai);
var trinh = new MaleEmployee("Nam", 23, "Trinh");
console.log(trinh.getWifeName());
console.log(trinh.getName());
console.log(trinh.getAge());