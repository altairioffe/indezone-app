let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

//Get biodatas
router.get("/", (req, res) => {
  db.biodata.findAll().then(biodatas => {
    res.json(biodatas);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific biodata
router.get("/:id", (req, res) => {
  db.biodata.findOne({
    where:{user_id:req.params.id}}).then(biodata => {
    res.json(biodata);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


//Create  biodata
router.post("/", (req, res) => {
  console.log(db.biodata);
  db.biodata.create({
    name:req.body.name, text:req.body.text,
    user_id: req.body.user_id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
    .then(biodata => {
      res.json(biodata);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
