var mouse = {
  name: "Mickey",
  sayHi: function() {
    console.log("Hi, my name is ", this.name);
  }
};

//mouse.sayHi();
var cat = {
  name: "Tom"
};
//console.log(typeof mouse.sayHi);
//console.log("axc", typeof mouse.sayHi());
var say = mouse.sayHi.bind(cat);
say();
//console.log(say);
