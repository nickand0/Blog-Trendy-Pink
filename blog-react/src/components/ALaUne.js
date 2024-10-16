import React, { useState } from 'react';

export default function ALaUne() {

    return (
        <div>
            <div className="flex flex-col md:justify-center gap-2 px-10 py-10  w-full h-lvh bg-indigo-50 rounded-xl sm:h-4/5 sm:gap-16 md:flex-row sm:py-20 sm:px-20">
                <div className="flex flex-col w-full self-start pt-5 md:w-full">
                    <h1 className="text-2xl font-semibold md:text-3xl  mb-5 md:mb-8">
                        Pourquoi le design produit doit inclure l'apprentissage du motion design
                    </h1>
                    <p className="mb-3 text-sm md:text-base">
                        Le motion design est une partie essentielle de la boîte à outils du designer - le mouvement est un moyen de raconter des histoires. Il crée une narration qui fournit un contexte à l'utilisateur.
                    </p>

                    <div className="flex mb-7">
                        <div className="badge mr-2 py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                HTML/CSS
                            </a>
                        </div>
                        <div className="badge py-4">
                            <a href="#" className="text-[10px] border p-3 rounded-full border-black hover:bg-white duration-300 hover:text-blue-500 hover:border-blue-500 font-semibold sm:text-xs">
                                Bootstrap/Tailwind
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-indigo-800 flex mb-4 items-center gap-2 hover:underline">
                        Lire l'article
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
                
                <img src='https://media.istockphoto.com/id/1061329166/photo/creativity-tutorials-devices-mockup.jpg?s=612x612&w=0&k=20&c=Rf4ra-NhJL2YdWnzq7uDofGVc9sTOdWKmrL9x1LiH3s=' alt='design'
                    className='rounded shadow-md'
                />
                

                {/* Section Dropdown pour mobile */}
                <div className="md:hidden mt-10 w-full h-screen md:my-10 px-5 sm:h-full ">
                    <div className="block sm:hidden">
                        <div className="dropdown self-start">
                            <div
                                className="m-1 cursor-pointer font-bold underline"
                                role="button"
                            >
                                Tous les sujets
                            </div>
                                <ul
                                    className="dropdown-content z-[1] flex flex-col gap-2 menu p-2 shadow bg-base-100 rounded-box w-full bg-white rounded-lg"
                                    role="menu"
                                >
                                    <li className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100" >Design</li>
                                    <li className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100"  >HTML</li>
                                    <li className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100"  >CSS</li>
                                    <li  className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100" >Bootstrap</li>
                                    <li className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100"  >Tailwind</li>
                                    <li className="hover:text-white hover:bg-indigo-500 w-full px-3 rounded duration-100"  >Javascript</li>
                                </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            {/* Section Dropdown pour mobile */}
            <div class="hidden md:flex justify-around">
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    Design
                </div>
                <div class=" text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    JavaScript
                </div>
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    React.js
                </div>
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    Html
                </div>
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    CSS
                </div>
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    Bootstrap
                </div>
                <div class="text-sm badge  text-center py-2 px-2 rounded-full text-gray-500 border-gray-400 border my-10">
                    Tailwind
                </div>
            </div>
        </div>
    );
}
