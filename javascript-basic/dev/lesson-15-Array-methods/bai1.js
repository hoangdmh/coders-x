/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  var posiDel = arr.length - n;
  arr.splice(posiDel,n);
  return arr;
}