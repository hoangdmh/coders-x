/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/

function isPrimeNumber(x) {
  // viết code ở đây.
  if (x <= 1) {
    return false;
  }
  for (var i = 2; i < Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}