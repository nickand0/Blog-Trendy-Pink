const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjetSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    technologies:[String],
    image:{ type: String },
    link:{ type: String },
    author:{ type: String },
});

const Projet = mongoose.model('Projet', ProjetSchema);
module.exports = Projet;
