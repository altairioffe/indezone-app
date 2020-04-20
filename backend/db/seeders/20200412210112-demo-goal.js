'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('goals', [{
      id:1,
      question: 'What is your main goal for today?',
      suggestion: 'Describe why this goal matters to you',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      question: 'If one word could describe the person I want to be today...',
      suggestion: 'Pick a word, and go in detail about why that matters to you',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      question: 'Who can I reach out to today for mentorship? With what?',
      suggestion: 'Stand on the shoulders of giants (or just friends/colleagues). How can you leverage them to achieve more?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      question: 'One thing that I can get excited about for today is...',
      suggestion: 'What are you looking forward to, and why is that important to you?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:5,
      question: 'Someone who needs me on my A-game today is...',
      suggestion: 'Who might be counting on you to be at your best? What can you do to support them?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      question: 'A situation that might stress me out or trip me up today could be...',
      suggestion: 'What would be the best way to handle it?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      question: 'What can I do to make today more productive?',
      suggestion: 'What are some things that might be holding you back?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,
      question: 'The big projects that I want to take on, even if I can\'t act toward them today, are...',
      suggestion: 'Think BIG! What might help you along the way?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      question: 'What does a great day look like to you?',
      suggestion: 'Spending time outside, a spontaneous adventure... describe what it means to you',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      question: 'What can I can do differently to feel healthier today?',
      suggestion: 'Try yoga, avoid sugar, take a nap, get a massage...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:11,
      question: 'What new habit would make me feel better every day?',
      suggestion: 'Going to bed earlier, setting time aside to read a book...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:12,
      question: 'Looking back on yesterday, what can I do differently to get the most out of today?',
      suggestion: 'What are some lessons you can apply?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:13,
      question: 'How would you want someone to describe you after first meeting you?',
      suggestion: 'What kind of impression to do you want to make? How can you make it?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:14,
      question: 'What are some positive changes you can make today?',
      suggestion: 'List some things that within your control. What would be different if you make those changes?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:15,
      question: 'If you had one extra hour today, what would you spend it on?',
      suggestion: 'Is everything else in your day more important than doing this?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
