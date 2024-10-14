import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import SobreNos from './components/sobrenos';
import './assets/css/style.css'; // Importando o CSS

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/sobrenos" element={<SobreNos />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
