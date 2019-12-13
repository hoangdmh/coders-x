var readlineSync = require('readline-sync');
var arrpet = [];
var pet = {};
var name = readlineSync.question('What your pet name? ');
var gender = readlineSync.question('What gender Male/Female? ');
var weight = readlineSync.question('weight? ');

pet.name = name;
pet.gender = gender;
pet.weight = weight;

console.log(pet);
console.log(arrpet.push(pet));