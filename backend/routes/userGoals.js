let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

//Get user goals
router.get("/", (req, res) => {
  db.user_goal.findAll().then(userGoals => {
    res.json(userGoals);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific user goal
router.get("/:id", (req, res) => {
  db.user_goal.findOne({
    where:{user_id:req.params.id}}).then(userGoals => {
    res.json(userGoals);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Post specific goal
/* router.post("/", (req, res) => {
  db.user_goal.create({
    answer: req.body.answer,
    user_id: req.body.user_id,
    goal_id: req.body.goal_id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
    .then(userGoal => {
      res.json(userGoal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
}); */

module.exports = router;