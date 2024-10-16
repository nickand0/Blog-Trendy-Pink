import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../Data/Articles';

export default function CaseStudy() {
  // Constante contenant les données des articles de blog
    
    return (
        <div className="flex mx-5 my-10 sm:m-10 flex-col">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-bold">Case Study</h1>
                <a href="#" className="flex items-center text-indigo-600">
                    View Case Study
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 1 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                    </svg>
                </a>
            </div>

        {/* Grille pour les articles */}
        <div className="container mx-auto px-2 py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {articles.map((article) => (
                <div key={article.id} className="bg-white p-2 rounded-lg shadow-md">
                    <img src={article.url} alt={article.title} className='rounded w-full'/>
                    <h2 className="px-2 text-2xl font-semibold my-3">{article.title}</h2>
                    <p className="px-2 text-gray-400 mb-3 text-sm">{article.author} - {article.publishedDate}</p>
                    <p className='px-2 text-gray-700 mb-3 text-[15px]'>{article.description}</p>
                    <div className='px-2 flex items-center gap-2'>
                        <Link to={`/article/${article.id}`} className="text-indigo-600 hover:underline">
                            Lire l'article
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='text-indigo-600'>
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </div>
                    
                </div>
                ))}
            </div>
            </div>
        </div>
    );
}
