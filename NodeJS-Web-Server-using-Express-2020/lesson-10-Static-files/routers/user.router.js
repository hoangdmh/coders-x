var express = require('express');
var multer  = require('multer');

// import module controller
var controller = require("../controller/user.controller");

//import module validate
var validate = require('../validate/user.validate')

var upload = multer({ dest: './public/uploads/' })

var router = express.Router();

router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
  res.cookie('user-id',123);
  res.send('hello')
})

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get)

// POST data
router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate)

module.exports = router;