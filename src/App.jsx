import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  NavBar,
  MainPage,
  AboutUs,
  RealEstate,
  OurServices,
  ContactUs,
  OurLocation,
  OurRecords,
} from "./sections";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      <AboutUs />
      <OurServices />
      <RealEstate />
      <ContactUs />
      <OurLocation />
      {/* <OurRecords /> */}
    </div>
  );
};

export default App;
