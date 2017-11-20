const { Schema } = require('mongoose');

const todos = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = todos;