// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  var arrays = arr.reduce(function (a, b) {
    //concat method dùng để nối các mảng thành 1 mảng
    return a.concat(b);
  }, []);
  return arrays;
}

