const mongoose = require('mongoose');
const mongo = require('../mongo');

const musicTokensSchema = mongoose.Schema({
    userId: String,
    token: String,
    prefix: String
})

module.exports = mongoose.model("musicTokens", musicTokensSchema)
