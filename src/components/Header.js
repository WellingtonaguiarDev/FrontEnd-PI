import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link
import logo from '../assets/images/logo.png'; // Importe a imagem

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo CallMar" /> {/* Use a variável importada */}
                </Link>
            </div>
            <nav className="menu">
                <Link to="/">Início</Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <Link to="#">Mapas</Link>
                <Link to="#">Contato</Link>
                <Link to="#">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
