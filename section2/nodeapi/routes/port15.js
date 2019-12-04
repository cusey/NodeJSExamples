var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const postController = require('../controllers/post15');

const router = express.Router();

router.get('/', postController.getPosts);

module.exports = router;
