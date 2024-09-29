import React from "react";
import { ContactInfo, OurLocation, Footer } from "../sections";
import NavBar from "../components/NavBar";

// import AnimatedPage from "../components/AnimatedPage";

const OrderNow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <AnimatedPage>
    <section id="OrderNow">
      <NavBar />
      <ContactInfo />
      <OurLocation />
      <Footer />
    </section>
    // </AnimatedPage>
  );
};

export default OrderNow;
