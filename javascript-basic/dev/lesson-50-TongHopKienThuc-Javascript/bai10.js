// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89

function nearestTo100(a, b){
  var maxNear = a;
  if( a < 100 && b < 100){
    if(100 - a < 100 - b){
      maxNear = a;
    }else{
      maxNear = b
    }
  }else {
    if(a - 100 < b - 100){
      maxNear = a;
    }else{
      maxNear = b;
    }
  }

  if( a < 100 && b > 100){
    if(100 - a > b - 100){
      maxNear = b;
    }else{
      maxNear = a
    }
  }

  if( a > 100 && b < 100){
    if(a - 100 < 100 - b){
      maxNear = a;
    }else{
      maxNear = b
    }
  }

  return maxNear;
}

console.log(nearestTo100(10, 18));