import React from 'react';
import '../Styles/CTA.css';

const CTAPlanes = () => {
  const planes = [
    {
      tipo: "Usuarios Naturales",
      descripcion: "Acceso gratuito a herramientas básicas de NotiFuego. Ideal para familias y personas que buscan protección básica en emergencias.",
      precio: "Gratis",
      caracteristicas: ["Geolocalización básica", "Alertas automáticas", "Soporte comunitario"],
      boton: "Comenzar Gratis",
    },
    {
      tipo: "Empresas",
      descripcion: "Soluciones avanzadas para organizaciones que necesitan una gestión de emergencias profesional.",
      precio: "US$99/mes",
      caracteristicas: ["Geolocalización avanzada", "Soporte 24/7", "Integración con sistemas internos"],
      boton: "Solicitar Demo",
    },
  ];

  return (
    <section id="planes" className="cta-planes-section">
      <div className="cta-planes-container">
        <div className="content-header">
          <h2 className="content-title">Elige el plan que <br /> mejor se adapta a ti</h2>
          <p className="content-subtitle"> En notifuego comprendemos que cada usuario tiene necesidades diferentes.</p>
        </div>
        <div className="cta-planes-grid">
          {planes.map((plan, index) => (
            <div className="cta-plan-card" key={index}>
              <h3 className="cta-plan-tipo">{plan.tipo}</h3>
              <p className="cta-plan-descripcion">{plan.descripcion}</p>
              <p className="cta-plan-precio">{plan.precio}</p>
              <ul className="cta-plan-caracteristicas">
                {plan.caracteristicas.map((caracteristica, i) => (
                  <li key={i}>{caracteristica}</li>
                ))}
              </ul>
              <button className="cta-button">{plan.boton}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAPlanes;
