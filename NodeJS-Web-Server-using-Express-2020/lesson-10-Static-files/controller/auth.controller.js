//import module database
var db = require('../db');

module.exports.login = function (req, res) {
  res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var user = db.get('users').find({ email: email }).value();
  //console.log('user => ', user);

  if(!user){
    res.render('auth/login', {
      errors: [
        'User does not exist.'
      ],
      value: req.body
    });
    return
  }

  if(user.password !== password){
    res.render('auth/login', {
      errors: [
        'Wrong password.'
      ],
      value: req.body
    });
    return;
  }
  // create a cookie after login
  res.cookie('userId', user.id);
  res.redirect('/users');
}