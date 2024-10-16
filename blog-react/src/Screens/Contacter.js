import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez intégrer une API ici pour envoyer le formulaire
        console.log(formData);
        // Réinitialiser le formulaire après soumission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
        <Header/>
        <section className="bg-white text-gray-800 py-36 pb-14 px-4 sm:px-8 lg:px-16">
            <h2 className="text-3xl text-center font-bold mb-6">Contactez-nous</h2>
            <p className="text-center mb-8 text-gray-500">
                Avez-vous des questions ou souhaitez-vous discuter de votre prochain projet ? 
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
            </p>
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Votre email"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Écrivez votre message..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
                        >
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <Footer/>
        </div>
    );
}
