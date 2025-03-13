import React from "react";
import logo from "../assets/images/logo.svg";
import "./Header.css"; // Importa el archivo CSS

const Header = () => {
  return (
    <header className="custom-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid">
        <a className="navbar-brand" href="#welcome">
          <img src={logo} alt="PC Clean" style={{ height: "40px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#welcome">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                Quiénes somos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;