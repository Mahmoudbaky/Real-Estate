import React from "react";
import {
  NavBar,
  MainPage,
  AboutUs,
  RealEstate,
  OurServices,
  ContactUs,
  Footer,
} from "../sections";

import NavAlt from "../components/NavAlt";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
  return (
    // <AnimatedPage>
    <div>
      <NavBar />
      <MainPage />
      <AboutUs />
      <OurServices />
      <RealEstate />
      <ContactUs />
      <Footer />
    </div>
    // </AnimatedPage>
  );
};

export default Home;
