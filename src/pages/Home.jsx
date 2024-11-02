import React from "react";
import {
  NavBar,
  MainPage,
  AboutUs,
  RealEstate,
  OurServices,
  ContactUs,
  Footer,
  RealEstateTypes,
  OtherServices,
} from "../sections";
import { useEffect } from "react";
import NavAlt from "../components/NavAlt";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <AnimatedPage>
    <div>
      <NavBar />
      <MainPage />
      <AboutUs />
      <OurServices />
      <RealEstate />
      {/* <RealEstateTypes /> */}
      <OtherServices />
      <ContactUs />
      <Footer />
    </div>
    // </AnimatedPage>
  );
};

export default Home;
