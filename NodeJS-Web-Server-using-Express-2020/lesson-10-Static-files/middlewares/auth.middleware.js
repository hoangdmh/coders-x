var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
  //console.log(req.cookies);
  if (!req.cookies.userId) {
    res.redirect('/auth/login');
    return;
  }

  var user = db.get('users').find({ id: req.cookies.userId }).value();
  //console.log('User => ', user);
  if (!user) {
    res.redirect('/auth/login');
    return;
  }

  next();

}