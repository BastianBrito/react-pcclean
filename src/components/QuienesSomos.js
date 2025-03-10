import React, { useEffect } from 'react';
import './QuienesSomos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuienesSomos = () => {

    useEffect(() => {
          AOS.init({
            once: false,
            // disable: "phone",
            duration: 2000,
            easing: "ease-in-out-back",
            mirror: false,
            anchorPlacement: 'top-bottom'
          });
        }, []);

    return (
        <div className="quienes-somos-container" data-aos="fade">
            <h1 className="quienes-somos-title">¿Quiénes Somos?</h1>
            <p className="quienes-somos-description">Somos una empresa dedicada a ofrecer los mejores servicios de limpieza para tu computador.</p>
        </div>
    );
};

export default QuienesSomos;