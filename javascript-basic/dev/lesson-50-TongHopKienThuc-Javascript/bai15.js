// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
  var firstStr = str.substring(0, n);
  var lastStr = str.substring(str.length - n, str.length);
  return `${firstStr}${lastStr}`
}
console.log(newString('gsdrw4rfergf45gs',3));