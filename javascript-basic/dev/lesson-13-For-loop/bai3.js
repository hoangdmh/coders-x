/**
 Sử dụng vòng lặp for để tính tổng các số có trong mảng:
*/

function sum(array) {
  // viết code ở đây.
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
