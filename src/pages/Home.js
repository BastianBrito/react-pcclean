import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import ContactForm from "../components/ContactForm";
import Services from "./Services";
import Footer from "../components/Footer";
import QuienesSomos from "../components/QuienesSomos";
const Home = () => {
  const [initialMessage, setInitialMessage] = useState(
    " --Hola, me gustaría saber más sobre sus servicios. -- "
  );

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);

  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="welcome">
        <Welcome />
      </section>
      <section id="about-us">
        <QuienesSomos />
      </section>
      <section id="services">
        <Services setInitialMessage={setInitialMessage} />
      </section>
      <section id="contact">
        <ContactForm initialMessage={initialMessage} />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
