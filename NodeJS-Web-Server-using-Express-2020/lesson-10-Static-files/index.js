const express = require('express');
var bodyParser = require('body-parser');
var userRouter = require("./routers/user.router");
// middleware for cookie
var cookieParser = require('cookie-parser')


//module database
var db = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.get('/', function (req, res) {
  res.render('index');
});

app.use('/users', userRouter);

app.use(express.static('public'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})