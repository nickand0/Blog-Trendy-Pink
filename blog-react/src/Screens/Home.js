import React from 'react';
import Header from '../components/header';
import Hero from '../components/Hero';
import NewArticles from '../components/NewArticle';
import ALaUne from '../components/ALaUne';
import CaseStudy from '../components/CaseStudy';
import FrontendBackend from '../components/FrontendBackendSection'
import RushSection from '../components/RushSection'
import Footer from '../components/Footer'

// Autres pages
export default function Home() {
    return (
        <div>
            <Header/>
            <Hero />
            <NewArticles/>
            <ALaUne/>
            <CaseStudy/>
            <FrontendBackend/>
            <RushSection/>
            <Footer/>
        </div>
    );
}