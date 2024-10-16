import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home'
import Article from './Screens/Articles'
import Teams from './Screens/Teams'
import Travail from './Screens/Travail'
import Contact from './Screens/Contacter'



function App() {
  return (
    <Router>
      <div>       
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/travail" element={<Travail/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;