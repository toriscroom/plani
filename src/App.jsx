import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Features from './Componentes/Features';
import CasosExito from './Componentes/CasosExito';
import CTA from './Componentes/CTA';
import FAQs from './Componentes/FAQs';
import Contact from './Componentes/Contact';
import Footer from './Componentes/Footer';
import './Styles/App.css';
import incendioVideo from './Recursos/incendio_2.mp4';
import About from './Componentes/About';

const App = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const subtitles = [
    "Con NotiFuego, cada segundo cuenta.",
    "Actúa rápido para proteger a quienes más importan.",
    "Tu acción puede marcar la diferencia.",
    "Tecnología que conecta y salva vidas.",
    "Fácil, rápido y al alcance de tu mano.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <section id="home" className="hero-section">
                  <video
                    className="hero-video"
                    src={incendioVideo}
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="hero-overlay"></div>
                  <div className="hero-content">
                    <h1 className="hero-title">Juntos, podemos salvar vidas</h1>
                    <p className="hero-subtitle">{subtitles[currentSubtitle]}</p>
                    <div className="hero-buttons">
                      <button className="cta-button">Descargar la App</button>
                      <button className="secondary-button">Conoce más</button>
                    </div>
                  </div>
                </section>
                <Features />
                <CasosExito />
                <CTA />
                <FAQs />
              </>
            }
          />
          {/* Página de contacto */}
          <Route path="/contacto" element={
            <Contact />} />
          <Route path="/about" element={
            <About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
