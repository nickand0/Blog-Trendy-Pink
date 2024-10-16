import React, { useState } from 'react';

export default function FrontendBackendSection() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            {/* Section Frontend */}
            <div className="flex flex-col md:flex-row-reverse md:justify-center gap-2 px-10 py-10 items-center w-full  bg-indigo-50 rounded-xl sm:h-4/5 sm:gap-16 sm:py-20 sm:px-20 ">
                <img src='https://static.snoweb.io/images/lisibilite-textes-s.width-660.format-jpeg.jpegquality-90.jpg'
                    className='rounded-xl shadow-md'
                />
                <div className="flex flex-col w-full self-start pt-5 md:w-full">
                    <h1 className="text-2xl font-semibold md:text-3xl mb-5 md:mb-8">
                        Développement Frontend : Réalisation d'interfaces utilisateur modernes
                    </h1>
                    <p className="mb-3 text-sm md:text-base">
                        Nous utilisons des technologies modernes telles que React, Tailwind CSS et Bootstrap pour créer des interfaces utilisateur réactives et esthétiques. Nous nous concentrons sur la performance, l'accessibilité et l'expérience utilisateur.
                    </p>

                    <div className="flex mb-7">
                        <div className="badge mr-2 py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                React
                            </a>
                        </div>
                        <div className="badge py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                Tailwind CSS
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-indigo-800 flex mb-4 items-center gap-2 hover:underline">
                        Lire l'article sur le Frontend
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </a>
                </div>
                
            </div>

            {/* Section Backend */}
            <div className="flex flex-col md:justify-center gap-2 px-10 py-10 items-center w-full  bg-indigo-50 rounded-xl sm:h-4/5 sm:gap-16 md:flex-row sm:py-20 sm:px-20 ">
                <img src='https://media.istockphoto.com/id/1088872274/photo/1-back-end-coding-workflow-of-the-web-developing-using-php-language-programming-concept.jpg?s=612x612&w=0&k=20&c=UDOxh9ldDInRisf3DPqoMFm-tFXZNl4CbX4wMBO22BI='
                    className='rounded-xl shadow-md'
                />
                <div className="flex flex-col w-full self-start pt-5 md:w-full">
                    <h1 className="text-2xl font-semibold md:text-3xl mb-5 md:mb-8">
                        Développement Backend : Créer des API robustes et sécurisées
                    </h1>
                    <p className="mb-3 text-sm md:text-base">
                        Nous maîtrisons le développement backend avec Node.js, Express et MongoDB. Nos API REST suivent les meilleures pratiques pour assurer la performance, la sécurité et la scalabilité.
                    </p>

                    <div className="flex mb-7">
                        <div className="badge mr-2 py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                Node.js
                            </a>
                        </div>
                        <div className="badge py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                MongoDB
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-indigo-800 flex mb-4 items-center gap-2 hover:underline">
                        Lire l'article sur le Backend
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </a>
                </div>
                
            </div>
        </div>
    );
}
