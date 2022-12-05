const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/ChowNowDatabase');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while `, err.message);
    next(err);
  }
});

module.exports = router;