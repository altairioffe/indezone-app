'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('user_goals', [
      {
      id:1,
      
      goal_id:1,
      user_id:7,
      answer:"My goal is to finish the edits on my manuscripts and submit them to journals. Also, to make an outline for my general introduction",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      
      goal_id:2,
      user_id:7,
      answer:"Deliberate because I would like to go through each of my edits one at a time without half-assing it, saying that I will go back and then moving on to another edit and doing a crappy job on that one too",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
     
      goal_id:3,
      user_id:7,
      answer:"My research supervisor to better understand what the edits mean and how to approach them in the most efficient way. Then I won't waste time trying to read between the lines to figure out what the edits mean.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,

      goal_id:4,
      user_id:7,
      answer:"That it is sunny out and I can go for a long mindful walk. It helps with clearing my mind and make me feel content. It also makes appreciate the small things like interesting trees or budding plants and it makes me smile",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
     {
      id:5,

      goal_id:5,
      user_id:7,
      answer:"Myself. I have been putting these edits off and half-assing when I do try to do it. I know that I can do it, I just need to sit down and do it. They are not that bad and there is not even that many",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,

      goal_id:6,
      user_id:7,
      answer:"My anxiety about the edits will stop me from starting it. It will cause me to procrasinate and not do anything productive at all. I will make excuses and feel gross. I think if I work on it right away in the morning and set a short timer to so it doesn't feel like such a huge task. When I start working I can usually get into it",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,

      goal_id:1,
      user_id:7,
      answer:"Start my day with some meditation and deep breathing to help my anxiety. Set up my workspace so I don't have to keep getting up to get things. Setting time periods for working",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,

      goal_id:2,
      user_id:7,
      answer:"Completing my internship applications and interviews so that I can finish up my stupid PHD and learn how to be an autism expert",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,

      goal_id:1,
      user_id:7,
      answer:"being productive. Like not just with work but doing a bunch of things that feel good instead of just hanging on my phone doing nothing or feeling anxious about doing things. Like going for a walk, painting, meditation, connecting with someone, exercise, tidying up etc...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,

      goal_id:2,
      user_id:7,
      answer:"when I am feeling anxious doing some sort of activity that I can immerse myself in totally. Anxiety just makes me feel gross and sick and I don't accomplish anything when I feel this way",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:11,

      goal_id:1,
      user_id:7,
      answer:"Doing one non TV activity like painting, reading, calling someone, exercising. Watching TV is okay but sometimes I do it all night. For some reason it makes me feeling anxious to do these and I just want to be passive.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:12,

      goal_id:2,
      user_id:7,
      answer:"I think not being so mean to myself when I am not meeting the goals I have set for myself. I think it just means maybe my goals need to be readjusted or broken into smaller steps. There is no point in picking undrealistic goals and then feeling bad when you don't meet it. It certainly doesn't make me want to work the next day",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:13,

      goal_id:13,
      user_id:7,
      answer:"Calm and confident. I feel like I come off not professional maybe because I am too friendly. I don't really know what I need to change but I just want people to take me serisouly.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:14,

      goal_id:14,
      user_id:7,
      answer:"I can change the thoughts it my head or how my body feels with breathing and mindfulness. I can't change the things that are happening or my due dates. I think that I wouldn't be so distracted and I could get things done more quickly",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:15,

      goal_id:15,
      user_id:7,
      answer:"watch TV probably...LOL. Just kidding. I would exercise or call somebody that I love. Those things always recharge my battery. It is hard because I feel so tired when I get home especially when I've had a long clinical day of listening to people talk about their challenges",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:16,

      goal_id:1,
      user_id:6,
      answer:"Learn to play Smoke on the Water on air guitar",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:17,

      goal_id:1,
      user_id:8,
      answer:"I want to become president!",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:18,

      goal_id:2,
      user_id:8,
      answer:"I want to be Keanu-Reeves",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:19,

      goal_id:1,
      user_id:8,
      answer:"Be healthy",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:20,

      goal_id:2,
      user_id:9,
      answer:"I want to be a great leader, because it's important for me to learn how to manage teams better and have a bigger",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:21,
      
      goal_id:1,
      user_id:9,
      answer:"I want to use this app every day",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
