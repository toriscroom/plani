import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto
    setFormSubmitted(true); // Marca el formulario como enviado
    setTimeout(() => navigate('/'), 3000); // Redirige a la página principal después de 3 segundos
  };

  return (
    <section className="form-section">
      <div className="form-container">
        {!formSubmitted ? (
          <>
            <h2 className="form-title">Contáctanos</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  rows="5"
                  placeholder="Escribe tu mensaje"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">Enviar</button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>¡Gracias por contactarnos!</h2>
            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
