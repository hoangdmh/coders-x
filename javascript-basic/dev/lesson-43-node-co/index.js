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