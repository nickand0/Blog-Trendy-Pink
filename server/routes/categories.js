const express = require('express');
const router = express.Router();
const Categorie = require('../models/Categorie');  // Modèle de Catégorie

// GET /api/categories
// Récupérer toutes les catégories
router.get('/', async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des catégories', error: err });
    }
    });

    // GET /api/categories/:id
    // Récupérer une catégorie spécifique par ID
    router.get('/:id', async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        if (!categorie) {
            return res.status(404).json({ message: 'Catégorie non trouvée' });
        }
        res.json(categorie);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la catégorie', error: err });
    }
});

// POST /api/categories
// Créer une nouvelle catégorie
router.post('/', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Le nom de la catégorie est requis' });
    }

    const newCategorie = new Categorie({
        name
    });

    try {
        const savedCategorie = await newCategorie.save();
        res.status(201).json(savedCategorie);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la catégorie', error: err });
    }
});

// PUT /api/categories/:id
// Mettre à jour une catégorie existante
router.put('/:id', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Le nom de la catégorie est requis' });
    }

    try {
        const updatedCategorie = await Categorie.findByIdAndUpdate(req.params.id, { name }, { new: true });
        if (!updatedCategorie) {
            return res.status(404).json({ message: 'Catégorie non trouvée' });
        }
        res.json(updatedCategorie);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la catégorie', error: err });
    }
});

// DELETE /api/categories/:id
// Supprimer une catégorie
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategorie = await Categorie.findByIdAndDelete(req.params.id);
        if (!deletedCategorie) {
            return res.status(404).json({ message: 'Catégorie non trouvée' });
        }
        res.json({ message: 'Catégorie supprimée avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la catégorie', error: err });
    }
});

module.exports = router;
