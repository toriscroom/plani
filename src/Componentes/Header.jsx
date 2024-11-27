import React from 'react';
import { Link } from 'react-router-dom'; // Para navegación interna
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="custom-header">
      <nav className="navbar">
        <h1 className="logo">
          <p>NotiFuego</p> {/* Cambiado a un párrafo */}
        </h1>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="#features">Características</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#planes">Planes</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><Link to="/contacto">Contacto</Link></li> 
          <li><a href="/about">Acerca de</a></li>
        </ul>
        <div className="social-icons">
          <p>Redes Sociales</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
