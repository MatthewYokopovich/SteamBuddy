const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User"},
    body: String,
    appid: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;