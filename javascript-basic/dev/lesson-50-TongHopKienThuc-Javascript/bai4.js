// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
  var maxValue = a;
  if(b > maxValue){
    maxValue = b;
  }
  if(c> maxValue){
    maxValue = c;
  }
  return maxValue
}
console.log(findMax(81,9,15));