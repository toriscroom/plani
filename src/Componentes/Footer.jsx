import React from 'react';
import { Link } from 'react-router-dom'; // Para navegación interna
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Información Básica */}
        <div className="footer-info">
          <h2 className="footer-logo">NotiFuego</h2>
          <p className="footer-description">
            La tecnología al servicio de la seguridad. Actuamos rápido para proteger lo que más importa.
          </p>
        </div>

        {/* Enlaces Importantes */}
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <h3>Síguenos</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Derechos Reservados */}
      <div className="footer-bottom">
        <p>&copy; 2024 NotiFuego. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
