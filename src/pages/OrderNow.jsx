import React from "react";
import { Link } from "react-router-dom";
import { ContactInfo, OurLocation, Footer } from "../sections";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";

const OrderNow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <AnimatedPage>
    <section id="OrderNow" className="relative">
      <NavBar />
      <ContactInfo />
      <OurLocation />
      <Footer />
    </section>
    // </AnimatedPage>
  );
};

export default OrderNow;
