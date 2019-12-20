// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  var arrNew = arr.filter(function (item) {
    return item >= 5;
  });
  return arrNew;
}
