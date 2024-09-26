import React from "react";
import { Link } from "react-router-dom";
import { ContactInfo, OurLocation, Footer } from "../sections";
import NavBar from "../components/NavBar";

const OrderNow = () => {
  return (
    <section id="OrderNow">
      <NavBar />
      <ContactInfo />
      <OurLocation />
      <Footer />
    </section>
  );
};

export default OrderNow;
