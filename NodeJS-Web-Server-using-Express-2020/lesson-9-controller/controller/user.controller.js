//import module database
var db = require('../db');
// module tạo id tự động
const shortid = require('shortid');

module.exports.index = function (req, res) {
  res.render('user/index', {
    users: db.get('users').value()
  });
}

module.exports.search = function (req, res) {
  var q = req.query.q;
  var users = db.get('users').value();
  var mathFilter = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('user/index', {
    users: mathFilter
  });
}

module.exports.create = function (req, res) {
  res.render('user/create');
}

module.exports.get = function (req, res) {
  console.log(req.params.id);
  var id = req.params.id;
  var user = db.get('users').find({ id: id }).value();
  console.log(user);
  res.render('user/view', {
    user: user
  });
  console.log(user.name);
}

module.exports.postCreate = function (req, res) {
  req.body.id = shortid.generate();
  console.log(req.body);
  db.get('users').push(req.body).write();
  res.redirect('/users')
}