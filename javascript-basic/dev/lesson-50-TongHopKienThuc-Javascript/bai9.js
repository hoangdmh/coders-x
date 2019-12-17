//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
  console.log(str.substring(0, n));
  console.log(str.substring(n + 1, str.length));
  return str.substring(0, n) + str.substring(n + 1, str.length);

}
console.log(omitCharAt("Hello Quang Dat", 0));