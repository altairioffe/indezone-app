let express = require('express');
let router = express.Router();
let db = require('../db/models/index');
const { getInsights } = require('./routeHelpers/watson-insights')

//Get user insights 
router.post("/", (req, res) => {

console.log("REQUEST HIT BACKEND ROUTE: ", req.body)
let requestedGoalsArray = req.body.body

let goalsArray = [];

// Format request body into API-friendly parameter
requestedGoalsArray.forEach(goalObj => {
  let formattedParam = {
    "content": goalObj.answer,
    "contenttype": "text/plain",
    "language": "en"
  };
  goalsArray.push(formattedParam)
})
console.log("after backend hit")
console.log("FORMATED goalsArray ARRAY: ", goalsArray)
let goalParams= {};
goalParams.contentItems = goalsArray



// Set parameters for API call, using imported sampleData object (from ./sampleData) as content parameter


let params = {
  content: goalParams,
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