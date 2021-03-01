const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prodSchema = new Schema({
    title: {
        type: String,
    },

    author: {
        type: String,
    },

    price: {
        type: Number,
    },

    numProds: {
        type: Number,
    },

    stockStatus: {
        type: String,
    },

    pageType: {
        type: String,
    },
})

const prodData = mongoose.model('prodData', prodSchema);
module.exports = prodData;