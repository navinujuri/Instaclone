let mongoose = require("mongoose");
let schema = mongoose.Schema
let ObjectId = schema.ObjectId

let postSchema = new schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    postImage: { type: String, required: true },
    likes: { type: String },
    date: { type: String }

}, { timestamps: true })

let post = mongoose.model('post', postSchema)

module.exports = post