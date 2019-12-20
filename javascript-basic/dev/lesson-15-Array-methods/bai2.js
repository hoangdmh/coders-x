/** 
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. 
*/

function first(arr, n) {
  var posiDel = arr.length;
  arr.splice(n,posiDel);
  return arr;
}

// console.log(first([1, 2, 3], 2)); // expect [1, 2]