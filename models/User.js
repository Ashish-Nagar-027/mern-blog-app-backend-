const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide user name']
    },
    email: {
        type: String,
        required: [true, 'Please provide user name']
    },
    password: {
        type: String,
        required: [true, 'Please provide user name']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)