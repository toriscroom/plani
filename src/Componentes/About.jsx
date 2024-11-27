import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/About.css';
import about from '../Recursos/about.jpg';

const About = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto
    setFormSubmitted(true); // Marca el formulario como enviado
    setTimeout(() => navigate('/'), 3000); // Redirige a la página principal después de 3 segundos
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Puedes reemplazar el src con tu imagen */}
          <img src={about } alt="Acerca de NotiFuego"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">Acerca de NotiFuego</h2>
          <p className="about-description">
            En NotiFuego, estamos comprometidos con proteger a las personas y su entorno. 
            Nuestra misión es proporcionar soluciones tecnológicas avanzadas que permitan una respuesta rápida y efectiva en situaciones de emergencia. Creemos en la fuerza de la innovación para salvar vidas y en el poder de la comunidad para hacer la diferencia.
          </p>
          <p className="about-description">
            Con un equipo apasionado y experimentado, trabajamos día a día para ofrecer una aplicación que no solo conecte, sino que también inspire confianza en momentos críticos.
          </p>
          <button className="about-button">Conoce Más</button>
        </div>
      </div>
    </section>
  );
};

export default About;
