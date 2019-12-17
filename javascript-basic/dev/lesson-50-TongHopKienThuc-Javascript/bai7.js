//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
  var p = 0;
  var t = 0;
  if (str.length === 1) {
    return false;
  }
  if (str.length === 0) {
    return true;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'p') {
      p++;
    }
    if (str.charAt(i) === 't') {
      t++;
    }
  }
  if (p === t) {
    return true;
  } else {
    return false;
  }
}

console.log(equal_pt('paatptsts'));