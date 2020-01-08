const express = require('express')
var bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
// module tạo id tự động
const shortid = require('shortid');

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: [] })
  .write()

const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/users', function (req, res) {
  res.render('user/index', {
    users: db.get('users').value()
  });
  //console.log('Users => ',db.get('users').value());
});

app.get('/users/search', function (req, res) {
  var q = req.query.q;
  var users = db.get('users').value();
  var mathFilter = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('user/index', {
    users: mathFilter
  });
});


app.get('/users/create', function (req, res) {
  res.render('user/create');
});

app.get('/users/:id', function (req, res) {
  console.log(req.params.id);
  var id = req.params.id;
  var user = db.get('users').find({ id: id }).value();
  console.log(user);
  res.render('user/view', {
    user: user
  });
  console.log(user.name);
})

// POST data
app.post('/users/create', function (req, res) {
  req.body.id = shortid.generate();
  console.log(req.body);
  db.get('users').push(req.body).write();
  res.redirect('/users')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})