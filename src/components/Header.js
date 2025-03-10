import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="bg-dark py-2 fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <img
          src={logo}
          alt="PC Clean"
          className="logo"
          style={{ height: "40px" }}
        />
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
              <a className="nav-link text-light" href="#welcome">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#reviews">
                Reseñas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
