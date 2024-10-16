const express = require('express');
const router = express.Router();
const Projet = require('../models/Projet'); 

// Route pour récupérer tous les projets
router.get('/projets', async (req, res) => {
    try {
        const projets = await Projet.find(); 
        res.status(200).json(projets);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des projets.', error });
    }
});

// Route pour récupérer les projets par auteur
router.get('/projets/author/:author', async (req, res) => {
    const { author } = req.params; 

    try {
        const projets = await Projet.find({ author });
        if (projets.length === 0) {
            return res.status(404).json({ message: `Aucun projet trouvé pour l'auteur ${author}` });
        }
        res.status(200).json(projets);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des projets par auteur.', error });
    }
});

module.exports = router;
