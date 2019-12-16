/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  var fromDate = new Date(fromDate);
  var toDate = new Date(toDate);
  return toDate.getDate() - fromDate.getDate();
}

