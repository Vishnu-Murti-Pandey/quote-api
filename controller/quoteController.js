const asyncHandler = require('express-async-handler');
// const fs = require('fs/promises');
const Quote = require('../models/quoteModal');

//@desc Get all Quotes
//@route Get all /api/quotes
//@access private
const getQuotes = asyncHandler(async (req, res) => {
    // Get data form file
    // let fileData;
    // fs.readFile('./quote.json')
    //     .then((data) => {
    //         fileData = JSON.parse(data);
    //         res.status(200).json(fileData);
    //     })
    //     .catch((error) => {
    //         res.status(400);
    //         throw new Error("File not found");
    //     });

    const quotes = await Quote.find();
    res.status(200).json(quotes);
});

//@desc Get contacts for id
//@route GET /api/contacts/:id
//@access private
const getQuotesById = asyncHandler(async (req, res) => {
    const randomId = Math.round(Math.random() * 100);
    const quote = await Quote.findOne({ id: randomId ? randomId : 45 });
    if (!quote) {
        res.status(404);
        throw new Error("Quote not found");
    } else {
        res.status(200).json(quote);
    }
});

//@desc create all data in database
//@route POST /api/quotes
//@access private
const postAllQuotes = asyncHandler(async (req, res) => {
    let quotes = req.body;
    if (!quotes || quotes.length === 0 || quotes.length === undefined) {
        res.status(400);
        throw new Error("Empty data inserted");
    }
    let allQuotes = [];
    for (let i = 0; i < quotes.length; i++) {
        const currQuotes = await Quote.create(quotes[i]);
        allQuotes.push(currQuotes);
    }
    res.status(201).json(allQuotes);
});

module.exports = { getQuotes, postAllQuotes, getQuotesById }