// var fs = require('fs');

// function readFilePromise(path){
//   return new Promise(function(resolve, reject){
//     fs.readFile(path, 'utf8', function(err, data){
//       if(err){
//         reject(err);
//       }else{
//         resolve(data);  
//       }
//     }); 
//   });
// }

// async function run(){
//   var song1 = await readFilePromise('./song1.txt');
//   var song2 = await readFilePromise('./song2.txt');
//   //console.log(song1, song2);
//   return [song1, song2]
// }

// run().then(function(values){
//   console.log(values);
// });

function test(){
  var promise = returnTen().then(function(res){
    console.log(res);
  });
  console.log(promise);
}

async function returnTen(){
  return await 10;
}

test();