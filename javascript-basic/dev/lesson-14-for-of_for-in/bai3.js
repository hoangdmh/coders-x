/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

function sum(numbers) {
  // Write code here...
  let result = 0;
  for (let value of numbers) {
    result += value;
  }
  return result;
}