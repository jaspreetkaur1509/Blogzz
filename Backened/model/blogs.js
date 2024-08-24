const mongoose = require("mongoose");
const usermodel = require("../model/usermodel");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
},
{ timestamps: true}
);

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;