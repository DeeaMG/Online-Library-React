const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
    },
    
    password: {
        type: String,
        minlength: 8,
    }
})

const userData = mongoose.model('userData', userSchema);

module.exports = userData;