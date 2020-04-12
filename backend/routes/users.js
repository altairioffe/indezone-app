let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  db.user.create({id:5, email:"abc5@gmail.com",handle:'@user5'});
  res.json([{
  	id: 1,
  	username: "samsepi0l TESTINGS"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
 
});

module.exports = router;
