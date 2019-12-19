/* 
var content = [
  'content p1',
  'content p2',
  'content p3',
  'content p4',
  'content p5'
];
var addBtn = document.getElementById('add-item');
//Goi function
//C1
//addBtn.onclick = addItem;
//C2
addBtn.addEventListener('click', addItem);
// trigger an event (click event is a trigger)
// event listener

addBtn.addEventListener('click', function(){
  console.log('Btn is click');
});//anonymous function

function addItem(){
  // get value input field
  var input = document.getElementById('new-item');
  var newItem = input.value;
  // add content aray
  content.push(newItem);
  // re-render
  render();
  //clear input
  input.value = '';
}

function render() {
  var item =  document.getElementById('item');
  var list = content.map(item => {
    return '<li>' + item + '</li>'
  });
  item.innerHTML = list.join('');  
}
render(); 

*/

var users = [
	{ 
  	name: 'Thinh', 
    phone: '070123123'
  },
  {
  	name: 'Hung',
    phone: '080456456'
  },
  {
  	name: 'Hoang',
    phone: '090123123'
  }
];
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');

function render(users) {
	var content = users.map(function(user) {
  	return '<li>' + user.name + ' - ' + user.phone + '</li>';
  });
  userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
	// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý: 
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, 
  //   trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
	var value = searchInput.value;
  console.log(value);
  var result = users.filter( item => {
    if(item.phone === value) {
      return item;
    }
  });
  console.log(result[0].name);

  var search = document.getElementById('search');
  search.innerHTML = result[0].name;

});