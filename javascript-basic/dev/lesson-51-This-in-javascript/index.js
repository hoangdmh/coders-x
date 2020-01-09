/* 
  - this đơn giản là một biến, biến này trả về object gần nhất chứa nó 

  - this trong các event sẻ trả về element được đính kèm với event đó   

  - this trong arrow function kế thừa từ this của function/method, nơi mà arrow đó dc khai báo, 
    chứ không phải là object gần nó nữa. 

  - this của arrow function sẻ trả về undefined nếu như nớ (arrow function) không được khai báo
    bên trong một function nào.

  => arrow function không được dùng để viết constructure function và method của một object
*/

function Student(){
  return this;
}
console.log(Student());
console.log(new Student());


var myObj = {
  name: function(){ //ES5
    return this;
  },
  age(){ //ES6
    return this;
  }
}
console.log('myObj',myObj.name());


document.getElementById("btn").onclick = function() {
  console.log(this); // *** => <div id="btn">test</div> (html element)
};



//arrow function
const obj = {
  showName : function(){
    console.log(this); //return obj
    const arrowFunc = () => {
      console.log(this);
    }
    arrowFunc();  // arrowFunc khai báo bên trong method showName, 
                  // nên giá trị của this bên trong arrowFunc kế thừa từ this của method showName
                  // do vậy this trả về là obj
  }
}
console.log(obj.showName());


const arrowFunc = () => {
  console.log(this); // this trả về window
}
const obj = {
  showName : function(){
    console.log(this); //return obj
    arrowFunc(); // this trả về window vì hàm arrowFunc không được khai báo bên trong method showName
  }
}
console.log(obj.showName());
