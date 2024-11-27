import React from 'react';
import '../Styles/CasosExito.css';
import Imagen1 from '../Recursos/Imagen1.jpg';
import Imagen2 from '../Recursos/Imagen2.jpg';
import Imagen3 from '../Recursos/Imagen3.jpg';

const CasosExito = () => {
  const testimonios = [
    {
      texto: "Gracias a NotiFuego, pudimos actuar en minutos y proteger nuestra familia.",
      autor: "Juan Pérez",
      img: Imagen1,
      reverse: false, // Imagen a la izquierda
    },
    {
      texto: "Un servicio que marca la diferencia en emergencias reales.",
      autor: "María González",
      img: Imagen2,
      reverse: true, // Imagen a la derecha
    },
    {
      texto: "NotiFuego ha mejorado nuestra capacidad de respuesta en emergencias. La geolocalización y las alertas instantáneas son herramientas clave para salvar vidas y proteger propiedades.",
      autor: "Carlos López, ",
      profesion : "Comandante de Bomberos de Chile",
      img: Imagen3,
      reverse: false, // Imagen a la izquierda
    },
  ];

  return (
    <section id= "testimonials" className="casos-exito-section">
      <div className="casos-exito-container">
        <div className="content-header-2">
            <p className="content-subtitle">
                Tu opinión es importante para nosotros. <br />
                Conoce lo que nuestros usuarios tienen que decir.
            </p>
            <h3 className="content-title">Testimonios <br /> de usuarios.</h3>
        </div>
        {testimonios.map((testimonio, index) => (
          <div
            className={`caso-card ${testimonio.reverse ? 'reverse' : ''}`}
            key={index}
          >
            <img src={testimonio.img} alt={testimonio.autor} className="caso-imagen" />
            <div className="caso-texto-container">
              <p className="caso-texto">"{testimonio.texto}"</p>
              <p className="caso-autor">- {testimonio.autor} {testimonio.profesion}</p>
              
            </div>
          </div>
        ))}

      </div>
        <button className="secondary-button">Ver más</button>

    </section>
  );
};

export default CasosExito;
