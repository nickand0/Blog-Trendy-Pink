import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-indigo-500">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex items-center -m-1.5 p-1.5">
                        <span className="sr-only">TRENDY PINK</span>
                        <img className="h-9 w-auto" src="/images/2.png" alt="TRENDY PINK" />
                        <span className="text-white text-2xl font-bold ml-2 font-Jost">TRENDY PINK</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        type="button" 
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex items-center lg:gap-x-6">
                    <Link to="/" className="text-lg hover:text-xl font-normal px-5 text-gray-200 rounded-full hover:text-blue-500 hover:bg-white duration-300 ">Blog</Link>
                    <Link to="/travail" className="text-lg hover:text-xl font-normal px-5 text-gray-200 rounded-full hover:text-blue-500 hover:bg-white duration-300 ">Travail</Link>
                    <Link to="/Teams" className="text-lg hover:text-xl font-normal px-5 text-gray-200 rounded-full hover:text-blue-500 hover:bg-white duration-300">Équipe</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/contact" className="text-lg hover:text-xl font-normal px-5 text-gray-200 rounded-full hover:text-blue-500 hover:bg-white duration-300">Contactez-nous</Link>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-0 right-0 h-screen duration-500 w-2/5 bg-indigo-700">
                    <div className="flex items-center justify-between p-6">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">TRENDY PINK</span>
                            <img className="h-9 w-auto" src="./images/2.png" alt="TRENDY PINK" />
                        </Link>
                        <button 
                            onClick={toggleMenu} 
                            type="button" 
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to="/" className="block rounded-md py-3 px-4 text-lg font-normal leading-6 text-white hover:bg-indigo-500 hover:text-white">Blog</Link>
                        <Link to="/travail" className="block rounded-md py-3 px-4 text-lg font-normal leading-6 text-white hover:bg-indigo-500 hover:text-white">Travail</Link>
                        <Link to="/Teams" className="block rounded-md py-3 px-4 text-lg font-normal leading-6 text-white hover:bg-indigo-500 hover:text-white">Équipe</Link>
                        <Link to="/contact" className="block rounded-md py-3 px-4 text-lg font-normal leading-6 text-white bg-indigo-800 hover:bg-indigo-600 hover:text-white">Contactez-nous</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
