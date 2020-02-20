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