import React, { useState } from 'react';

export default function Hero() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            alert(`Merci pour votre inscription, ${email}!`);
            setEmail('');
        } else {
            alert('Veuillez entrer un email valide.');
        }
    };

    return (
        <div className="relative  px-6 pt-14 lg:px-8 bg-gradient-to-b from-indigo-800 to-indigo-300">
            <div className="mx-auto max-w-2xl pt-40 pb-10 selection:bg-white selection:text-indigo-600 mb-5">
                <div className="text-center">
                    <h1 className="text-5xl font-normal tracking-tight text-white mb-5">
                        Bienvenue sur le blog des <br />
                        {/* Appliquer la classe avec l'animation */}
                        <span
                            className=" bg-clip-text text-transparent bg-gradient-to-l from-[#2ecc71] via-[#14C9F6]  to-[#FF66C4] 
                            bg-[length:400%] animate-gradient-animation font-bold uppercase"
                        >
                            TRENDY PINK
                        </span>
                    </h1>
                    <p className="mt-6 text-lg leading-normal text-white mb-8 text-center">
                        N'hésitez pas à vous abonner pour ne rien manquer de nos dernières <br/>
                        <span> publications !</span>
                    </p>
                </div>
                <div>
                    <div className="flex relative mt-3 rounded-full items-center shadow-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-full border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                            placeholder="Entre ton email"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="rounded-full bg-indigo-600 py-3 px-5 text-white absolute right-0 mr-1 hover:bg-pink-500 duration-300"
                        >
                            S'abonner
                        </button>
                    </div>
                </div>
            </div>

            <div className=" rounded-t-3xl mx-auto max-w-6xl text-center px-5 py-5 sm:py-3 lg:py-6 bg-indigo-500 hidden sm:block">
                <p className="text-md leading-normal text-white">
                    Bienvenue sur notre blog dédié à la créativité et l'innovation, où des étudiants partagent projets passionnants et tutoriels inspirants. Trouvez idées, conseils pratiques et inspiration ici.
                </p>
            </div>
        </div>
    );
}
