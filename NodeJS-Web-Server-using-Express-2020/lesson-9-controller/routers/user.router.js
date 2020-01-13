var express = require('express');

// import module controller
var controller = require("../controller/user.controller");

var router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get)

// POST data
router.post('/create', controller.postCreate)

module.exports = router;