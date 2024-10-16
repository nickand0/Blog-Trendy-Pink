const express = require('express');
const router = express.Router();
const Tag = require('../models/Tag');  // Modèle de Tag
const Post = require('../models/Post');  // Modèle de Post
const View = require('../models/View');  // Modèle de Vue

// GET /api/tags
// Récupérer tous les tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des tags', error: err });
    }
});

// GET /api/tags/:id
// Récupérer un tag spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        if (!tag) {
            return res.status(404).json({ message: 'Tag non trouvé' });
        }
        res.json(tag);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du tag', error: err });
    }
});

// POST /api/tags
// Créer un nouveau tag
router.post('/', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Le nom du tag est requis' });
    }

    const newTag = new Tag({
        name
    });

    try {
        const savedTag = await newTag.save();
        res.status(201).json(savedTag);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création du tag', error: err });
    }
});

// DELETE /api/tags/:id
// Supprimer un tag par ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTag = await Tag.findByIdAndDelete(req.params.id);
        if (!deletedTag) {
            return res.status(404).json({ message: 'Tag non trouvé' });
        }
        res.json({ message: 'Tag supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du tag', error: err });
    }
});

// GET /api/tags/:id/top-posts
// Récupérer les posts les plus regardés associés à un tag spécifique
router.get('/:id/top-posts', async (req, res) => {
    try {
        const tagId = req.params.id;

        // Trouver tous les posts associés à ce tag
        const postsWithTag = await Post.find({ tags: tagId });

        // Trouver le nombre de vues pour chaque post
        const postsWithViews = await Promise.all(
            postsWithTag.map(async post => {
                const viewsCount = await View.countDocuments({ post: post._id });
                return {
                    ...post._doc, // On accède aux champs du post
                    viewsCount
                };
            })
        );

        // Trier les posts par le nombre de vues, du plus élevé au moins élevé
        postsWithViews.sort((a, b) => b.viewsCount - a.viewsCount);

        // Retourner les posts triés
        res.json(postsWithViews);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts populaires pour ce tag', error: err });
    }
});

module.exports = router;
