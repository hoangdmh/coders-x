var students = [
  {name: 'Minh', age: 20},
  {name: 'Hoang', age: 32},
  {name: 'Nam', age: 20},
  {name: 'Thinh', age: 21},
  {name: 'Tuan', age: 20}
];

var filerSelect = document.getElementById('filter-select');
filerSelect.addEventListener('change', handleChangeSelect);

function handleChangeSelect(){
  var valueOption = parseInt(filerSelect.value);
  //console.log(typeof valueOption);
  if(valueOption === 00 ){
    return render(students);
  }

  var filterStudent = students.filter( value => {
    return value.age === valueOption;
  })
  //console.log(filterStudent);
  render(filterStudent);
}

function render(students){
  var studentTable = document.getElementById('student-table');
  var id = 0;
  var studentList = students.map( student => {
    return `<tr>
        <th scope="row">${++id}</th>
        <td>${student.name}</td>
        <td>${student.age}</td>
      </tr>`
  });
  studentTable.innerHTML = studentList.join('');
}
render(students);