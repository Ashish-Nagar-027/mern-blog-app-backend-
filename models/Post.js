const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
    unique: true
},
description: {
    type: String,
    required: true
},

username: {
    type: String,
    required: [true, 'username is required']
},
userId: {
    type: String,
    required: [true, 'username is required']
},
},{
    timestamps: true
}
)

module.exports = mongoose.model("Post", postSchema)