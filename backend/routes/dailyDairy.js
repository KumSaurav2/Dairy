const express = require('express')
const router = express.Router();
const {getDairy, createDailyDairy, deleteDailyDairy} = require('../controllers/ContentController')

router.get('/', getDairy);

// router.get('/:id', getDailyDairy);

router.post('/', createDailyDairy);

router.delete('/:id', deleteDailyDairy);

module.exports = router;
