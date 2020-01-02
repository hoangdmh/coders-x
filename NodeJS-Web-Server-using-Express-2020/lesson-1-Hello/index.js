const express = require('express')
const app = express()
const port = 3000

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})

/* 

javascript là một ngôn ngữ lập trình

- nodejs là một flatform cho js chạy trên server

- express là một frameword của nodejs

- express la một frameword của nodejs, la mot node module, ngon ngu la javascript, 

nen tang de chay la nodejs, la mo dynamic webserver

- Static server: server tra ve cho client theo huong client yeu cau gi thi tra ve cai do, 
neu ko tim thay thi tra ve loi 404

- Dynamic server: tuong tac voi database, server nhan tham so tu client

1. Liệt kê các bước để setup 1 Project sử dụng Express
B1: npm init
B2: npm install express --save
B3: node index.js

*/