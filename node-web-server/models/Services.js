const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: String,
    description: String,
    prices: String
});

module.exports = mongoose.model('Services', ServiceSchema);