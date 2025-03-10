import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = ({ initialMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+56-9",
    message: initialMessage || "Quisiera más información sobre sus servicios.",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      message: initialMessage || "Quisiera más información sobre sus servicios.",
    }));
  }, [initialMessage]);

  const validate = () => {
    let errors = {};

    if (!formData.name.trim() || formData.name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Ingresa un correo válido.";
    }

    if (formData.phone.length !== 15) {
      errors.phone = "Formato inválido. Usa: +56-9-####-####";
    }

    if (
      formData.name.length > 300 ||
      formData.email.length > 300 ||
      formData.phone.length > 300
    ) {
      errors.general = "Los campos no pueden superar los 300 caracteres.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formatPhone = (value) => {
    let digits = value.replace(/[^\d]/g, ""); // Elimina caracteres no numéricos

    if (digits.startsWith("569")) {
      digits = digits.slice(3); // Elimina el prefijo "569" para formatear
    }

    if (digits.length > 8) {
      digits = digits.slice(0, 8); // Limita el número a 8 dígitos
    }

    if (digits.length > 4) {
      return `+56-9-${digits.slice(0, 4)}-${digits.slice(4)}`;
    } else if (digits.length > 0) {
      return `+56-9-${digits}`;
    } else {
      return "+56-9"; // Reiniciar formato si intentan borrar el prefijo
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 300) return;

    if (name === "phone") {
      setFormData({ ...formData, phone: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("https://serviceemailservice.azurewebsites.net/api/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Formulario enviado:", formData);
          alert("¡Mensaje enviado con éxito!");
        } else {
          alert("Hubo un problema al enviar el mensaje.");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un problema al enviar el mensaje.");
      }
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <section className="contact-section">
      <h2 className="contact-title" data-aos="fade-left">📩 Contáctanos</h2>
      <p className="contact-info" data-aos="fade-down">Envíanos tu cotización por medio de este formulario y nosotros de responderemos. ¡Las cotizaciones son gratis!</p>
      <form className="contact-form" data-aos="fade-right" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>👤 Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>📧 Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>📞 Teléfono</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+56-9-####-####"
            required
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label>✉️ Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            readOnly
            placeholder="Quisiera más información sobre sus servicios."
            rows="8"
          />
        </div>

        {errors.general && <small className="error">{errors.general}</small>}

        <button type="submit" className="contact-btn">
          Enviar Mensaje 🚀
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
