const { Schema } = require('mongoose');

const moviez = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover: String
});

module.exports = moviez;