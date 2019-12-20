/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  // Write code here...
  var result = 1;
  for (var value of arr) {
    result *= value;
  }
  return result;
}