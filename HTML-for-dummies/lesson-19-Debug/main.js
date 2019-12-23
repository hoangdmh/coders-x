// var keyListItem = 'list-item';
// var dataString = localStorage.getItem(keyListItem);
// var contents;
// if(dataString) {
//   contents = JSON.parse(dataString);
// }else {
//   contents = [];
// }

// var addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', handleClickAddItem);

// function handleClickAddItem(){
//   var inputValue = document.getElementById('input-value').value;
//   console.log(inputValue);
//   contents.push(inputValue);
//   render();
//   inputValue.value = '';
//   localStorage.setItem(keyListItem, JSON.stringify(contents));
// }

// function render(){
//   var listItem = document.getElementById('list-item');
//   var itemList = contents.map(item => {
//     return `<li class="list-group-item">${item}</li>`
//   });
//   listItem.innerHTML = itemList.join('');
// }
// render();




var name = function () {
  console.log('My name is...');
};

function sayHello (name) {
  console.log('Hello word!');
}

sayHello(name);