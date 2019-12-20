/**
 * Give a list of students, filter out non-female 
 */

var members = [
  { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
  var arrNew = members.filter(item => {
    if (item.gender != 'female') {
      return item;
    }
  });
  return arrNew;
}
