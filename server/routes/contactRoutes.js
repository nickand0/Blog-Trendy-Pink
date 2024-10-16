// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Route pour soumettre le formulaire de contact
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation 
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
    }

    try {
        // Création d' un nouveau message de contact
        const newContact = new Contact({ name, email, message });

        // Enregistrement dans la base de données
        await newContact.save();

        res.status(200).json({ message: 'Votre message a été envoyé avec succès !' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi du message.', error });
    }
});

module.exports = router;
