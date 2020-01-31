var express = require('express');

// import module controller
var controller = require("../controller/product.controller");

var router = express.Router();

router.get('/', controller.index);

module.exports = router;