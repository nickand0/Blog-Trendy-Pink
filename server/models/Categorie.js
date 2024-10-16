// models/Categorie.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Categorie', CategorieSchema);
