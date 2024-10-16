import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

const teamMembers = [
    {
        name: 'Mohamed',
        role: 'Développeur Logiciel',
        description: 'Étudiant chez Gomycode en développement logiciel, passionné par le front-end et les technologies web et le back-end.',
        photo: 'https://via.placeholder.com/150', // Remplacer par la vraie photo
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/mohamed',
            github: 'https://github.com/mohamed',
            twitter: 'https://twitter.com/mohamed',
        },
    },
    {
        name: 'Nikki',
        role: 'Développeur Logiciel',
        description: 'Étudiant chez Gomycode en développement logiciel, avec un intérêt pour le back-end et la gestion de bases de données et le front-end.',
        photo: '/images/nikki/IMG_1312.png', // Remplacer par la vraie photo
        socialLinks: {
            linkedin: 'https://ci.linkedin.com/in/nikki-andriamahefa-7463b8193',
            github: 'https://github.com/nickand0',
            twitter: 'https://twitter.com/nikki',
        },
    },
];

const Team = () => {
    return (
        <div>
        <Header/>
        <div className="container mx-auto px-4 pt-32 pb-32">
            
            <h1 className="text-4xl font-semibold text-center mb-20 text-indigo-600">Notre Équipe</h1>
            <div className="flex justify-center gap-10 flex-wrap">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-5 max-w-md flex flex-col items-center"
                    >
                        <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="rounded-full w-32 h-32 mb-4 object-contain"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                        <p className="text-gray-500 mb-4">{member.role}</p>
                        <p className="text-center text-gray-600 mb-4">{member.description}</p>
                        <div className="flex gap-4">
                            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.5V6H2.542v7.5h2.4zm-1.2-8.25c-.837 0-1.4-.582-1.4-1.312 0-.744.576-1.312 1.425-1.312.85 0 1.4.568 1.412 1.312 0 .73-.562 1.312-1.437 1.312zm4.787 8.25V9.8c0-.197.014-.395.072-.538.158-.395.518-.804 1.122-.804.792 0 1.11.606 1.11 1.494V13.5h2.4V9.696c0-2.046-1.093-2.994-2.548-2.994-1.203 0-1.74.642-2.037 1.097v-.94h-2.4v7.5h2.4z"/>
                                </svg>
                            </a>
                            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14-.004-.282-.012-.422A6.67 6.67 0 0 0 16 3.542a6.543 6.543 0 0 1-1.885.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797 3.286 3.286 0 0 0-5.593 2.993 9.325 9.325 0 0 1-6.766-3.429 3.286 3.286 0 0 0 1.018 4.381A3.323 3.323 0 0 1 .64 6.575v.041a3.286 3.286 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.02-.616-.059a3.286 3.286 0 0 0 3.067 2.281A6.588 6.588 0 0 1 0 13.026a9.291 9.291 0 0 0 5.026 1.472"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <Footer/>
        </div>
    );
};

export default Team;
