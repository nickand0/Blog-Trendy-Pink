const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Modèle utilisateur à créer dans le dossier `models`

// GET /api/users
// Récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Récupérer tous les utilisateurs depuis la base de données
        res.json(users); // Envoyer les utilisateurs en réponse
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
    }
});

// GET /api/users/:id
// Récupérer un utilisateur spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Chercher l'utilisateur par son ID
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error: err });
    }
});

// POST /api/users
// Créer un nouvel utilisateur
router.post('/', async (req, res) => {
    const { name, email, role } = req.body;
    // Valider les champs (vous pouvez ajouter plus de validations selon vos besoins)
    if (!name || !email) {
        return res.status(400).json({ message: 'Le nom et l\'email sont requis' });
    }

  // Créer un nouvel utilisateur
    const newUser = new User({
        name,
        email,
        role: role || 'viewer' // Par défaut, le rôle est 'viewer'
    });

    try {
        const savedUser = await newUser.save(); // Sauvegarder le nouvel utilisateur dans la base de données
        res.status(201).json(savedUser); // Retourner l'utilisateur créé
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: err });
    }
});

// PUT /api/users/:id
// Mettre à jour un utilisateur existant
router.put('/:id', async (req, res) => {
    try {
        // Chercher l'utilisateur et mettre à jour ses champs
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err });
    }
});

// DELETE /api/users/:id
// Supprimer un utilisateur
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id); // Supprimer l'utilisateur par ID
        if (!deletedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error: err });
    }
});

module.exports = router;
