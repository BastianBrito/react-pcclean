import React, { useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import ContactForm from "../components/ContactForm";
import Services from "./Services";
import Footer from "../components/Footer";

const Home = () => {
  const [initialMessage, setInitialMessage] = useState(
    " --Hola, me gustaría saber más sobre sus servicios. -- "
  );

  return (
    <>
      <Header />
      <section id="welcome">
        <Welcome />
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
