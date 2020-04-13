require("dotenv").config();
const entries = require('./sampleData')
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const PersonalityTextSummaries = require('personality-text-summary');
const v3EnglishTextSummaries = new PersonalityTextSummaries({
  locale: 'en',
  version: 'v3'
});


// Parameters for API call, using imported entries object (from ./sampleData) as content parameter
let params = {
  content: entries,
  content_type: 'text/plain',
  raw_scores: true,
  consumption_preferences: true
};


// Establish connection with API
const personalityInsights = new PersonalityInsightsV3({
  version: process.env.PERSONALITY_INSIGHTS_VERSION_DATE,
  authenticator: new IamAuthenticator({
    apikey: process.env.PERSONALITY_INSIGHTS_IAM_APIKEY,
  }),
  url: process.env.PERSONALITY_INSIGHTS_URL,
});

// Converts raw response data in Paragraph-form summary
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

  const personalityTextSummary = personalityInsights.profile(params, function(error, response) {
    if (error) {
      console.log('Error:', error);
    } else{
    console.log(getTextSummary(response.result))
    }
  })
  .catch(err => console.log(err));
};