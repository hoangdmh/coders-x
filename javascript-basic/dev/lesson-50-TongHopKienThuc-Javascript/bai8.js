// viết hàm first trả về giá trị đầu tiên của mảng, 
// nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
// (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n=null) {
  if(n < 0) {
    return array=[];
  }
  if(n === null) {
    return array.splice(0,1);
  }
  return array.splice(0,n);
}

var array = [7, 9, 0, -2];
//var n = -6;
console.log(first(array));