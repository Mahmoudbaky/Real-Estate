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

const Home = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      <AboutUs />
      <OurServices />
      <RealEstate />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
