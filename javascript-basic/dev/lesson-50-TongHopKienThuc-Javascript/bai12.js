/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
  if(n < 13){
    return Math.abs(n - 13); 
  }else {
    return Math.abs(n - 13) * 2; 
  }
}
console.log(difference(3));