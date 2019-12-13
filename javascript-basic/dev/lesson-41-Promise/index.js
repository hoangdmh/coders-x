/* 
var fs = require("promise-fs");

function onDone(song){
  console.log(song);
}

function onError(err){
  console.log(err);
}

function readFile(path){
  return fs.readFile(path, 'utf8')  
}

readFile('./song1.txt')
  .then(onDone)
  .then(function(){
    return readFile('./song2.txt');
  })
  .then(onDone)
  .then(function(){
    return readFile('./song3.txt');
  })
  .then(onDone)
  .catch(onError) 
*/


var fs = require('fs');

function readFilePromise(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, 'utf8', function(err, data){
      if(err){
        reject(err);
      }else{
        resolve(data);  
      }
    }); 
  });
}
// readFilePromise('./song1.txt')
//   .then(function(song1){
//     console.log(song1);
//     return readFilePromise('./song2.txt')
//   })
//   .then(function(song2){
//     console.log(song2);    
//     return readFilePromise('./song3.txt')
//   })
//   .then(function(song3){
//     console.log(song3);
//   })
//   .catch(function(err){
//     console.log(err);
//   }) 

// Cach 2, chay 3 file tren, ket qua doc file dua vao 1 array
Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')
  ]).then(values => { 
    console.log(values);  
  }).catch(function(err){
    console.log(err);
  });

/* 
let aPromise = new Promise((resolve, reject) => {
  //resolve('Thanh cong');
  
  setTimeout(() => {
    //reject('Khong the ket noi den server');
    resolve('Thanh cong');
  }, 2000);
});

aPromise.then(msg => {
    console.log('Da thuc hien: ' + msg);
  })
  .catch(err => {
    console.log(err);
  }) 
*/


/* function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        reject('Loi cmnr');
      }
      resolve(a + b);
    }, 2000);
  });
}

add(4, 5)
  .then(res => console.log(res))
  .catch(err => console.log(err)) */