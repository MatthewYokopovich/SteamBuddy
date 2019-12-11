const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    steamId: String,
    currentName: String,
    imgSrc: String,
    favorites: [],
    comments: [{
        type: Schema.Types.ObjectId, ref: "Comment"    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;