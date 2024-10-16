const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');  // Modèle Commentaire
const Post = require('../models/Post');  // Modèle Post

// GET /api/comments
// Récupérer tous les commentaires
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('user', 'name email').populate('post', 'title');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error: err });
    }
});

// GET /api/comments/:id
// Récupérer un commentaire spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('user', 'name email').populate('post', 'title');
        if (!comment) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }
        res.json(comment);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du commentaire', error: err });
    }
});

// POST /api/comments
// Créer un nouveau commentaire
router.post('/', async (req, res) => {
    const { content, user, post } = req.body;

    // Validation basique
    if (!content || !user || !post) {
        return res.status(400).json({ message: 'Le contenu, l\'utilisateur et le post sont requis' });
    }

    const newComment = new Comment({
        content,
        user,
        post
    });

    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création du commentaire', error: err });
    }
});

// DELETE /api/comments/:id
// Supprimer un commentaire par ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }
        res.json({ message: 'Commentaire supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du commentaire', error: err });
    }
});

// GET /api/posts/:id/comments
// Récupérer tous les commentaires d'un post spécifique
router.get('/posts/:id/comments', async (req, res) => {
    try {
        const postId = req.params.id;
        const comments = await Comment.find({ post: postId }).populate('user', 'name email');
        
        if (comments.length === 0) {
            return res.status(404).json({ message: 'Aucun commentaire trouvé pour ce post' });
        }

        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires pour ce post', error: err });
    }
});

module.exports = router;
