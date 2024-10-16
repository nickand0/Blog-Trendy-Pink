const express = require('express');
const router = express.Router();
const Post = require('../models/Post');   // Modèle de post
const Comment = require('../models/Comment'); // Modèle de commentaire
const Like = require('../models/Like'); // Modèle de like
const Tag = require('../models/Tag'); // Modèle de tag
const View = require('../models/View'); // Modèle de vue

// GET /api/posts
// Récupérer tous les posts avec possibilité de pagination
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const posts = await Post.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('author', 'name email')  // Peupler les données de l'auteur
            .populate('category')  // Peupler les catégories
            .populate('tags');  // Peupler les tags
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts', error: err });
    }
});

// GET /api/posts/:id
// Récupérer un post spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'name email')
            .populate('category')
            .populate('tags');
        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du post', error: err });
    }
});

// POST /api/posts
// Créer un nouveau post
router.post('/', async (req, res) => {
    const { title, description, author, url, image, readTime, category, tags } = req.body;
    
    const newPost = new Post({
        title,
        description,
        author,
        url,
        image,
        readTime,
        category,
        tags
    });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création du post', error: err });
    }
});

// PUT /api/posts/:id
// Mettre à jour un post existant
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('author', 'name email')
            .populate('category')
            .populate('tags');
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du post', error: err });
    }
});

// DELETE /api/posts/:id
// Supprimer un post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.json({ message: 'Post supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du post', error: err });
    }
});

// GET /api/posts/:id/comments-likes
// Récupérer les commentaires et le nombre de likes d'un post spécifique
router.get('/:id/comments-likes', async (req, res) => {
    try {
        const postId = req.params.id;

        // Récupérer les commentaires du post
        const comments = await Comment.find({ post: postId }).populate('user', 'name email');

        // Récupérer le nombre de likes du post
        const likesCount = await Like.countDocuments({ post: postId });

        res.json({ comments, likesCount });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires et des likes', error: err });
    }
});

// GET /api/posts/:id/related-posts
// Récupérer les posts liés (en fonction des tags communs) à un post spécifique
router.get('/:id/related-posts', async (req, res) => {
    try {
        const postId = req.params.id;

        // Récupérer le post actuel avec ses tags
        const currentPost = await Post.findById(postId).populate('tags');
        if (!currentPost) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }

        // Récupérer les posts qui partagent les mêmes tags
        const relatedPosts = await Post.find({
        _id: { $ne: postId }, // Exclure le post actuel
        tags: { $in: currentPost.tags } // Chercher les posts avec les mêmes tags
        }).limit(5); // Limiter à 5 résultats

        res.json(relatedPosts);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts liés', error: err });
    }
});

// GET /api/posts/category/:categoryId
// Récupérer tous les posts d'une catégorie spécifique
router.get('/category/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
    
        // Trouver tous les posts qui appartiennent à cette catégorie
        const posts = await Post.find({ category: categoryId })
            .populate('author', 'name email')  // Peupler les informations sur l'auteur
            .populate('category', 'name')      // Peupler les informations sur la catégorie
            .populate('tags', 'name');         // Peupler les informations sur les tags
    
        // Si aucun post n'est trouvé
        if (posts.length === 0) {
            return res.status(404).json({ message: 'Aucun post trouvé pour cette catégorie' });
        }
    
        // Retourner les posts trouvés
        res.json(posts);
        } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts par catégorie', error: err });
    }
});

// GET /api/posts/tag/:tagId
// Récupérer tous les posts associés à un tag spécifique
router.get('/tag/:tagId', async (req, res) => {
    try {
        const posts = await Post.find({ tags: req.params.tagId })
            .populate('author', 'name email')
            .populate('category', 'name')
            .populate('tags', 'name');
    
        if (posts.length === 0) {
            return res.status(404).json({ message: 'Aucun post trouvé pour ce tag' });
        }
    
        res.json(posts);
        } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts par tag', error: err });
        }
});



module.exports = router;
