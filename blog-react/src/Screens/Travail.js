import React from "react";
import Header from '../components/header';
import Footer from '../components/Footer';

export default function Work() {
    const Projects = [
        {
            title: 'Chat Application',
            description: 'Application de chat en temps réel avec des fonctionnalités de messagerie privée et de groupe. Utilise WebSocket pour la messagerie instantanée et une interface utilisateur conviviale.',
            technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
            image: '/images/nikki/chatApp.jpg',
            link: 'https://chatapp088.netlify.app/',
            author:"Nikki"
        },
        {
            title: 'Blog Application',
            description: "Une plateforme de blog moderne permettant de créer, modifier et commenter des articles. Inclut la mise en forme du texte, le balisage, et l'authentification des utilisateurs.",
            technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            image: '/images/nikki/blog.jpg',
            link: 'https://example.com',
            author:"Nikki"
        },
        {
            title: 'Portfolio Website ',
            description: 'Mon site portfolio personnel qui présente mes projets, compétences et informations de contact. Construit avec Next.js pour des performances optimisées et un référencement amélioré.',
            technologies: ['Next.js', 'Tailwind CSS'],
            image: '/images/nikki/portfolionext.jpg',
            link: 'https://portfolioando.netlify.app/',
            author:"Nikki"
        },
        {
            title: 'E-commerce Website',
            description: "Boutique en ligne avec liste de produits, panier, passage en caisse et intégration de paiement. Dispose d'un tableau de bord administrateur pour la gestion des produits et des commandes.",
            technologies: ['React', 'Node.js', 'Express', 'Stripe API', 'MongoDB'],
            image: '/images/nikki/e-commerce.jpg',
            link: 'https://e-commerce088.netlify.app/',
            author:"Nikki"
        },
        {
            title: 'calculatrice',
            description: 'Une calculatrice en ligne avec une interface simple et intuitive, construite en utilisant du HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            image: '/images/nikki/calculate.jpg',
            link: 'https://nickand0.github.io/Calculate/',
            author:"Nikki"
        },
        {
            title: 'Devinette',
            description: 'Jeu en ligne interactif de devinettes, construit en HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            image: '/images/nikki/devinette.jpg',
            link: 'https://nickand0.github.io/Devinette/',
            author:"Nikki"

        },
        {
            title: 'Citation',
            description: 'Générateur de citations aléatoires avec une interface minimaliste et responsive, créé avec HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            image: '/images/nikki/citation.jpg',
            link: 'https://nickand0.github.io/Citation/',
            author:"Nikki"
        },
        {
            title: 'Changeur de couleur',
            description: 'Application de changement de couleur interactive pour les éléments de la page, créée avec HTML, JavaScript et CSS.',
            technologies: ['Html','Javascript','css'],
            image: '/images/nikki/change-color.jpg',
            link: 'https://nickand0.github.io/checkpoint-DOM2/',
            author:"Nikki"
        },
        {
            title: 'petit Panier',
            description: "Mini-application de gestion de panier, permettant d'ajouter ou de supprimer des articles. Construite en HTML, JavaScript et CSS.",
            technologies: ['Html','Javascript','css'],
            image: '/images/nikki/Panier.jpg',
            link: 'https://nickand0.github.io/checkpoint-DOM-1/',
            author:"Nikki"
        },
        {
            title: 'Portfolio avec tailwind',
            description: 'Site portfolio personnel utilisant Tailwind CSS pour une mise en page moderne et responsive.',
            technologies: ['Html','tailwind'],
            image: '/images/nikki/portfolio-tailwind.jpg',
            link: 'https://nickand0.github.io/projet-portfolio-Tailwind/',
            author:"Nikki"
        },
        {
            title: 'vitrine chaussure',
            description: 'Une page vitrine pour des chaussures, construite avec Bootstrap pour une mise en page fluide et responsive.',
            technologies: ['Html','css','bootstrap'],
            image: '/images/nikki/frontend-shoes.jpg',
            link: 'https://nickand0.github.io/projet-bootstrap2/',
            author:"Nikki"
        },
        {
            title: 'Portfolio',
            description: 'Portfolio simple et épuré présentant mes projets et compétences, construit en HTML et CSS.',
            technologies: ['Html','css'],
            image: '/images/nikki/portfoliocss.jpg',
            link: 'https://nickand0.github.io/Portfolio/',
            author:"Nikki"
        },
        {
            title: 'Agence de voyage',
            description: 'Site vitrine pour une agence de voyage, avec une mise en page attractive et responsive, construit avec Bootstrap et CSS.',
            technologies: ['Html','bootstrap','css'],
            image: '/images/nikki/agence-de-voyage.jpg',
            link: 'https://nickand0.github.io/projet-bootstrap1/',
            author:"Nikki"
        },
        {
            title: 'video arrière plan',
            description: "Page web mettant en valeur une vidéo d'arrière-plan avec un design minimaliste, construite en HTML et CSS.",
            technologies: ['Html','css'],
            image: '/images/nikki/arriere-plan-video.jpg',
            link: 'https://nickand0.github.io/challenge_ajout_video/',
            author:"Nikki"
        },
        {
            title: 'Card avec OOP',
            description: 'Application de gestion des articles, construite en JavaScript orienté objet (OOP) avec une interface stylisée en Tailwind CSS.',
            technologies: ['javascript','html','tailwind'],
            image: '/images/nikki/oop.jpg',
            link: 'https://github.com/nickand0/checkpoint-OOP/',
            author:"Nikki"
        },
        {
            title: 'profil avec react state',
            description: "Application React affichant un profil d'utilisateur avec la gestion d'état à travers React.",
            technologies: ['react','javascript','html','css'],
            image: '/images/nikki/react-state.jpg',
            link: 'https://github.com/nickand0/checkpoint-react-states/tree/master/stateproject',
            author:"Nikki"
        },
        {
            title: 'harman kardon avec react',
            description: "Vitrine interactive d'un produit Harman Kardon, construite en React pour une gestion dynamique des éléments.",
            technologies: ['react','javascript','html','css'],
            image: '/images/nikki/vitrine-react-harman.jpg',
            link: 'https://github.com/nickand0/checkpoint-1-React',
            author:"Nikki"
        },
        {
            title: 'fifa players card',
            description: 'Application de présentation de joueurs FIFA sous forme de cartes interactives, développée avec React.',
            technologies: ['react','javascript','html','css'],
            image: '/images/nikki/playerCard.jpg',
            link: 'https://github.com/nickand0/checkpoint-React2-Player-Card',
            author:"Nikki"
        },
        {
            title: 'Movie avec react',
            description: 'Application de présentation de films, avec gestion des routes et des états sous React.',
            technologies: ['react','javascript','html','css'],
            image: '/images/nikki/movie.jpg',
            link: 'https://github.com/nickand0/checkpoint-hook-react-router',
            author:"Nikki"
        },
        {
            title: 'tache todo avec redux',
            description: 'Application Todo utilisant Redux pour la gestion des états, offrant une organisation claire des tâches.',
            technologies: ['react','javascript','html','css'],
            image: '/images/nikki/todo-redux.jpg',
            link: 'https://github.com/nickand0/checkpoint-redux',
            author:"Nikki"
        },
        {
            title: 'vitrine gomycode avec express',
            description: 'Application vitrine pour Gomycode, développée avec EJS et Express, pour une gestion dynamique des vues et des contenus.',
            technologies: ['Ejs','javascript','css'],
            image: '/images/nikki/express-gomycode.jpg',
            link: 'https://github.com/nickand0/chekpoint-express.js/tree/master/webapp',
            author:"Nikki"
        },
        {
            title: 'API list',
            description: "Application affichant une liste d'utilisateurs obtenue via une API, avec une mise en page responsive en HTML et CSS.",
            technologies: ['Html','javascript','css'],
            image: '/images/nikki/list-user-api-react.jpg',
            link: 'https://github.com/nickand0/checkpoint-API',
            author:"Nikki"
        }
    ]

    return (
        <div>
        <Header/>
        <section id="work" className="pt-40 pb-16 px-10">
            <h2 className="text-4xl text-indigo-500 font-bold text-center mb-12">Les Projets </h2>
            <p className="mb-10 mx-20">Nous sommes des développeurs spécialisés dans le développement de logiciels. Nous avons étudié ensemble chez Gomycode et ont réalisé de nombreux projets, aussi bien en frontend qu'en backend. Notre expertise couvre tout le cycle de développement d'applications web, de la conception à la mise en production.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {Projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={350}
                                height={200}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                        <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 mb-2">Technologies :</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Voir le projet
                            </a>
                            <p className="text-gray-500">{project.author}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
        </div>
    );
}
