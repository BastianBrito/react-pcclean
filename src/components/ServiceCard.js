import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceCard.css";

const ServiceCard = ({
  title,
  description,
  price,
  icon,
  extraInfo,
  onCheckboxChange,
  onSelectChange,
}) => {
  const priceInt = parseInt(price.replace(/[.,]/g, ""), 10);

  const handleCheckboxChange = (event) => {
    onCheckboxChange(priceInt, event.target.checked);
  };

  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    onSelectChange(title, selectedValue);
  };

  useEffect(() => {
    AOS.init({
      once: false,
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="service-card" data-aos="flip-right">
      <div className="card-content">
        <img src={icon} alt={title} className="service-card-img" />
        <h5 className="service-card-title">{title}</h5>
        <p className="service-card-description">{description}</p>
        <p className="service-card-price">${price}</p>

        {title === "Limpieza de Ventiladores" ? (
          <div>
            <small>Cantidad de ventiladores:</small>
            <select
              className="service-card-select"
              onChange={handleSelectChange}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="service-card-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id={`checkbox-${title}`}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor={`checkbox-${title}`}>
              Agregar Servicio
            </label>
          </div>
        )}

        <p>
          {extraInfo && (
            <small className="service-card-extra">{extraInfo}</small>
          )}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
