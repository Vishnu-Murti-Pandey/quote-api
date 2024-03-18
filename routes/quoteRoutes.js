const express = require('express');
const router = express.Router();
const cron = require('node-cron');
const asyncHandler = require('express-async-handler');

const { getQuotes, postAllQuotes, getQuotesById } = require('../controller/quoteController');
const quoteCronJob = require('../config/qouteCronJob');


router.route('/').get(getQuotes);

router.route('/').post(postAllQuotes);

router.route('/random').get(getQuotesById);

cron.schedule('*/30 * * * * *', (asyncHandler(async () => {
    const response = await fetch('http://localhost:6001/api/quotes/random');
    const quote = await response.json();
    quoteCronJob(quote);
})));


module.exports = router;
