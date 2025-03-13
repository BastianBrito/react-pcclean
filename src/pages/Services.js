import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import cpuIcon from "../assets/images/Cpu.svg";
import gpuIcon from "../assets/images/GPU.svg";
import fanIcon from "../assets/images/fan.svg";
import "./Services.css";
import "aos/dist/aos.css";

const services = [
  {
    title: "Cambio de Pasta Térmica (CPU)",
    description: "Mejora la disipación del calor del procesador.",
    price: "7.000",
    icon: cpuIcon,
  },
  {
    title: "Cambio de Pasta Térmica (GPU)",
    description: "Evita sobrecalentamientos y mejora la eficiencia.",
    price: "10.000",
    icon: gpuIcon,
    extraInfo: "No incluye cambio de thermal pad",
  },
  {
    title: "Limpieza de Ventiladores",
    description: "Eliminamos el polvo para mejorar el flujo de aire.",
    price: "1.500 c/u",
    icon: fanIcon,
    extraInfo: "No incluye apertura de rodamientos",
  },
];



const Services = ({ setInitialMessage }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [previousSelectValue, setPreviousSelectValue] = useState({});
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  const handleCheckboxChange = (priceInt, isChecked, title) => {
    if (isChecked) {
      setTotalPrice((prevTotal) => prevTotal + priceInt);
      setSelectedServices((prev) => [...prev, { title, price: priceInt }]);
    } else {
      setTotalPrice((prevTotal) => prevTotal - priceInt);
      setSelectedServices((prev) =>
        prev.filter((service) => service.title !== title)
      );
    }
  };

  const handleSelectChange = (title, selectedValue) => {
    const previousValue = previousSelectValue[title] || 0;
    const newTotal = (selectedValue - previousValue) * 1500;
    setTotalPrice((prevTotal) => prevTotal + newTotal);
    setPreviousSelectValue((prevValues) => ({
      ...prevValues,
      [title]: selectedValue,
    }));

    if (selectedValue > 0) {
      setSelectedServices((prev) => [
        ...prev.filter((service) => service.title !== title),
        { title, price: selectedValue * 1500, quantity: selectedValue },
      ]);
    } else {
      setSelectedServices((prev) =>
        prev.filter((service) => service.title !== title)
      );
    }
  };

  const handleConfirmSelection = () => {
    let message = "Usted ha seleccionado:\n";
    message += "- Servicio base de limpieza ($15.000)\n";

    selectedServices.forEach((service) => {
      if (service.quantity) {
        message += `- ${service.title} (${service.quantity} unidades) ($${service.price})\n`;
      } else {
        message += `- ${service.title} ($${service.price})\n`;
      }
    });

    message += `Precio total: ${(totalPrice + 15000).toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    })}`;

    setInitialMessage(message);
    setShowConfirmationMessage(true);
  };

  return (
    <section id="servicios" className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-right">Selecciona tu Servicio de Limpieza</h2>
      <p className="text-center fw-bold" data-aos="fade-left">
        ¡Tu PC como nueva! 🔧✨ Todas nuestras limpiezas incluyen eliminación de
        polvo y organización de cables.
      </p>

      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <ServiceCard
              {...service}
              onCheckboxChange={(price, isChecked) =>
                handleCheckboxChange(price, isChecked, service.title)
              }
              onSelectChange={handleSelectChange}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4" data-aos="fade">
        <h4>
          Precio Total:{" "}
          {(totalPrice + 15000).toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </h4>
        <p className="info-total">El precio incluye el servicio de limpieza base ($15.000)</p>
        <button className="confirm-button" onClick={handleConfirmSelection}>
          Confirmar Selección
        </button>
        {showConfirmationMessage && (
          <p className="confirmation-message">
            ¡ 😎 Los servicios seleccionados se han agregado al formulario de
            contacto !
          </p>
        )}
      </div>
    </section>
  );
};

export default Services;
