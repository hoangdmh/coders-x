//import module database
var db = require('../db');

module.exports.index = function (req, res) {
  var page = parseInt(req.query.page) || 1;
  var perPage = 6;
  var start = (page - 1) * perPage;
  var end = page * perPage;
  console.log('page => ', page);
  res.render('products/index', {
    products: db.get('products').value().slice(start, end)
  });
};