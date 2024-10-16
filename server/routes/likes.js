const express = require('express');
const router = express.Router();
const Like = require('../models/Like');  // Modèle de Like
const Post = require('../models/Post');  // Modèle de Post

// GET /api/likes
// Récupérer tous les likes
router.get('/', async (req, res) => {
    try {
        const likes = await Like.find().populate('user', 'name email').populate('post', 'title');
        res.json(likes);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des likes', error: err });
    }
});

// GET /api/likes/:id
// Récupérer un like spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const like = await Like.findById(req.params.id).populate('user', 'name email').populate('post', 'title');
        if (!like) {
            return res.status(404).json({ message: 'Like non trouvé' });
        }
        res.json(like);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du like', error: err });
    }
});

// POST /api/likes
// Ajouter un like à un post
router.post('/', async (req, res) => {
    const { user, post } = req.body;

    // Valider les champs requis
    if (!user || !post) {
        return res.status(400).json({ message: 'L\'utilisateur et le post sont requis' });
    }

    // Vérifier si ce like existe déjà pour ce post par cet utilisateur
    const existingLike = await Like.findOne({ user, post });
    if (existingLike) {
        return res.status(400).json({ message: 'Vous avez déjà liké ce post' });
    }

    const newLike = new Like({
        user,
        post
    });

    try {
        const savedLike = await newLike.save();
        res.status(201).json(savedLike);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du like', error: err });
    }
});

// DELETE /api/likes/:id
// Supprimer un like par ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedLike = await Like.findByIdAndDelete(req.params.id);
        if (!deletedLike) {
            return res.status(404).json({ message: 'Like non trouvé' });
        }
        res.json({ message: 'Like supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du like', error: err });
    }
});

module.exports = router;
