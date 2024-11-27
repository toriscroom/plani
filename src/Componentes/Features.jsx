import React, { useState, useEffect } from 'react';
import '../Styles/Features.css';
import Gps from '../Recursos/Gps.jpg';
import EasyToUse from '../Recursos/EasyToUse.jpg';
import InstantResponse from '../Recursos/InstantResponse.jpg';
import AuthoritiesImage from '../Recursos/AuthoritiesImage.png';
import SecurityForAllImage from '../Recursos/SecurityForAllImage.jpg';

const Features = () => {
  const featuresData = [
    {
      img: Gps,
      title: "Geolocalización Precisa",
      description: "Ubicación en tiempo real para que las autoridades lleguen más rápido a emergencias."
    },
    {
      img: EasyToUse,
      title: "Fácil de Usar",
      description: "Diseño intuitivo pensado para usuarios de cualquier nivel técnico."
    },
    {
      img: InstantResponse,
      title: "Respuesta Instantánea",
      description: "Envía alertas automáticas con un solo clic para agilizar la ayuda en emergencias."
    },
    {
      img: AuthoritiesImage,
      title: "Conexión con Autoridades",
      description: "Facilita la comunicación directa con bomberos y equipos de rescate."
    },
    {
      img: SecurityForAllImage,
      title: "Seguridad para Todos",
      description: "Tecnología accesible diseñada para proteger tanto a familias como a empresas."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    setIsPaused(true); // Pausar el carrusel
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + featuresData.length) % featuresData.length
    );
    setIsPaused(true); // Pausar el carrusel
  };

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => setIsPaused(false), 10000); // Reanudar después de 5 segundos
      return () => clearTimeout(pauseTimer); // Limpiar el temporizador
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length); // Rotar automáticamente
      }, 3000); // Rotar cada 3 segundos
  
      return () => clearInterval(interval); // Limpiar el intervalo
    }
  }, [isPaused]); // Solo depende de isPaused
  
  const prevIndex = (currentIndex - 1 + featuresData.length) % featuresData.length;
  const nextIndex = (currentIndex + 1) % featuresData.length;

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="content-header">
          <h3 className="content-title">La tecnología que conecta, <br /> la seguridad que salva.</h3>
          <p className="content-subtitle">
            Reducimos tiempos de respuesta y llevamos tranquilidad a quienes más importan.
          </p>
        </div>
        <div className="carousel">
          <button className="carousel-button prev" onClick={goToPrevious}>
            &#8592;
          </button>
          <div className="carousel-cards">
            <div className="feature-card prev">
              <img src={featuresData[prevIndex].img} alt={featuresData[prevIndex].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{featuresData[prevIndex].title}</h3>
                <p className="feature-description">{featuresData[prevIndex].description}</p>
              </div>
            </div>
            <div className="feature-card active">
              <img src={featuresData[currentIndex].img} alt={featuresData[currentIndex].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{featuresData[currentIndex].title}</h3>
                <p className="feature-description">{featuresData[currentIndex].description}</p>
              </div>
            </div>
            <div className="feature-card next">
              <img src={featuresData[nextIndex].img} alt={featuresData[nextIndex].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{featuresData[nextIndex].title}</h3>
                <p className="feature-description">{featuresData[nextIndex].description}</p>
              </div>
            </div>
          </div>
          <button className="carousel-button next" onClick={goToNext}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
