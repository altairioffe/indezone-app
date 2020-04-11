let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user.create({id:5, email:"abc5@gmail.com",handle:'@user5'});
 
});

module.exports = router;
