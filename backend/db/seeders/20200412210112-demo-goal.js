'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('goals', [{
      id:1,
      question: 'What is your goal today?',
      suggestion: 'Do some productive task',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      question: 'What do you want to do to be healthy?',
      suggestion: 'Do some exercise today',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      question: 'What do you want to do to improve your work?',
      suggestion: 'Learn something new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      question: 'What did you want to do be happy?',
      suggestion: 'Help yourself or help someone',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:5,
      question: 'Someone who needs me on my A-game today is...',
      suggestion: 'Think of a loved one',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      question: 'A situation that might stress me out or trip me up today could be...',
      suggestion: 'What tripped you up in the past?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      question: 'If I was a high performance coach looking at my life from a high level, I would tell myself to remember that ... ... and the way that my best self would deal with that is...',
      suggestion: 'Put yourself in a personal coach\'s shoes',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,
      question: 'The big progects I have to keep in mind that I want to take on, even if I can\'t act toward them today, are...',
      suggestion: 'Think BIG, you can do it!',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      question: 'I would know that today was a great success if at the end of the day I did, or felt this...',
      suggestion: 'What did previous successful days look like?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      question: 'A moment that I really appreciated today was...',
      suggestion: 'Try listing your accomplishments for today',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:11,
      question: 'A situation or task I handled well today was...',
      suggestion: 'What problems did you face... ...and how did you overcome them?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:12,
      question: 'Something I realized or learned today was...',
      suggestion: 'Keep track of lessons learned',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:13,
      question: 'I could have made today even better if I...',
      suggestion: 'Think of the perfect day',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:14,
      question: 'Something that could have helped me feel more connected to others today would have been...',
      suggestion: 'Who do you want to connect to more?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:15,
      question: 'If I was my own high performannc coach, I would tell myself this statement about today...',
      suggestion: 'Put yourself in a personal coach\'s shoes',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
