//object literals 

const jerry = {
  name: 'Jerry',
  run: function(){
    console.log(`${this.name} is running`);
  }
}

jerry.run();

// Enhanced object literals
const name = 'Tom';
const cat = {
  name, //name: name
  run(){
    console.log(`${this.name} is running`)
  }
}

cat.run();