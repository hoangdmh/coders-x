var string = 'hi there, how is it going';

//console.log(arrUp.join(' '));
function convertString(arr){
  var array = arr.split(' ');
  //console.log(array);
  var arrUp = array.map(item => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return arrUp.join(' ');
}

console.log(convertString(string));