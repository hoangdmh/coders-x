// 1. Sử dụng axios để tải nội dung dưới dạng json từ đường link sau về và hiển ra trình duyệt sử dụng document.write
// Link: https://randomuser.me/api/
// Có thể tìm link tới thư viện axios tại: https://cdnjs.com/
// Để thêm thư viện vào jsfiddle, nhấn vào Resources ở cột trái, nhập link vào rồi ấn (+)
// 2. Làm tương tự, thay vì dùng axios, hãy dùng fetch (google để biết cách dùng)

var url = 'https://randomuser.me/api/';
/* 
// user axios
axios.get(url)
  .then(function (response) {
    // handle success
    var data = response.data.results[0].name.first;
    document.write(data);
    console.log(response.data.results[0]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }) 

*/
  // User fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
