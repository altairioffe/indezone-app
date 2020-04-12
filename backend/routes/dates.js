let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
  {
    "id": 1,
    "name": "Monday",
    "appointments": [
      1,
      2,
      3,
      4,
      5
    ],
    "interviewers": [
      3,
      4,
      7,
      8,
      10
    ],
    "spots": 4
  },
  {
    "id": 2,
    "name": "Tuesday",
    "appointments": [
      6,
      7,
      8,
      9,
      10
    ],
    "interviewers": [
      1,
      2,
      6,
      9,
      10
    ],
    "spots": 2
  },
  {
    "id": 3,
    "name": "Wednesday",
    "appointments": [
      11,
      12,
      13,
      14,
      15
    ],
    "interviewers": [
      2,
      4,
      6,
      8,
      9
    ],
    "spots": 3
  },
  {
    "id": 4,
    "name": "Thursday",
    "appointments": [
      16,
      17,
      18,
      19,
      20
    ],
    "interviewers": [
      2,
      5,
      6,
      7,
      8
    ],
    "spots": 5
  },
  {
    "id": 5,
    "name": "Friday",
    "appointments": [
      21,
      22,
      23,
      24,
      25
    ],
    "interviewers": [
      1,
      3,
      4,
      8,
      9
    ],
    "spots": 4
  }
]);
});

module.exports = router;
