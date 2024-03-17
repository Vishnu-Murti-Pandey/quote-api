const express = require('express');
const router = express.Router();

const { getQuotes, postAllQuotes, getQuotesById } = require('../controller/quoteController');


router.route('/').get(getQuotes);

router.route('/').post(postAllQuotes);

router.route('/random').get(getQuotesById);


module.exports = router;