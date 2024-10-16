import React from 'react';
import { Link } from 'react-router-dom';

export default function RushSection() {
    return (
        <div className="mx-4 my-10 py-24 px-10 rounded-xl text-center text-white bg-gradient-to-b from-indigo-50 to-indigo-500 selection:bg-white selection:text-indigo-600 sm:m-20 sm:px-20 sm:py-32">
            <h1 className="text-4xl font-Jost font-semibold mb-6 md:text-5xl sm:mb-10">
                Accélérez votre idée avec nous
            </h1>
            <p className="mb-6 lg:px-52 sm:mb-10">
            Prêt à donner vie à votre design, frontend ou backend ? Contactez-nous dès aujourd'hui pour planifier une consultation et découvrir comment notre équipe peut concrétiser votre vision.
            </p>
            <div className='flex justify-center'>
                <Link to='/contact' className="btn bg-white flex gap-2 items-center p-3 rounded-full font-bold text-indigo-600 hover:bg-pink-400 hover:text-white">
                    Allons-y
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
