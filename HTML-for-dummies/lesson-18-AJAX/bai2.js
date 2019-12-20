/* 
1. Tạo một REST api server sử dụng json-server
2. Đọc documentation của json-server và axios, tìm hiểu các method GET, POST, PUT, PATCH, DELETE
3. Làm các ví dụ sử dụng axios để gửi các request lên json-server để tạo object mới, update 1 object với dữ liệu mới, xoá 1 object
Lưu ý: đây là một bài khó nếu bạn là beginner, tuy nhiên, khi hiểu được bài này bạn sẽ có thể lên 1 level mới (beginner cao cấp).
Hãy dành 1 ngày để đọc, tìm hiểu, thử. Sau 1 ngày nếu bạn không làm được thì có thể hỏi trên Coders.Tokyo Slack hoặc JsLand. 
*/

/* 
- Không dùng localStore để lưu dada vì bị giới hạn dung lượng, các máy không thể chia sẻ data với nhau
- Dùng package "npm static-server" để chạy một webserver
- Dùng package "npm json-server" để start 1 server fake REST API (API Server) trả data về cho Front-end
*/

function render(items){
  var listItem = document.getElementById('list-item');
  var itemList = items.map(item => {
    return `<li class="list-group-item">${item.content}</li>`
  });
  listItem.innerHTML = itemList.join('');
}

var url = 'http://localhost:9081/todo';
axios.get(url)
  .then(function (response) {
    // handle success
    var items = response.data;
    render(items);
    console.log('Get data',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


/* 
// Data được lưu lên server api
axios.post(url, {
    id: 9,
    content: 'Content 9'
  })
  .then(function (response) {
    console.log('Put data ',response.data);
  })
  .catch(function (error) {
    console.log(error);
  }) 
*/

/* 
// Update Data với id tương ứng
axios.put(`${url}/5`, {
  id: 5,
  content: 'Content 5 updated'
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
}); 
*/

axios.delete(`${url}/5`)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });