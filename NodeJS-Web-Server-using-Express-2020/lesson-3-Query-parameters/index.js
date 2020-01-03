const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

const users = [
  { id: 1, name: 'Thinh' },
  { id: 2, name: 'Hung' },
  { id: 3, name: 'Duc Huy' },
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

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})