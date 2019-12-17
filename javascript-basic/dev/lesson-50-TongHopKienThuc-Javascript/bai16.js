
/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
  // write code here.
  // var result = arr.reduce((resultArray, item, index) => { 
  //   const chunkIndex = Math.floor(index/size)
  
  //   if(!resultArray[chunkIndex]) {
  //     resultArray[chunkIndex] = [] // start a new chunk
  //   }
  
  //   resultArray[chunkIndex].push(item)
  
  //   return resultArray
  // }, [])
  // return result;  
  var results = [];
  while (arr.length) {
    //console.log(arr.splice(0, size));
    results.push(arr.splice(0, size));
  }
  return results;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));