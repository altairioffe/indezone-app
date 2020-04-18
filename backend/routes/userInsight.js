let express = require('express');
let router = express.Router();
let db = require('../db/models/index');
const { getInsights } = require('./routeHelpers/watson-insights')

//Get user insights 
router.post("/", (req, res) => {

console.log("REQUEST HIT BACKEND ROUTE: ", req.body)
let requestedGoalsArray = req.body

let goals = [];

// Format request body into API-friendly parameter
requestedGoalsArray.forEach(goalObj => {
  let formattedParam = {
    "content": goalObj.answer,
    "contenttype": "text/plain",
    "language": "en"
  };
  goals.push(formattedParam)
})

// Set parameters for API call, using imported sampleData object (from ./sampleData) as content parameter
let params = {
  content: goals,
  content_type: 'text/plain',
  raw_scores: true,
  consumption_preferences: true
};

// Execute API call using formatted user goal parameters, return paragraph response
getInsights(params)
  .then(insight => {
    console.log("Response From backend POST ROUTE: ", insight)
    res.send(insight)
  })
  .catch(err => console.log("ERROR: ", err))
});



module.exports = router;