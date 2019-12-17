var string = 'xin chào';

function convertString(str){
  var array = str.split(' ');
  //console.log(array);
  var arrUp = array.map(item => {
    console.log(item.slice(1));
    return `${item[0].toUpperCase()}${item.slice(1)}`;
  });
  return arrUp.join(' ');
}

console.log(convertString(string));