let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(
    {"1":{"id":1,"time":"12pm","interview":{"student":"a","interviewer":3}},"2":{"id":2,"time":"1pm","interview":null},"3":{"id":3,"time":"2pm","interview":null},"4":{"id":4,"time":"3pm","interview":null},"5":{"id":5,"time":"4pm","interview":null},"6":{"id":6,"time":"12pm","interview":{"student":"Jamal Jordan","interviewer":2}},"7":{"id":7,"time":"1pm","interview":{"student":"Leopold Silvers","interviewer":1}},"8":{"id":8,"time":"2pm","interview":{"student":"Liam Martinez","interviewer":6}},"9":{"id":9,"time":"3pm","interview":null},"10":{"id":10,"time":"4pm","interview":null},"11":{"id":11,"time":"12pm","interview":{"student":"Lydia Miller-Jones","interviewer":8}},"12":{"id":12,"time":"1pm","interview":{"student":"Maria Boucher","interviewer":9}},"13":{"id":13,"time":"2pm","interview":null},"14":{"id":14,"time":"3pm","interview":null},"15":{"id":15,"time":"4pm","interview":null},"16":{"id":16,"time":"12pm","interview":null},"17":{"id":17,"time":"1pm","interview":null},"18":{"id":18,"time":"2pm","interview":null},"19":{"id":19,"time":"3pm","interview":null},"20":{"id":20,"time":"4pm","interview":null},"21":{"id":21,"time":"12pm","interview":null},"22":{"id":22,"time":"1pm","interview":null},"23":{"id":23,"time":"2pm","interview":null},"24":{"id":24,"time":"3pm","interview":null},"25":{"id":25,"time":"4pm","interview":{"student":"Yuko Smith","interviewer":3}}}
  );
});

module.exports = router;
