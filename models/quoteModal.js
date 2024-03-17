const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, "please add the id"]
    },
    quote: {
        type: String,
        required: [true, "please add the quote"]
    },
    author: {
        type: String,
        required: [true, "please add the author"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Quote", quoteSchema);