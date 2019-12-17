/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(a, b) {
  if(a> 0 && b > 0 || a < 0 && b< 0) {
    return false
  }else{
    return true
  }
}
console.log(checkInt(-2, -6));