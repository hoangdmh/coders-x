// var readlineSync = require('readline-sync');
// var fs = require('fs');


// var student = {};
// var option = readlineSync.question('What your option? ');
// if(option === "1"){
//   console.log(student);
//   //option = readlineSync.question('What your option? ');
// }else if(option === "2"){
//   var name = readlineSync.question('What your name? ');
//   var gender = readlineSync.question('What your gender? ');
//   var age = readlineSync.question('What your age? ');

//   student.name = name;
//   student.gender = gender;
//   student.age = age;
//   console.log(student);
//   //option = readlineSync.question('What your option? ');
// }else{
//   var text = JSON.parse(student);
//   fs.writeFileSync('./data.json', text);
// }

const fs = require('fs');
var contentFile = fs.readFileSync('./data.json', {encoding: 'utf8'});
var converObj = JSON.parse(contentFile);
converObj.members = [
  {
    name: 'Hoang',
    age: 32
  }
];
console.log(putData);
var putData = JSON.stringify(converObj);
fs.writeFileSync('./data.json', putData);
console.log(putData);