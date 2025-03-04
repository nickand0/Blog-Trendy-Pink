// models/View.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = new Schema({
    viewAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
});

module.exports = mongoose.model('View', ViewSchema);
