var express = require('express')
// module tạo id tự động
const shortid = require('shortid');

//database
var db = require('../db')

var router = express.Router()

router.get('/', function (req, res) {
  res.render('user/index', {
    users: db.get('users').value()
  });
  //console.log('Users => ',db.get('users').value());
});

router.get('/search', function (req, res) {
  var q = req.query.q;
  var users = db.get('users').value();
  var mathFilter = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('user/index', {
    users: mathFilter
  });
});


router.get('/create', function (req, res) {
  res.render('user/create');
});

router.get('/:id', function (req, res) {
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
router.post('/create', function (req, res) {
  req.body.id = shortid.generate();
  console.log(req.body);
  db.get('users').push(req.body).write();
  res.redirect('/users')
})

module.exports = router;