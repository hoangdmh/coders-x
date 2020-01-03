const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/users', function (request, response) {
  response.render('user/index', {
    users : [
      {id: 1, name: 'Thinh'},
      {id: 2, name: 'Hung'},
    ]
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})


/**
 * 1. Bạn hiểu thế nào là Single page application (SPA)
 * - Tương tác với server qua ajax request, 
    client gửi 1 request lên server sau do server tra ve client file html tỉnh và một loạt đoạn code js 
    khi đoạn code js chạy thông qua trình duyệt và tải dữ liệu từ server thông qua ajax sau đó render 
    vào thẻ div của file html 
  - không reload lại page
  - Tương tác với data thông qua các JSON API
  
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Pug là gì?
 *  là một template engine
 * 2. Công dụng, chức năng
 *  cú pháp để viết mã html
 * 3. Vì sao nên dùng Pug
 *  combine sang html nhanh chống đoạn mã không lặp lại
 */