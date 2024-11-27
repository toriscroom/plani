import React, { useState } from 'react';
import '../Styles/FAQs.css';

const FAQs = () => {
  const faqs = [
    {
      question: "¿Cómo descargo la aplicación?",
      answer: "Disponible en Android e iOS. Busca 'NotiFuego' en tu tienda de aplicaciones. O en nuestra página web.",
    },
    {
      question: "¿Es gratuita?",
      answer: "Sí, NotiFuego ofrece una versión gratuita con funciones esenciales.",
    },
    {
      question: "¿Cómo funciona la geolocalización?",
      answer: "La aplicación detecta tu ubicación en tiempo real y la envía automáticamente a los equipos de emergencia.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Alternar entre expandir/colapsar
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-container">
        <div className="content-header">
          <p className="content-subtitle">Resuelve tus dudas sobre NotiFuego</p>
          <h2 className="content-title">Preguntas Frecuentes</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              className={`faq-card ${activeIndex === index ? "active" : ""}`} // Aplica la clase active
              key={index}
              onClick={() => toggleFAQ(index)} // Cambia el estado al hacer clic
            >
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="secondary-button">Más preguntas</button>

    </section>

  );
};

export default FAQs;
