const express = require('express');
const router = express.Router();
const View = require('../models/View');  // Modèle de Vue
const Post = require('../models/Post');  // Modèle de Post

// GET /api/views
// Récupérer toutes les vues
router.get('/', async (req, res) => {
    try {
        const views = await View.find().populate('user', 'name email').populate('post', 'title');
        res.json(views);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des vues', error: err });
    }
});

// POST /api/views
// Ajouter une vue pour un post spécifique
router.post('/', async (req, res) => {
    const { user, post } = req.body;

    // Valider les champs requis
    if (!user || !post) {
        return res.status(400).json({ message: 'L\'utilisateur et le post sont requis pour enregistrer une vue' });
    }

    const newView = new View({
        user,
        post
    });

    try {
        const savedView = await newView.save();
        res.status(201).json(savedView);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la vue', error: err });
    }
});

module.exports = router;
