const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const users = [
  { id: 1, name: 'Thinh' },
  { id: 2, name: 'Hung' },
  { id: 3, name: 'Duc Dũng' },
];

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/users', function (request, response) {
  response.render('user/index', {
    users: users
  });
});

app.get('/users/search', function (request, response) {
  var q = request.query.q;

  var mathFilter = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  response.render('user/index', {
    users: mathFilter
  });
});

// POST data
app.get('/users/create', function (request, response) {
  response.render('user/create');
});

app.post('/users/create', function (request, response) {
  console.log(request.body);
  users.push(request.body);
  response.redirect('/users')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})