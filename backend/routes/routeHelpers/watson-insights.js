require("dotenv").config();
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const PersonalityTextSummaries = require('personality-text-summary');
const v3EnglishTextSummaries = new PersonalityTextSummaries({
  locale: 'en',
  version: 'v3'
});

// Run npm install to include all dependencies
// Add credentials to .env file in backend directory


// Establish connection with API
const personalityInsights = new PersonalityInsightsV3({
  version: process.env.PERSONALITY_INSIGHTS_VERSION_DATE,
  authenticator: new IamAuthenticator({
    apikey: process.env.PERSONALITY_INSIGHTS_IAM_APIKEY,
  }),
  url: process.env.PERSONALITY_INSIGHTS_URL,
});

// Convert raw response data in Paragraph-form summary
const getTextSummary = personalityProfile => {
  let textSummary = v3EnglishTextSummaries.getSummary(personalityProfile);
  if (typeof (textSummary) !== 'string') {
    console.log("Could not get summary.");
  } else {
    return textSummary;
  }
};

// Makes API call, then calls getTextSummary on raw response data *** Logs result to console
const getInsights = inputData => {
  return new Promise(resolve => {
    personalityInsights.profile(inputData, function(error, response) {
    if (error) {
       console.log('Error:', error);
    } else {
       resolve(getTextSummary(response.result))
      }
    })
  })
  //.then(x => console.log(getTextSummary(x.result)))
  .catch(err => console.log(err));
}

// Call getInsight (log result to console)
//getInsights(params)

module.exports = { getInsights }