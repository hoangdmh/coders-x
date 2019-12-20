/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  var answer = arr.reduce((obj, num) => {
    
    obj[num] = (++obj[num] || 1);
    console.log(obj[num]);
    return obj;
  }, {});
  return answer;
}
countOccurrences(['a', 'b', 'c', 'b', 'a']);