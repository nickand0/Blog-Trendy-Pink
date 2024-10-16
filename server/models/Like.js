// models/Like.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
});

module.exports = mongoose.model('Like', LikeSchema);
