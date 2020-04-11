let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user.create({id:4, email:"abc3@gmail.com",handle:'@user3',createdAt:Date.now,updatedAt:Date.now()});
  
});

module.exports = router;
