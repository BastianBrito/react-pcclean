import React from "react";
import "aos/dist/aos.css";
import "./Welcome.css";
import fondo1 from "../assets/images/fondo1.svg";

const Welcome = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="welcome-container" data-aos="fade-right">
      <img src={fondo1} alt="Bienvenido" className="welcome-image" />
      <div className="welcome-overlay">
        <h1 className="welcome-title" data-aos="fade-down">¡Dale nueva vida a tu PC!</h1>
        <p className="welcome-text" data-aos="fade-up">
          Ofrecemos servicios de mantenimiento y limpieza para que tu equipo
          funcione como nuevo. 
        </p>
        <button className="welcome-button" data-aos="fade-up" onClick={scrollToServices}>
          Ver Servicios
        </button>
      </div>
    </div>
  );
};

export default Welcome;
