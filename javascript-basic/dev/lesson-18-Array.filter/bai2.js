// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  var arrNew = arr.filter(item => {
    return item % 2 === 0;
  });
  return arrNew;
}