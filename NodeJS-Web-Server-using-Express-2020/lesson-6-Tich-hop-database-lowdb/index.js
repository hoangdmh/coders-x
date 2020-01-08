const express = require('express')
var bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: []})
  .write()

const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// const users = [
//   { id: 1, name: 'Thinh' },
//   { id: 2, name: 'Hung' },
//   { id: 3, name: 'Duc Dũng' },
// ];

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/users', function (request, response) {
  response.render('user/index', {
    users: db.get('users').value()
  });
  console.log('Users => ',db.get('users').value());
});

app.get('/users/search', function (request, response) {
  var q = request.query.q;
  var users = db.get('users').value();
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
  db.get('users').push(request.body).write();
  response.redirect('/users')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})