const express = require('express');
const router = express.Router();
const ChowNowDatabase = require('../services/ChowNowDatabase');

/* GET ChowNow */
router.get('/', async function(req, res, next) {
  try {
    res.json(await ChowNowDatabase.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while `, err.message);
    next(err);
  }
});

module.exports = router;