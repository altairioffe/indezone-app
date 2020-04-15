let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

//Get goals
router.get("/", (req, res) => {
  db.goal.findAll().then(goals => {
    res.json(goals);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific goal
router.get("/:id", (req, res) => {
  db.goal.findOne({
    where:{id:req.params.id}}).then(goals => {
    res.json(goals);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;